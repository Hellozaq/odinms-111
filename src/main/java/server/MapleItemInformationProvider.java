package server;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import client.inventory.Equip;
import client.inventory.Item;
import client.inventory.ItemFlag;
import constants.GameConstants;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleTrait.MapleTraitType;
import client.inventory.EquipAdditions;
import client.inventory.MapleInventoryType;
import constants.BattleConstants.PokemonItem;
import database.DatabaseConnection;

import java.awt.Point;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.EnumMap;
import java.util.LinkedList;

import provider.MapleData;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataEntry;
import provider.MapleDataFileEntry;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import provider.MapleDataType;
import server.StructSetItem.SetItem;
import tools.Pair;
import tools.Triple;

public class MapleItemInformationProvider {

    private final static MapleItemInformationProvider instance = new MapleItemInformationProvider();
    protected final MapleDataProvider chrData = MapleDataProviderFactory.getDataProvider(new File(System.getProperty("net.sf.odinms.wzpath") + "/Character.wz"));
    protected final MapleDataProvider etcData = MapleDataProviderFactory.getDataProvider(new File(System.getProperty("net.sf.odinms.wzpath") + "/Etc.wz"));
    protected final MapleDataProvider itemData = MapleDataProviderFactory.getDataProvider(new File(System.getProperty("net.sf.odinms.wzpath") + "/Item.wz"));
    protected final MapleDataProvider stringData = MapleDataProviderFactory.getDataProvider(new File(System.getProperty("net.sf.odinms.wzpath") + "/String.wz"));
    protected final Map<Integer, ItemInformation> dataCache = new HashMap<Integer, ItemInformation>();
    protected final Map<String, List<Triple<String, Point, Point>>> afterImage = new HashMap<String, List<Triple<String, Point, Point>>>();
    protected final Map<Integer, List<StructItemOption>> potentialCache = new HashMap<Integer, List<StructItemOption>>();
    protected final Map<Integer, Map<Integer, StructItemOption>> socketCache = new HashMap<Integer, Map<Integer, StructItemOption>>(); // Grade, (id, data)
    protected final Map<Integer, MapleStatEffect> itemEffects = new HashMap<Integer, MapleStatEffect>();
    protected final Map<Integer, MapleStatEffect> itemEffectsEx = new HashMap<Integer, MapleStatEffect>();
    protected final Map<Integer, Integer> mobIds = new HashMap<Integer, Integer>();
    protected final Map<Integer, Pair<Integer, Integer>> potLife = new HashMap<Integer, Pair<Integer, Integer>>(); //itemid to lifeid, levels
    protected final Map<Integer, StructFamiliar> familiars = new HashMap<Integer, StructFamiliar>(); //by familiarID
    protected final Map<Integer, StructFamiliar> familiars_Item = new HashMap<Integer, StructFamiliar>(); //by cardID
    protected final Map<Integer, StructFamiliar> familiars_Mob = new HashMap<Integer, StructFamiliar>(); //by mobID
    protected final Map<Integer, Pair<List<Integer>, List<Integer>>> androids = new HashMap<Integer, Pair<List<Integer>, List<Integer>>>();
    protected final Map<Integer, Triple<Integer, List<Integer>, List<Integer>>> monsterBookSets = new HashMap<Integer, Triple<Integer, List<Integer>, List<Integer>>>();
    protected final Map<Byte, StructSetItem> setItems = new HashMap<Byte, StructSetItem>();

    public void runEtc() {
        if (!setItems.isEmpty() || !potentialCache.isEmpty() || !socketCache.isEmpty()) {
            return;
        }
        final MapleData setsData = etcData.getData("SetItemInfo.img");
        StructSetItem itemz;
        SetItem itez;
        for (MapleData dat : setsData) {
            itemz = new StructSetItem();
            itemz.setItemID = Byte.parseByte(dat.getName());
            itemz.completeCount = (byte) MapleDataTool.getIntConvert("completeCount", dat, 0);
            for (MapleData level : dat.getChildByPath("ItemID")) {
                if (level.getType() != MapleDataType.INT) {
                    for (MapleData leve : level) {
                        if (!leve.getName().equals("representName") && !leve.getName().equals("typeName")) {
                            itemz.itemIDs.add(MapleDataTool.getInt(leve));
                        }
                    }
                } else {
                    itemz.itemIDs.add(MapleDataTool.getInt(level));
                }
            }
            for (MapleData level : dat.getChildByPath("Effect")) {
                itez = new SetItem();
                itez.incPDD = MapleDataTool.getIntConvert("incPDD", level, 0);
                itez.incMDD = MapleDataTool.getIntConvert("incMDD", level, 0);
                itez.incSTR = MapleDataTool.getIntConvert("incSTR", level, 0);
                itez.incDEX = MapleDataTool.getIntConvert("incDEX", level, 0);
                itez.incINT = MapleDataTool.getIntConvert("incINT", level, 0);
                itez.incLUK = MapleDataTool.getIntConvert("incLUK", level, 0);
                itez.incACC = MapleDataTool.getIntConvert("incACC", level, 0);
                itez.incPAD = MapleDataTool.getIntConvert("incPAD", level, 0);
                itez.incMAD = MapleDataTool.getIntConvert("incMAD", level, 0);
                itez.incSpeed = MapleDataTool.getIntConvert("incSpeed", level, 0);
                itez.incMHP = MapleDataTool.getIntConvert("incMHP", level, 0);
                itez.incMMP = MapleDataTool.getIntConvert("incMMP", level, 0);
                itez.incMHPr = MapleDataTool.getIntConvert("incMHPr", level, 0);
                itez.incMMPr = MapleDataTool.getIntConvert("incMMPr", level, 0);
                itez.incAllStat = MapleDataTool.getIntConvert("incAllStat", level, 0);
                itez.option1 = MapleDataTool.getIntConvert("Option/1/option", level, 0);
                itez.option2 = MapleDataTool.getIntConvert("Option/2/option", level, 0);
                itez.option1Level = MapleDataTool.getIntConvert("Option/1/level", level, 0);
                itez.option2Level = MapleDataTool.getIntConvert("Option/2/level", level, 0);
                itemz.items.put(Integer.parseInt(level.getName()), itez);
            }
            setItems.put(itemz.setItemID, itemz);
        }


        StructItemOption item;
        final MapleData potsData = itemData.getData("ItemOption.img");
        List<StructItemOption> items;
        for (MapleData dat : potsData) {
            items = new LinkedList<StructItemOption>();
            for (MapleData potLevel : dat.getChildByPath("level")) {
                item = new StructItemOption();
                item.opID = Integer.parseInt(dat.getName());
                item.optionType = MapleDataTool.getIntConvert("info/optionType", dat, 0);
                item.reqLevel = MapleDataTool.getIntConvert("info/reqLevel", dat, 0);
                for (final String i : StructItemOption.types) {
                    if (i.equals("face")) {
                        item.face = MapleDataTool.getString("face", potLevel, "");
                    } else {
                        final int level = MapleDataTool.getIntConvert(i, potLevel, 0);
                        if (level > 0) { // Save memory
                            item.data.put(i, level);
                        }
                    }
                }
                switch (item.opID) {
                    case 31001: // Haste
                    case 31002: // Mystic Door
                    case 31003: // Sharp Eyes
                    case 31004: // Hyper Body
                        item.data.put("skillID", (item.opID - 23001));
                        break;
                    case 41005: // Combat Orders
                    case 41006: // Advanced Blessing
                    case 41007: // Speed Infusion
                        item.data.put("skillID", (item.opID - 33001));
                        break;
                }
                items.add(item);
            }

            potentialCache.put(Integer.parseInt(dat.getName()), items);
        }

        final Map<Integer, StructItemOption> gradeS = new HashMap<Integer, StructItemOption>();
        final Map<Integer, StructItemOption> gradeA = new HashMap<Integer, StructItemOption>();
        final Map<Integer, StructItemOption> gradeB = new HashMap<Integer, StructItemOption>();
        final Map<Integer, StructItemOption> gradeC = new HashMap<Integer, StructItemOption>();
        final Map<Integer, StructItemOption> gradeD = new HashMap<Integer, StructItemOption>();
        final MapleData nebuliteData = itemData.getData("Install/0306.img");
        for (MapleData dat : nebuliteData) {
            item = new StructItemOption();
            item.opID = Integer.parseInt(dat.getName()); // Item Id
            item.optionType = MapleDataTool.getInt("optionType", dat.getChildByPath("socket"), 0);
            for (MapleData info : dat.getChildByPath("socket/option")) {
                final String optionString = MapleDataTool.getString("optionString", info, "");
                final int level = MapleDataTool.getInt("level", info, 0);
                if (level > 0) { // Save memory
                    item.data.put(optionString, level);
                }
            }
            switch (item.opID) {
                case 3063370: // Haste
                    item.data.put("skillID", 8000);
                    break;
                case 3063380: // Mystic Door
                    item.data.put("skillID", 8001);
                    break;
                case 3063390: // Sharp Eyes
                    item.data.put("skillID", 8002);
                    break;
                case 3063400: // Hyper Body
                    item.data.put("skillID", 8003);
                    break;
                case 3064470: // Combat Orders
                    item.data.put("skillID", 8004);
                    break;
                case 3064480: // Advanced Blessing
                    item.data.put("skillID", 8005);
                    break;
                case 3064490: // Speed Infusion
                    item.data.put("skillID", 8006);
                    break;
            }
            switch (GameConstants.getNebuliteGrade(item.opID)) {
                case 4: //S
                    gradeS.put(Integer.parseInt(dat.getName()), item);
                    break;
                case 3: //A
                    gradeA.put(Integer.parseInt(dat.getName()), item);
                    break;
                case 2: //B
                    gradeB.put(Integer.parseInt(dat.getName()), item);
                    break;
                case 1: //C
                    gradeC.put(Integer.parseInt(dat.getName()), item);
                    break;
                case 0: //D
                    gradeD.put(Integer.parseInt(dat.getName()), item);
                    break; // impossible to be -1 since we're looping in 306.img.xml					
            }
        }
        socketCache.put(4, gradeS);
        socketCache.put(3, gradeA);
        socketCache.put(2, gradeB);
        socketCache.put(1, gradeC);
        socketCache.put(0, gradeD);

        final MapleDataDirectoryEntry e = (MapleDataDirectoryEntry) etcData.getRoot().getEntry("Android");
        for (MapleDataEntry d : e.getFiles()) {
            final MapleData iz = etcData.getData("Android/" + d.getName());
            final List<Integer> hair = new ArrayList<Integer>(), face = new ArrayList<Integer>();
            for (MapleData ds : iz.getChildByPath("costume/hair")) {
                hair.add(MapleDataTool.getInt(ds, 30000));
            }
            for (MapleData ds : iz.getChildByPath("costume/face")) {
                face.add(MapleDataTool.getInt(ds, 20000));
            }
            androids.put(Integer.parseInt(d.getName().substring(0, 4)), new Pair<List<Integer>, List<Integer>>(hair, face));
        }

        final MapleData lifesData = etcData.getData("ItemPotLifeInfo.img");
        for (MapleData d : lifesData) {
            if (d.getChildByPath("info") != null && MapleDataTool.getInt("type", d.getChildByPath("info"), 0) == 1) {
                potLife.put(MapleDataTool.getInt("counsumeItem", d.getChildByPath("info"), 0), new Pair<Integer, Integer>(Integer.parseInt(d.getName()), d.getChildByPath("level").getChildren().size()));
            }
        }
        List<Triple<String, Point, Point>> thePointK = new ArrayList<Triple<String, Point, Point>>();
        List<Triple<String, Point, Point>> thePointA = new ArrayList<Triple<String, Point, Point>>();

        final MapleDataDirectoryEntry a = (MapleDataDirectoryEntry) chrData.getRoot().getEntry("Afterimage");
        for (MapleDataEntry b : a.getFiles()) {
            final MapleData iz = chrData.getData("Afterimage/" + b.getName());
            List<Triple<String, Point, Point>> thePoint = new ArrayList<Triple<String, Point, Point>>();
            Map<String, Pair<Point, Point>> dummy = new HashMap<String, Pair<Point, Point>>();
            for (MapleData i : iz) {
                for (MapleData xD : i) {
                    if (xD.getName().contains("prone") || xD.getName().contains("double") || xD.getName().contains("triple")) {
                        continue;
                    }
                    if ((b.getName().contains("bow") || b.getName().contains("Bow")) && !xD.getName().contains("shoot")) {
                        continue;
                    }
                    if ((b.getName().contains("gun") || b.getName().contains("cannon")) && !xD.getName().contains("shot")) {
                        continue;
                    }
                    if (dummy.containsKey(xD.getName())) {
                        if (xD.getChildByPath("lt") != null) {
                            Point lt = (Point) xD.getChildByPath("lt").getData();
                            Point ourLt = dummy.get(xD.getName()).left;
                            if (lt.x < ourLt.x) {
                                ourLt.x = lt.x;
                            }
                            if (lt.y < ourLt.y) {
                                ourLt.y = lt.y;
                            }
                        }
                        if (xD.getChildByPath("rb") != null) {
                            Point rb = (Point) xD.getChildByPath("rb").getData();
                            Point ourRb = dummy.get(xD.getName()).right;
                            if (rb.x > ourRb.x) {
                                ourRb.x = rb.x;
                            }
                            if (rb.y > ourRb.y) {
                                ourRb.y = rb.y;
                            }
                        }
                    } else {
                        Point lt = null, rb = null;
                        if (xD.getChildByPath("lt") != null) {
                            lt = (Point) xD.getChildByPath("lt").getData();
                        }
                        if (xD.getChildByPath("rb") != null) {
                            rb = (Point) xD.getChildByPath("rb").getData();
                        }
                        dummy.put(xD.getName(), new Pair<Point, Point>(lt, rb));
                    }
                }
            }
            for (Entry<String, Pair<Point, Point>> ez : dummy.entrySet()) {
                if (ez.getKey().length() > 2 && ez.getKey().substring(ez.getKey().length() - 2, ez.getKey().length() - 1).equals("D")) { //D = double weapon
                    thePointK.add(new Triple<String, Point, Point>(ez.getKey(), ez.getValue().left, ez.getValue().right));
                } else if (ez.getKey().contains("PoleArm")) { //D = double weapon
                    thePointA.add(new Triple<String, Point, Point>(ez.getKey(), ez.getValue().left, ez.getValue().right));
                } else {
                    thePoint.add(new Triple<String, Point, Point>(ez.getKey(), ez.getValue().left, ez.getValue().right));
                }
            }
            afterImage.put(b.getName().substring(0, b.getName().length() - 4), thePoint);
        }
        afterImage.put("katara", thePointK); //hackish
        afterImage.put("aran", thePointA); //hackish
    }

    public void runItems() {
        if (GameConstants.GMS) { //these must be loaded before items..
            final MapleData fData = etcData.getData("FamiliarInfo.img");
            for (MapleData d : fData) {
                StructFamiliar f = new StructFamiliar();
                f.grade = 0;
                f.mob = MapleDataTool.getInt("mob", d, 0);
                f.passive = MapleDataTool.getInt("passive", d, 0);
                f.itemid = MapleDataTool.getInt("consume", d, 0);
                f.familiar = Integer.parseInt(d.getName());
                familiars.put(f.familiar, f);
                familiars_Item.put(f.itemid, f);
                familiars_Mob.put(f.mob, f);
            }
            final MapleDataDirectoryEntry e = (MapleDataDirectoryEntry) chrData.getRoot().getEntry("Familiar");
            for (MapleDataEntry d : e.getFiles()) {
                final int id = Integer.parseInt(d.getName().substring(0, d.getName().length() - 4));
                if (familiars.containsKey(id)) {
                    familiars.get(id).grade = (byte) MapleDataTool.getInt("grade", chrData.getData("Familiar/" + d.getName()).getChildByPath("info"), 0);
                }
            }

            final MapleData mSetsData = etcData.getData("MonsterBookSet.img");
            for (MapleData d : mSetsData.getChildByPath("setList")) {
                if (MapleDataTool.getInt("deactivated", d, 0) > 0) {
                    continue;
                }
                final List<Integer> set = new ArrayList<Integer>(), potential = new ArrayList<Integer>(3);
                for (MapleData ds : d.getChildByPath("stats/potential")) {
                    if (ds.getType() != MapleDataType.STRING && MapleDataTool.getInt(ds, 0) > 0) {
                        potential.add(MapleDataTool.getInt(ds, 0));
                        if (potential.size() >= 5) {
                            break;
                        }
                    }
                }
                for (MapleData ds : d.getChildByPath("cardList")) {
                    set.add(MapleDataTool.getInt(ds, 0));
                }
                monsterBookSets.put(Integer.parseInt(d.getName()), new Triple<Integer, List<Integer>, List<Integer>>(MapleDataTool.getInt("setScore", d, 0), set, potential));
            }
        }

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            con = DatabaseConnection.getConnection();
            ps = con.prepareStatement("SELECT * FROM wz_itemdata");
            rs = ps.executeQuery();
            while (rs.next()) {
                initItemInformation(rs);
            }

            // Load Item Equipment Data

            ps = con.prepareStatement("SELECT * FROM wz_itemequipdata ORDER BY itemid");
            rs = ps.executeQuery();
            while (rs.next()) {
                initItemEquipData(rs);
            }


            // Load Item Addition Data

            ps = con.prepareStatement("SELECT * FROM wz_itemadddata ORDER BY itemid");
            rs = ps.executeQuery();
            while (rs.next()) {
                initItemAddData(rs);
            }


            // Load Item Reward Data

            ps = con.prepareStatement("SELECT * FROM wz_itemrewarddata ORDER BY itemid");
            rs = ps.executeQuery();
            while (rs.next()) {
                initItemRewardData(rs);
            }


            // Finalize all Equipments

            for (Entry<Integer, ItemInformation> entry : dataCache.entrySet()) {
                if (GameConstants.getInventoryType(entry.getKey()) == MapleInventoryType.EQUIP) {
                    finalizeEquipData(entry.getValue());
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            if (ps != null) {
                try {
                    ps.close();
                } catch (Exception e) {
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (Exception e) {
                }
            }
        }
    }

    public final List<StructItemOption> getPotentialInfo(final int potId) {
        return potentialCache.get(potId);
    }

    public final Map<Integer, List<StructItemOption>> getAllPotentialInfo() {
        return potentialCache;
    }

    public final StructItemOption getSocketInfo(final int potId) {
        final int grade = GameConstants.getNebuliteGrade(potId);
        if (grade == -1) {
            return null;
        }
        return socketCache.get(grade).get(potId);
    }

    public final Map<Integer, StructItemOption> getAllSocketInfo(final int grade) {
        return socketCache.get(grade);
    }

    public final Collection<Integer> getMonsterBookList() {
        return mobIds.values();
    }

    public final Map<Integer, Integer> getMonsterBook() {
        return mobIds;
    }

    public final Pair<Integer, Integer> getPot(int f) {
        return potLife.get(f);
    }

    public final StructFamiliar getFamiliar(int f) {
        return familiars.get(f);
    }

    public final Map<Integer, StructFamiliar> getFamiliars() {
        return familiars;
    }

    public final StructFamiliar getFamiliarByItem(int f) {
        return familiars_Item.get(f);
    }

    public final StructFamiliar getFamiliarByMob(int f) {
        return familiars_Mob.get(f);
    }

    public static final MapleItemInformationProvider getInstance() {
        return instance;
    }

    public final Collection<ItemInformation> getAllItems() {
        return dataCache.values();
    }

    public final List<Pair<Integer, String>> getAllItemss() {
        final List<Pair<Integer, String>> itemPairs = new ArrayList<Pair<Integer, String>>();
        MapleData itemsData;

        itemsData = stringData.getData("Cash.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Consume.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Eqp.img").getChildByPath("Eqp");
        for (final MapleData eqpType : itemsData.getChildren()) {
            for (final MapleData itemFolder : eqpType.getChildren()) {
                itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
            }
        }

        itemsData = stringData.getData("Etc.img").getChildByPath("Etc");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Ins.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }

        itemsData = stringData.getData("Pet.img");
        for (final MapleData itemFolder : itemsData.getChildren()) {
            itemPairs.add(new Pair<Integer, String>(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME")));
        }
        return itemPairs;
    }

    public final Pair<List<Integer>, List<Integer>> getAndroidInfo(int i) {
        return androids.get(i);
    }

    public final Triple<Integer, List<Integer>, List<Integer>> getMonsterBookInfo(int i) {
        return monsterBookSets.get(i);
    }

    public final Map<Integer, Triple<Integer, List<Integer>, List<Integer>>> getAllMonsterBookInfo() {
        return monsterBookSets;
    }

    protected final MapleData getItemData(final int itemId) {
        MapleData ret = null;
        final String idStr = "0" + String.valueOf(itemId);
        MapleDataDirectoryEntry root = itemData.getRoot();
        for (final MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
            // we should have .img files here beginning with the first 4 IID
            for (final MapleDataFileEntry iFile : topDir.getFiles()) {
                if (iFile.getName().equals(idStr.substring(0, 4) + ".img")) {
                    ret = itemData.getData(topDir.getName() + "/" + iFile.getName());
                    if (ret == null) {
                        return null;
                    }
                    ret = ret.getChildByPath(idStr);
                    return ret;
                } else if (iFile.getName().equals(idStr.substring(1) + ".img")) {
                    ret = itemData.getData(topDir.getName() + "/" + iFile.getName());
                    return ret;
                }
            }
        }
        //equips dont have item effects :)
        /*root = equipData.getRoot();
        for (final MapleDataDirectoryEntry topDir : root.getSubdirectories()) {
        for (final MapleDataFileEntry iFile : topDir.getFiles()) {
        if (iFile.getName().equals(idStr + ".img")) {
        ret = equipData.getData(topDir.getName() + "/" + iFile.getName());
        return ret;
        }
        }
        }*/

        return ret;
    }

    public Integer getItemIdByMob(int mobId) {
        return mobIds.get(mobId);
    }

    public Integer getSetId(int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return Integer.valueOf(i.cardSet);
    }

    /**
     * returns the maximum of items in one slot
     */
    public final short getSlotMax(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return 0;
        }
        return i.slotMax;
    }

    public final int getWholePrice(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return 0;
        }
        return i.wholePrice;
    }

    public final double getPrice(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return -1.0;
        }
        return i.price;
    }

    protected int rand(int min, int max) {
        return Math.abs((int) Randomizer.rand(min, max));
    }

    public Equip levelUpEquip(Equip equip, Map<String, Integer> sta) {
        Equip nEquip = (Equip) equip.copy();
        //is this all the stats?
        try {
            for (Entry<String, Integer> stat : sta.entrySet()) {
                if (stat.getKey().equals("STRMin")) {
                    nEquip.setStr((short) (nEquip.getStr() + rand(stat.getValue().intValue(), sta.get("STRMax").intValue())));
                } else if (stat.getKey().equals("DEXMin")) {
                    nEquip.setDex((short) (nEquip.getDex() + rand(stat.getValue().intValue(), sta.get("DEXMax").intValue())));
                } else if (stat.getKey().equals("INTMin")) {
                    nEquip.setInt((short) (nEquip.getInt() + rand(stat.getValue().intValue(), sta.get("INTMax").intValue())));
                } else if (stat.getKey().equals("LUKMin")) {
                    nEquip.setLuk((short) (nEquip.getLuk() + rand(stat.getValue().intValue(), sta.get("LUKMax").intValue())));
                } else if (stat.getKey().equals("PADMin")) {
                    nEquip.setWatk((short) (nEquip.getWatk() + rand(stat.getValue().intValue(), sta.get("PADMax").intValue())));
                } else if (stat.getKey().equals("PDDMin")) {
                    nEquip.setWdef((short) (nEquip.getWdef() + rand(stat.getValue().intValue(), sta.get("PDDMax").intValue())));
                } else if (stat.getKey().equals("MADMin")) {
                    nEquip.setMatk((short) (nEquip.getMatk() + rand(stat.getValue().intValue(), sta.get("MADMax").intValue())));
                } else if (stat.getKey().equals("MDDMin")) {
                    nEquip.setMdef((short) (nEquip.getMdef() + rand(stat.getValue().intValue(), sta.get("MDDMax").intValue())));
                } else if (stat.getKey().equals("ACCMin")) {
                    nEquip.setAcc((short) (nEquip.getAcc() + rand(stat.getValue().intValue(), sta.get("ACCMax").intValue())));
                } else if (stat.getKey().equals("EVAMin")) {
                    nEquip.setAvoid((short) (nEquip.getAvoid() + rand(stat.getValue().intValue(), sta.get("EVAMax").intValue())));
                } else if (stat.getKey().equals("SpeedMin")) {
                    nEquip.setSpeed((short) (nEquip.getSpeed() + rand(stat.getValue().intValue(), sta.get("SpeedMax").intValue())));
                } else if (stat.getKey().equals("JumpMin")) {
                    nEquip.setJump((short) (nEquip.getJump() + rand(stat.getValue().intValue(), sta.get("JumpMax").intValue())));
                } else if (stat.getKey().equals("MHPMin")) {
                    nEquip.setHp((short) (nEquip.getHp() + rand(stat.getValue().intValue(), sta.get("MHPMax").intValue())));
                } else if (stat.getKey().equals("MMPMin")) {
                    nEquip.setMp((short) (nEquip.getMp() + rand(stat.getValue().intValue(), sta.get("MMPMax").intValue())));
                } else if (stat.getKey().equals("MaxHPMin")) {
                    nEquip.setHp((short) (nEquip.getHp() + rand(stat.getValue().intValue(), sta.get("MaxHPMax").intValue())));
                } else if (stat.getKey().equals("MaxMPMin")) {
                    nEquip.setMp((short) (nEquip.getMp() + rand(stat.getValue().intValue(), sta.get("MaxMPMax").intValue())));
                }
            }
        } catch (NullPointerException e) {
            //catch npe because obviously the wz have some error XD
            e.printStackTrace();
        }
        return nEquip;
    }

    public final EnumMap<EquipAdditions, Pair<Integer, Integer>> getEquipAdditions(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.equipAdditions;
    }

    public final Map<Integer, Map<String, Integer>> getEquipIncrements(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.equipIncs;
    }

    public final List<Integer> getEquipSkills(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.incSkill;
    }

    public final Map<String, Integer> getEquipStats(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.equipStats;
    }

    public final boolean canEquip(final Map<String, Integer> stats, final int itemid, final int level, final int job, final int fame, final int str, final int dex, final int luk, final int int_, final int supremacy) {
        if ((level + supremacy) >= (stats.containsKey("reqLevel") ? stats.get("reqLevel") : 0) && str >= (stats.containsKey("reqSTR") ? stats.get("reqSTR") : 0) && dex >= (stats.containsKey("reqDEX") ? stats.get("reqDEX") : 0) && luk >= (stats.containsKey("reqLUK") ? stats.get("reqLUK") : 0) && int_ >= (stats.containsKey("reqINT") ? stats.get("reqINT") : 0)) {
            final Integer fameReq = stats.get("reqPOP");
            if (fameReq != null && fame < fameReq) {
                return false;
            }
            return true;
        }
        return false;
    }

    public final int getReqLevel(final int itemId) {
        if (getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("reqLevel")) {
            return 0;
        }
        return getEquipStats(itemId).get("reqLevel");
    }

    public final int getSlots(final int itemId) {
        if (getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("tuc")) {
            return 0;
        }
        return getEquipStats(itemId).get("tuc");
    }

    public final Integer getSetItemID(final int itemId) {
        if (getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("setItemID")) {
            return 0;
        }
        return getEquipStats(itemId).get("setItemID");
    }

    public final StructSetItem getSetItem(final int setItemId) {
        return setItems.get((byte) setItemId);
    }

    public final List<Integer> getScrollReqs(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.scrollReqs;
    }

    public Item glassEquipWithId(Item equip, int state) {
        System.out.println(state);
        if (equip.getType() == 1) {
            Equip nEquip = (Equip) equip;
            if (state == 17) {
                if (GameConstants.isWeapon(nEquip.getItemId()))
                    GameConstants.isWeaponRare(equip);
                else if (GameConstants.isCap(nEquip.getItemId()))
                    GameConstants.isCapRare(equip);
                else if ((GameConstants.isCape(nEquip.getItemId())) || (GameConstants.isFace(nEquip.getItemId())) || (GameConstants.isGlasses(nEquip.getItemId())) || (GameConstants.isBelt(nEquip.getItemId())) || (GameConstants.isPendant(nEquip.getItemId())) || (GameConstants.isRing(nEquip.getItemId())) || (GameConstants.isShield(nEquip.getItemId())) || (GameConstants.isGlove(nEquip.getItemId())) || (GameConstants.isCoat(nEquip.getItemId())) || (GameConstants.isOverall(nEquip.getItemId())) || (GameConstants.isPants(nEquip.getItemId())) || (GameConstants.isEaring(nEquip.getItemId())) || (GameConstants.isDemonShield(nEquip.getItemId())))
                    GameConstants.isAccRare(equip);
                else if (GameConstants.isShoes(nEquip.getItemId()))
                    GameConstants.isShoesRare(equip);
            } else if (state == 18) {
                if (GameConstants.isWeapon(nEquip.getItemId()))
                    GameConstants.isWeaponEpic(equip);
                else if (GameConstants.isCap(nEquip.getItemId()))
                    GameConstants.isCapEpic(equip);
                else if ((GameConstants.isCape(nEquip.getItemId())) || (GameConstants.isFace(nEquip.getItemId())) || (GameConstants.isGlasses(nEquip.getItemId())) || (GameConstants.isBelt(nEquip.getItemId())) || (GameConstants.isPendant(nEquip.getItemId())) || (GameConstants.isRing(nEquip.getItemId())) || (GameConstants.isShield(nEquip.getItemId())) || (GameConstants.isGlove(nEquip.getItemId())) || (GameConstants.isCoat(nEquip.getItemId())) || (GameConstants.isOverall(nEquip.getItemId())) || (GameConstants.isPants(nEquip.getItemId())) || (GameConstants.isEaring(nEquip.getItemId())) || (GameConstants.isDemonShield(nEquip.getItemId())))
                    GameConstants.isAccEpic(equip);
                else if (GameConstants.isShoes(nEquip.getItemId()))
                    GameConstants.isShoesEpic(equip);
            } else if (state == 19) {
                if (GameConstants.isWeapon(nEquip.getItemId()))
                    GameConstants.isWeaponUnique(equip);
                else if (GameConstants.isCap(nEquip.getItemId()))
                    GameConstants.isCapUnique(equip);
                else if ((GameConstants.isCape(nEquip.getItemId())) || (GameConstants.isFace(nEquip.getItemId())) || (GameConstants.isGlasses(nEquip.getItemId())) || (GameConstants.isBelt(nEquip.getItemId())) || (GameConstants.isPendant(nEquip.getItemId())) || (GameConstants.isRing(nEquip.getItemId())) || (GameConstants.isShield(nEquip.getItemId())) || (GameConstants.isGlove(nEquip.getItemId())) || (GameConstants.isCoat(nEquip.getItemId())) || (GameConstants.isOverall(nEquip.getItemId())) || (GameConstants.isPants(nEquip.getItemId())) || (GameConstants.isEaring(nEquip.getItemId())) || (GameConstants.isDemonShield(nEquip.getItemId())))
                    GameConstants.isAccUnique(equip);
                else if (GameConstants.isShoes(nEquip.getItemId()))
                    GameConstants.isShoesUnique(equip);
                else if (GameConstants.isPants(nEquip.getItemId()))
                    GameConstants.isPantsUnique(equip);
            } else if (state == 20) {
                if (GameConstants.isWeapon(nEquip.getItemId()))
                    GameConstants.isWeaponLegendly(equip);
                else if (GameConstants.isCap(nEquip.getItemId()))
                    GameConstants.isCapLegendly(equip);
                else if ((GameConstants.isCape(nEquip.getItemId())) || (GameConstants.isFace(nEquip.getItemId())) || (GameConstants.isGlasses(nEquip.getItemId())) || (GameConstants.isBelt(nEquip.getItemId())) || (GameConstants.isPendant(nEquip.getItemId())) || (GameConstants.isRing(nEquip.getItemId())) || (GameConstants.isShield(nEquip.getItemId())) || (GameConstants.isGlove(nEquip.getItemId())) || (GameConstants.isCoat(nEquip.getItemId())) || (GameConstants.isOverall(nEquip.getItemId())) || (GameConstants.isPants(nEquip.getItemId())) || (GameConstants.isEaring(nEquip.getItemId())) || (GameConstants.isDemonShield(nEquip.getItemId())))
                    GameConstants.isAccLegendly(equip);
                else if (GameConstants.isShoes(nEquip.getItemId()))
                    GameConstants.isShoesLegendly(equip);
                else if (GameConstants.isPants(nEquip.getItemId()))
                    GameConstants.isPantsLegendly(equip);
            } else {
                return null;
            }
        }
        return equip;
    }

    public final Item scrollEquipWithId(final Item equip, final Item scrollId, final boolean ws, final MapleCharacter chr, final int vegas) {
        if (equip.getType() == 1) { // See Item.java
            final Equip nEquip = (Equip) equip;
            final Map<String, Integer> stats = getEquipStats(scrollId.getItemId());
            final Map<String, Integer> eqstats = getEquipStats(equip.getItemId());
            final int succ = (GameConstants.isTablet(scrollId.getItemId()) ? GameConstants.getSuccessTablet(scrollId.getItemId(), nEquip.getLevel()) : ((GameConstants.isEquipScroll(scrollId.getItemId()) || GameConstants.isPotentialScroll(scrollId.getItemId()) || !stats.containsKey("success") ? 0 : stats.get("success"))));
            final int curse = (GameConstants.isTablet(scrollId.getItemId()) ? GameConstants.getCurseTablet(scrollId.getItemId(), nEquip.getLevel()) : ((GameConstants.isEquipScroll(scrollId.getItemId()) || GameConstants.isPotentialScroll(scrollId.getItemId()) || !stats.containsKey("cursed") ? 0 : stats.get("cursed"))));
            final int added = (ItemFlag.LUKCYDAY.check(equip.getFlag()) ? 10 : 0) + (chr.getTrait(MapleTraitType.craft).getLevel() / 10);
            int success = succ + (vegas == 5610000 && succ == 10 ? 20 : (vegas == 5610001 && succ == 60 ? 30 : 0)) + added;
            if (ItemFlag.LUKCYDAY.check(equip.getFlag()) && !GameConstants.isPotentialScroll(scrollId.getItemId()) && !GameConstants.isEquipScroll(scrollId.getItemId()) && !GameConstants.isSpecialScroll(scrollId.getItemId())) {
                equip.setFlag((short) (equip.getFlag() - ItemFlag.LUKCYDAY.getValue()));
            }
            if (GameConstants.isPotentialScroll(scrollId.getItemId()) || GameConstants.isEquipScroll(scrollId.getItemId()) || GameConstants.isSpecialScroll(scrollId.getItemId()) || Randomizer.nextInt(100) <= success) {
                switch (scrollId.getItemId()) {
                    case 2049000:
                    case 2049001:
                    case 2049002:
                    case 2049003:
                    case 2049004:
                    case 2049005: {
                        if (eqstats.containsKey("tuc") && nEquip.getLevel() + nEquip.getUpgradeSlots() < eqstats.get("tuc")) {
                            nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() + 1));
                        }
                        break;
                    }
                    case 2049006:
                    case 2049007:
                    case 2049008: {
                        if (eqstats.containsKey("tuc") && nEquip.getLevel() + nEquip.getUpgradeSlots() < eqstats.get("tuc")) {
                            nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() + 2));
                        }
                        break;
                    }
                    case 2040727: { // Spikes on shoe, prevents slip
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.SPIKES.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 2041058: { // Cape for Cold protection
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.COLD.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 5063000:
                    case 2530000:
                    case 2530001: {
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.LUKCYDAY.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 5064000:
                    case 2531000: {
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.PROTECT.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 5064100: {
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.SAFETY.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                    case 5064300: {
                        short flag = nEquip.getFlag();
                        flag |= ItemFlag.RECOVERY.getValue();
                        nEquip.setFlag(flag);
                        break;
                    }
                   /*case 2049615:
                    case 2049616 :
                   case 2049618 : {
                        (Randomizer.nextInt(100) >= 50) {
                        nEquip.setStr();
                        nEquip.setDex();
                        nEquip.setInt();
                        nEquip.setLuk();
                        nEquip.setWatk();
                        nEquip.setMatk();
                        nEquip.setWdef();
                        nEquip.setMdef();
                        nEquip.setAcc();
                        nEquip.setAvoid();
                        nEquip.setSpeed();
                        nEquip.setJump();
                        nEquip.setHp();
                        nEquip.setMp();
                        }
                        break;
            
                    }*/ //퍼펙트 이노센트
                    default: {
                        if (GameConstants.isChaosScroll(scrollId.getItemId())) {
                            final int z = GameConstants.getChaosNumber(scrollId.getItemId());
                            if (nEquip.getStr() > 0) {
                                nEquip.setStr((short) (nEquip.getStr() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getDex() > 0) {
                                nEquip.setDex((short) (nEquip.getDex() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getInt() > 0) {
                                nEquip.setInt((short) (nEquip.getInt() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getLuk() > 0) {
                                nEquip.setLuk((short) (nEquip.getLuk() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getWatk() > 0) {
                                nEquip.setWatk((short) (nEquip.getWatk() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getWdef() > 0) {
                                nEquip.setWdef((short) (nEquip.getWdef() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMatk() > 0) {
                                nEquip.setMatk((short) (nEquip.getMatk() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMdef() > 0) {
                                nEquip.setMdef((short) (nEquip.getMdef() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getAcc() > 0) {
                                nEquip.setAcc((short) (nEquip.getAcc() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getAvoid() > 0) {
                                nEquip.setAvoid((short) (nEquip.getAvoid() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getSpeed() > 0) {
                                nEquip.setSpeed((short) (nEquip.getSpeed() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getJump() > 0) {
                                nEquip.setJump((short) (nEquip.getJump() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getHp() > 0) {
                                nEquip.setHp((short) (nEquip.getHp() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            if (nEquip.getMp() > 0) {
                                nEquip.setMp((short) (nEquip.getMp() + Randomizer.nextInt(z) * (Randomizer.nextBoolean() ? 1 : -1)));
                            }
                            break;
                        } else if (GameConstants.isEquipScroll(scrollId.getItemId())) {
                            final int chanc = Math.max((scrollId.getItemId() == 2049300 || scrollId.getItemId() == 2049303 ? 100 : (scrollId.getItemId() == 2049305 ? 60 : 80)) - (nEquip.getEnhance() * 10), 10) + added;
                            if (Randomizer.nextInt(100) > chanc) {
                                if (ItemFlag.PROTECT.check(nEquip.getFlag())) {
                                    chr.dropMessage(5, "使用裝備強化卷軸成功。");
                                } else {
                                    return null; //펑
                                }
                            } else {
                                for (int i = 0; i < (scrollId.getItemId() == 2049308 ? 5 : (scrollId.getItemId() == 2049305 ? 4 : (scrollId.getItemId() == 2049304 ? 3 : 1))); i++) {
                                    if (nEquip.getStr() > 0 || Randomizer.nextInt(50) == 1) { //1/50
                                        nEquip.setStr((short) (nEquip.getStr() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getDex() > 0 || Randomizer.nextInt(50) == 1) { //1/50
                                        nEquip.setDex((short) (nEquip.getDex() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getInt() > 0 || Randomizer.nextInt(50) == 1) { //1/50
                                        nEquip.setInt((short) (nEquip.getInt() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getLuk() > 0 || Randomizer.nextInt(50) == 1) { //1/50
                                        nEquip.setLuk((short) (nEquip.getLuk() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getWatk() > 0 && GameConstants.isWeapon(nEquip.getItemId())) {
                                        nEquip.setWatk((short) (nEquip.getWatk() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getWdef() > 0 || Randomizer.nextInt(40) == 1) { //1/40
                                        nEquip.setWdef((short) (nEquip.getWdef() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getMatk() > 0 && GameConstants.isWeapon(nEquip.getItemId())) {
                                        nEquip.setMatk((short) (nEquip.getMatk() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getMdef() > 0 || Randomizer.nextInt(40) == 1) { //1/40
                                        nEquip.setMdef((short) (nEquip.getMdef() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getAcc() > 0 || Randomizer.nextInt(20) == 1) { //1/20
                                        nEquip.setAcc((short) (nEquip.getAcc() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getAvoid() > 0 || Randomizer.nextInt(20) == 1) { //1/20
                                        nEquip.setAvoid((short) (nEquip.getAvoid() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getSpeed() > 0 || Randomizer.nextInt(10) == 1) { //1/10
                                        nEquip.setSpeed((short) (nEquip.getSpeed() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getJump() > 0 || Randomizer.nextInt(10) == 1) { //1/10
                                        nEquip.setJump((short) (nEquip.getJump() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getHp() > 0 || Randomizer.nextInt(5) == 1) { //1/5
                                        nEquip.setHp((short) (nEquip.getHp() + Randomizer.nextInt(5)));
                                    }
                                    if (nEquip.getMp() > 0 || Randomizer.nextInt(5) == 1) { //1/5
                                        nEquip.setMp((short) (nEquip.getMp() + Randomizer.nextInt(5)));
                                    }
                                    nEquip.setEnhance((byte) (nEquip.getEnhance() + 1));
                                }
                            }
                            break;
                        } else if (GameConstants.isPotentialScroll(scrollId.getItemId())) {
                            if (nEquip.getState() <= 17 && (scrollId.getItemId() / 100 == 20497)) { //에픽잠재능력주문서
                                final int chanc = (scrollId.getItemId() == 2049700 ? 100 : 80) + added; // 2049701
                                if (Randomizer.nextInt(100) > chanc) {
                                    if (ItemFlag.PROTECT.check(nEquip.getFlag())) {
                                        chr.dropMessage(5, "使用潛在能力卷軸成功。");
                                    } else {
                                        return null; //펑
                                    }
                                } else {
                                    if (scrollId.getItemId() == 2049700) {
                                        nEquip.renewPotential(4);
                                    } else {
                                        nEquip.renewPotential(2);
                                    }
                                }
                            } else if (nEquip.getState() == 0) { //일반 잠재
                                final int chanc = (scrollId.getItemId() == 5534000 || scrollId.getItemId() == 2049402 || scrollId.getItemId() == 2049406 ? 100 : (scrollId.getItemId() == 2049400 ? 90 : 70)) + added;
                                if (Randomizer.nextInt(100) > chanc) {
                                    if (ItemFlag.PROTECT.check(nEquip.getFlag())) {
                                        chr.dropMessage(5, "使用潛在能力卷軸成功。");
                                    } else {
                                        return null; //펑
                                    }
                                } else {
                                    nEquip.resetPotential();
                                }
                            }
                            break;
                        } else {
                            for (Entry<String, Integer> stat : stats.entrySet()) {
                                final String key = stat.getKey();

                                if (key.equals("STR")) {
                                    nEquip.setStr((short) (nEquip.getStr() + stat.getValue().intValue()));
                                } else if (key.equals("DEX")) {
                                    nEquip.setDex((short) (nEquip.getDex() + stat.getValue().intValue()));
                                } else if (key.equals("INT")) {
                                    nEquip.setInt((short) (nEquip.getInt() + stat.getValue().intValue()));
                                } else if (key.equals("LUK")) {
                                    nEquip.setLuk((short) (nEquip.getLuk() + stat.getValue().intValue()));
                                } else if (key.equals("PAD")) {
                                    nEquip.setWatk((short) (nEquip.getWatk() + stat.getValue().intValue()));
                                } else if (key.equals("PDD")) {
                                    nEquip.setWdef((short) (nEquip.getWdef() + stat.getValue().intValue()));
                                } else if (key.equals("MAD")) {
                                    nEquip.setMatk((short) (nEquip.getMatk() + stat.getValue().intValue()));
                                } else if (key.equals("MDD")) {
                                    nEquip.setMdef((short) (nEquip.getMdef() + stat.getValue().intValue()));
                                } else if (key.equals("ACC")) {
                                    nEquip.setAcc((short) (nEquip.getAcc() + stat.getValue().intValue()));
                                } else if (key.equals("EVA")) {
                                    nEquip.setAvoid((short) (nEquip.getAvoid() + stat.getValue().intValue()));
                                } else if (key.equals("Speed")) {
                                    nEquip.setSpeed((short) (nEquip.getSpeed() + stat.getValue().intValue()));
                                } else if (key.equals("Jump")) {
                                    nEquip.setJump((short) (nEquip.getJump() + stat.getValue().intValue()));
                                } else if (key.equals("MHP")) {
                                    nEquip.setHp((short) (nEquip.getHp() + stat.getValue().intValue()));
                                } else if (key.equals("MMP")) {
                                    nEquip.setMp((short) (nEquip.getMp() + stat.getValue().intValue()));
                                }
                            }
                            break;
                        }
                    }
                }
                if (!GameConstants.isCleanSlate(scrollId.getItemId()) && !GameConstants.isSpecialScroll(scrollId.getItemId()) && !GameConstants.isEquipScroll(scrollId.getItemId()) && !GameConstants.isPotentialScroll(scrollId.getItemId())) {
                    nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() - 1));
                    nEquip.setLevel((byte) (nEquip.getLevel() + 1));
                }
            } else {
                if (!ws && !GameConstants.isCleanSlate(scrollId.getItemId()) && !GameConstants.isSpecialScroll(scrollId.getItemId()) && !GameConstants.isEquipScroll(scrollId.getItemId()) && !GameConstants.isPotentialScroll(scrollId.getItemId())) {
                    if (ItemFlag.SAFETY.check(nEquip.getFlag())) {
                        chr.dropMessage(5, "由於卷軸的作用，裝備可升級的次數沒有減少。");
                    } else {
                        nEquip.setUpgradeSlots((byte) (nEquip.getUpgradeSlots() - 1));
                    }
                }
                if (Randomizer.nextInt(99) < curse) {
                    if (ItemFlag.PROTECT.check(nEquip.getFlag())) {
                        chr.dropMessage(5, "由於卷軸的作用，裝備沒有發生任何變化。");
                    } else {
                        return null; //펑
                    }
                }
            }
        }
        return equip;
    }

    public final Item getEquipById(final int equipId) {
        return getEquipById(equipId, -1);
    }

    public final Item getEquipById(final int equipId, final int ringId) {
        final ItemInformation i = getItemInformation(equipId);
        if (i == null) {
            return new Equip(equipId, (short) 0, ringId, (byte) 0);
        }
        final Item eq = i.eq.copy();
        eq.setUniqueId(ringId);
        return eq;
    }

    protected final short getRandStatFusion(final short defaultValue, final int value1, final int value2) {
        if (defaultValue == 0) {
            return 0;
        }
        final int range = ((value1 + value2) / 2) - defaultValue;
        final int rand = Randomizer.nextInt(Math.abs(range) + 1);
        return (short) (defaultValue + (range < 0 ? -rand : rand));
    }

    protected final short getRandStat(final short defaultValue, final int maxRange) {
        if (defaultValue == 0) {
            return 0;
        }
        // vary no more than ceil of 10% of stat
        final int lMaxRange = (int) Math.min(Math.ceil(defaultValue * 0.1), maxRange);

        return (short) ((defaultValue - lMaxRange) + Randomizer.nextInt(lMaxRange * 2 + 1));
    }

    protected final short getRandStatAbove(final short defaultValue, final int maxRange) {
        if (defaultValue <= 0) {
            return 0;
        }
        final int lMaxRange = (int) Math.min(Math.ceil(defaultValue * 0.1), maxRange);

        return (short) ((defaultValue) + Randomizer.nextInt(lMaxRange + 1));
    }

    public final Equip oriStats(final Equip equip) {
        equip.setStr(getRandStat(equip.getStr(), 0));
        equip.setDex(getRandStat(equip.getDex(), 0));
        equip.setInt(getRandStat(equip.getInt(), 0));
        equip.setLuk(getRandStat(equip.getLuk(), 0));
        equip.setMatk(getRandStat(equip.getMatk(), 0));
        equip.setWatk(getRandStat(equip.getWatk(), 0));
        equip.setAcc(getRandStat(equip.getAcc(), 0));
        equip.setAvoid(getRandStat(equip.getAvoid(), 0));
        equip.setJump(getRandStat(equip.getJump(), 0));
        equip.setHands(getRandStat(equip.getHands(), 0));
        equip.setSpeed(getRandStat(equip.getSpeed(), 0));
        equip.setWdef(getRandStat(equip.getWdef(), 0));
        equip.setMdef(getRandStat(equip.getMdef(), 0));
        equip.setHp(getRandStat(equip.getHp(), 0));
        equip.setMp(getRandStat(equip.getMp(), 0));
        return equip;
    }

    public final Equip randomizeStats(final Equip equip) {
        equip.setStr(getRandStat(equip.getStr(), 5));
        equip.setDex(getRandStat(equip.getDex(), 5));
        equip.setInt(getRandStat(equip.getInt(), 5));
        equip.setLuk(getRandStat(equip.getLuk(), 5));
        equip.setMatk(getRandStat(equip.getMatk(), 5));
        equip.setWatk(getRandStat(equip.getWatk(), 5));
        equip.setAcc(getRandStat(equip.getAcc(), 5));
        equip.setAvoid(getRandStat(equip.getAvoid(), 5));
        equip.setJump(getRandStat(equip.getJump(), 5));
        equip.setHands(getRandStat(equip.getHands(), 5));
        equip.setSpeed(getRandStat(equip.getSpeed(), 5));
        equip.setWdef(getRandStat(equip.getWdef(), 10));
        equip.setMdef(getRandStat(equip.getMdef(), 10));
        equip.setHp(getRandStat(equip.getHp(), 10));
        equip.setMp(getRandStat(equip.getMp(), 10));
        return equip;
    }

    public final Equip randomizeStats_Above(final Equip equip) {
        equip.setStr(getRandStatAbove(equip.getStr(), 5));
        equip.setDex(getRandStatAbove(equip.getDex(), 5));
        equip.setInt(getRandStatAbove(equip.getInt(), 5));
        equip.setLuk(getRandStatAbove(equip.getLuk(), 5));
        equip.setMatk(getRandStatAbove(equip.getMatk(), 5));
        equip.setWatk(getRandStatAbove(equip.getWatk(), 5));
        equip.setAcc(getRandStatAbove(equip.getAcc(), 5));
        equip.setAvoid(getRandStatAbove(equip.getAvoid(), 5));
        equip.setJump(getRandStatAbove(equip.getJump(), 5));
        equip.setHands(getRandStatAbove(equip.getHands(), 5));
        equip.setSpeed(getRandStatAbove(equip.getSpeed(), 5));
        equip.setWdef(getRandStatAbove(equip.getWdef(), 10));
        equip.setMdef(getRandStatAbove(equip.getMdef(), 10));
        equip.setHp(getRandStatAbove(equip.getHp(), 10));
        equip.setMp(getRandStatAbove(equip.getMp(), 10));
        return equip;
    }

    public final Equip fuse(final Equip equip1, final Equip equip2) {
        if (equip1.getItemId() != equip2.getItemId()) {
            return equip1;
        }
        final Equip equip = (Equip) getEquipById(equip1.getItemId());
        equip.setStr(getRandStatFusion(equip.getStr(), equip1.getStr(), equip2.getStr()));
        equip.setDex(getRandStatFusion(equip.getDex(), equip1.getDex(), equip2.getDex()));
        equip.setInt(getRandStatFusion(equip.getInt(), equip1.getInt(), equip2.getInt()));
        equip.setLuk(getRandStatFusion(equip.getLuk(), equip1.getLuk(), equip2.getLuk()));
        equip.setMatk(getRandStatFusion(equip.getMatk(), equip1.getMatk(), equip2.getMatk()));
        equip.setWatk(getRandStatFusion(equip.getWatk(), equip1.getWatk(), equip2.getWatk()));
        equip.setAcc(getRandStatFusion(equip.getAcc(), equip1.getAcc(), equip2.getAcc()));
        equip.setAvoid(getRandStatFusion(equip.getAvoid(), equip1.getAvoid(), equip2.getAvoid()));
        equip.setJump(getRandStatFusion(equip.getJump(), equip1.getJump(), equip2.getJump()));
        equip.setHands(getRandStatFusion(equip.getHands(), equip1.getHands(), equip2.getHands()));
        equip.setSpeed(getRandStatFusion(equip.getSpeed(), equip1.getSpeed(), equip2.getSpeed()));
        equip.setWdef(getRandStatFusion(equip.getWdef(), equip1.getWdef(), equip2.getWdef()));
        equip.setMdef(getRandStatFusion(equip.getMdef(), equip1.getMdef(), equip2.getMdef()));
        equip.setHp(getRandStatFusion(equip.getHp(), equip1.getHp(), equip2.getHp()));
        equip.setMp(getRandStatFusion(equip.getMp(), equip1.getMp(), equip2.getMp()));
        return equip;
    }

    public final int getTotalStat(final Equip equip) { //i get COOL when my defense is higher on gms...
        return equip.getStr() + equip.getDex() + equip.getInt() + equip.getLuk() + equip.getMatk() + equip.getWatk() + equip.getAcc() + equip.getAvoid() + equip.getJump()
                + equip.getHands() + equip.getSpeed() + equip.getHp() + equip.getMp() + equip.getWdef() + equip.getMdef();
    }

    public final MapleStatEffect getItemEffect(final int itemId) {
        MapleStatEffect ret = itemEffects.get(Integer.valueOf(itemId));
        if (ret == null) {
            final MapleData item = getItemData(itemId);
            if (item == null || item.getChildByPath("spec") == null) {
                return null;
            }
            ret = MapleStatEffect.loadItemEffectFromData(item.getChildByPath("spec"), itemId);
            itemEffects.put(Integer.valueOf(itemId), ret);
        }
        return ret;
    }

    public final MapleStatEffect getItemEffectlevel(final int itemId, final int le) {
        MapleStatEffect ret = itemEffects.get(Integer.valueOf(itemId));
        if (ret == null) {
            final MapleData item = getItemData(itemId);
            if (item == null || item.getChildByPath("spec") == null) {
                return null;
            }
            ret = MapleStatEffect.loadItemEffectFromData(item.getChildByPath("spec"), itemId, le);
            itemEffects.put(Integer.valueOf(itemId), ret);
        }
        return ret;
    }

    public final MapleStatEffect getItemEffectEX(final int itemId) {
        MapleStatEffect ret = itemEffectsEx.get(Integer.valueOf(itemId));
        if (ret == null) {
            final MapleData item = getItemData(itemId);
            if (item == null || item.getChildByPath("specEx") == null) {
                return null;
            }
            ret = MapleStatEffect.loadItemEffectFromData(item.getChildByPath("specEx"), itemId);
            itemEffectsEx.put(Integer.valueOf(itemId), ret);
        }
        return ret;
    }

    public final int getCreateId(final int id) {
        final ItemInformation i = getItemInformation(id);
        if (i == null) {
            return 0;
        }
        return i.create;
    }

    public final int getCardMobId(final int id) {
        final ItemInformation i = getItemInformation(id);
        if (i == null) {
            return 0;
        }
        return i.monsterBook;
    }

    public final int getBagType(final int id) {
        final ItemInformation i = getItemInformation(id);
        if (i == null) {
            return 0;
        }
        return i.flag & 0xF;
    }

    public final int getWatkForProjectile(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null || i.equipStats == null || i.equipStats.get("incPAD") == null) {
            return 0;
        }
        return i.equipStats.get("incPAD");
    }

    public int getItemIncMHPr(int itemId) {//裝備%HP
        if (getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("MHPr")) {
            return 0;
        }
        return getEquipStats(itemId).get("MHPr");
    }

    public int getItemIncMMPr(int itemId) {//裝備%MP
        if (getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("MMPr")) {
            return 0;
        }
        return getEquipStats(itemId).get("MMPr");
    }

    public final boolean canScroll(final int scrollid, final int itemid) {
        return (scrollid / 100) % 100 == (itemid / 10000) % 100;
    }

    public int getScrollSuccess(int itemId) {
        if (itemId / 10000 != 204 || getEquipStats(itemId) == null || !getEquipStats(itemId).containsKey("success")) {
            return 0;
        }
        return (getEquipStats(itemId).get("success"));
    }

    public final String getName(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.name;
    }

    public final String getDesc(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.desc;
    }

    public final String getMsg(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.msg;
    }

    public final short getItemMakeLevel(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return 0;
        }
        return i.itemMakeLevel;
    }

    public final boolean isDropRestricted(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return ((i.flag & 0x200) != 0 || (i.flag & 0x400) != 0 || GameConstants.isDropRestricted(itemId)) && (itemId == 3012000 || itemId == 3012015 || itemId / 10000 != 301) && itemId != 2041200 && itemId != 5640000 && itemId != 4170023 && itemId != 2040124 && itemId != 2040125 && itemId != 2040126 && itemId != 2040211 && itemId != 2040212 && itemId != 2040227 && itemId != 2040228 && itemId != 2040229 && itemId != 2040230 && itemId != 1002926 && itemId != 1002906 && itemId != 1002927 && !PokemonItem.isPokemonItem(itemId);
    }

    public final boolean isPickupRestricted(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return ((i.flag & 0x80) != 0 || GameConstants.isPickupRestricted(itemId)) && itemId != 4001168 && itemId != 4031306 && itemId != 4031307;
    }

    public final boolean isAccountShared(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x100) != 0;
    }

    public final int getStateChangeItem(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return 0;
        }
        return i.stateChange;
    }

    public final int getMeso(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return 0;
        }
        return i.meso;
    }

    public final boolean isShareTagEnabled(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x800) != 0;
    }

    public final boolean isKarmaEnabled(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return i.karmaEnabled == 1;
    }

    public final boolean isPKarmaEnabled(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return i.karmaEnabled == 2;
    }

    public final boolean isPickupBlocked(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x40) != 0;
    }

    public final boolean isLogoutExpire(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x20) != 0;
    }

    public final boolean cantSell(final int itemId) { //true = cant sell, false = can sell
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x10) != 0;
    }

    public final Pair<Integer, List<StructRewardItem>> getRewardItem(final int itemid) {
        final ItemInformation i = getItemInformation(itemid);
        if (i == null) {
            return null;
        }
        return new Pair<Integer, List<StructRewardItem>>(i.totalprob, i.rewardItems);
    }

    public final boolean isMobHP(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x1000) != 0;
    }

    public final boolean isQuestItem(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return false;
        }
        return (i.flag & 0x200) != 0 && itemId / 10000 != 301;
    }

    public final Pair<Integer, List<Integer>> questItemInfo(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return new Pair<Integer, List<Integer>>(i.questId, i.questItems);
    }

    public final Pair<Integer, String> replaceItemInfo(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return new Pair<Integer, String>(i.replaceItem, i.replaceMsg);
    }

    public final List<Triple<String, Point, Point>> getAfterImage(final String after) {
        return afterImage.get(after);
    }

    public final String getAfterImage(final int itemId) {
        final ItemInformation i = getItemInformation(itemId);
        if (i == null) {
            return null;
        }
        return i.afterImage;
    }

    public final boolean itemExists(final int itemId) {
        if (GameConstants.getInventoryType(itemId) == MapleInventoryType.UNDEFINED) {
            return false;
        }
        return getItemInformation(itemId) != null;
    }

    public final boolean isCash(final int itemId) {
        if (getEquipStats(itemId) == null) {
            return GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH;
        }
        return GameConstants.getInventoryType(itemId) == MapleInventoryType.CASH || getEquipStats(itemId).get("cash") != null;
    }

    public final ItemInformation getItemInformation(final int itemId) {
        if (itemId <= 0) {
            return null;
        }
        return dataCache.get(itemId);
    }

    private ItemInformation tmpInfo = null;

    public void initItemRewardData(ResultSet sqlRewardData) throws SQLException {
        final int itemID = sqlRewardData.getInt("itemid");
        if (tmpInfo == null || tmpInfo.itemId != itemID) {
            if (!dataCache.containsKey(itemID)) {
                System.out.println("[initItemRewardData] Tried to load an item while this is not in the cache: " + itemID);
                return;
            }
            tmpInfo = dataCache.get(itemID);
        }

        if (tmpInfo.rewardItems == null) {
            tmpInfo.rewardItems = new ArrayList<StructRewardItem>();
        }


        StructRewardItem add = new StructRewardItem();
        add.itemid = sqlRewardData.getInt("item");
        add.period = (add.itemid == 1122017 || add.itemid == 1122156 ? Math.max(sqlRewardData.getInt("period"), 7200) : sqlRewardData.getInt("period"));
        add.prob = sqlRewardData.getInt("prob");
        add.quantity = sqlRewardData.getShort("quantity");
        add.worldmsg = sqlRewardData.getString("worldMsg").length() <= 0 ? null : sqlRewardData.getString("worldMsg");
        add.effect = sqlRewardData.getString("effect");

        tmpInfo.rewardItems.add(add);
    }

    public void initItemAddData(ResultSet sqlAddData) throws SQLException {
        final int itemID = sqlAddData.getInt("itemid");
        if (tmpInfo == null || tmpInfo.itemId != itemID) {
            if (!dataCache.containsKey(itemID)) {
                System.out.println("[initItemAddData] Tried to load an item while this is not in the cache: " + itemID);
                return;
            }
            tmpInfo = dataCache.get(itemID);
        }

        if (tmpInfo.equipAdditions == null) {
            tmpInfo.equipAdditions = new EnumMap<EquipAdditions, Pair<Integer, Integer>>(EquipAdditions.class);
        }

        EquipAdditions z = EquipAdditions.fromString(sqlAddData.getString("key"));
        if (z != null) {
            tmpInfo.equipAdditions.put(z, new Pair<Integer, Integer>(sqlAddData.getInt("value1"), sqlAddData.getInt("value2")));
        }
    }

    public void initItemEquipData(ResultSet sqlEquipData) throws SQLException {
        final int itemID = sqlEquipData.getInt("itemid");
        if (tmpInfo == null || tmpInfo.itemId != itemID) {
            if (!dataCache.containsKey(itemID)) {
                System.out.println("[initItemEquipData] Tried to load an item while this is not in the cache: " + itemID);
                return;
            }
            tmpInfo = dataCache.get(itemID);
        }

        if (tmpInfo.equipStats == null) {
            tmpInfo.equipStats = new HashMap<String, Integer>();
        }

        final int itemLevel = sqlEquipData.getInt("itemLevel");
        if (itemLevel == -1) {
            tmpInfo.equipStats.put(sqlEquipData.getString("key"), sqlEquipData.getInt("value"));
        } else {
            if (tmpInfo.equipIncs == null) {
                tmpInfo.equipIncs = new HashMap<Integer, Map<String, Integer>>();
            }

            Map<String, Integer> toAdd = tmpInfo.equipIncs.get(itemLevel);
            if (toAdd == null) {
                toAdd = new HashMap<String, Integer>();
                tmpInfo.equipIncs.put(itemLevel, toAdd);
            }
            toAdd.put(sqlEquipData.getString("key"), sqlEquipData.getInt("value"));
        }
    }

    public void finalizeEquipData(ItemInformation item) {
        int itemId = item.itemId;

        // Some equips do not have equip data. So we initialize it anyway if not initialized
        // already
        // Credits: Jay :)
        if (item.equipStats == null) {
            item.equipStats = new HashMap<String, Integer>();
        }


        item.eq = new Equip(itemId, (byte) 0, -1, (byte) 0);
        short stats = GameConstants.getStat(itemId, 0);
        if (stats > 0) {
            item.eq.setStr(stats);
            item.eq.setDex(stats);
            item.eq.setInt(stats);
            item.eq.setLuk(stats);
        }
        stats = GameConstants.getATK(itemId, 0);
        if (stats > 0) {
            item.eq.setWatk(stats);
            item.eq.setMatk(stats);
        }
        stats = GameConstants.getHpMp(itemId, 0);
        if (stats > 0) {
            item.eq.setHp(stats);
            item.eq.setMp(stats);
        }
        stats = GameConstants.getDEF(itemId, 0);
        if (stats > 0) {
            item.eq.setWdef(stats);
            item.eq.setMdef(stats);
        }
        if (item.equipStats.size() > 0) {
            for (Entry<String, Integer> stat : item.equipStats.entrySet()) {
                final String key = stat.getKey();

                if (key.equals("STR")) {
                    item.eq.setStr(GameConstants.getStat(itemId, stat.getValue().intValue()));
                } else if (key.equals("DEX")) {
                    item.eq.setDex(GameConstants.getStat(itemId, stat.getValue().intValue()));
                } else if (key.equals("INT")) {
                    item.eq.setInt(GameConstants.getStat(itemId, stat.getValue().intValue()));
                } else if (key.equals("LUK")) {
                    item.eq.setLuk(GameConstants.getStat(itemId, stat.getValue().intValue()));
                } else if (key.equals("PAD")) {
                    item.eq.setWatk(GameConstants.getATK(itemId, stat.getValue().intValue()));
                } else if (key.equals("PDD")) {
                    item.eq.setWdef(GameConstants.getDEF(itemId, stat.getValue().intValue()));
                } else if (key.equals("MAD")) {
                    item.eq.setMatk(GameConstants.getATK(itemId, stat.getValue().intValue()));
                } else if (key.equals("MDD")) {
                    item.eq.setMdef(GameConstants.getDEF(itemId, stat.getValue().intValue()));
                } else if (key.equals("ACC")) {
                    item.eq.setAcc((short) stat.getValue().intValue());
                } else if (key.equals("EVA")) {
                    item.eq.setAvoid((short) stat.getValue().intValue());
                } else if (key.equals("Speed")) {
                    item.eq.setSpeed((short) stat.getValue().intValue());
                } else if (key.equals("Jump")) {
                    item.eq.setJump((short) stat.getValue().intValue());
                } else if (key.equals("MHP")) {
                    item.eq.setHp(GameConstants.getHpMp(itemId, stat.getValue().intValue()));
                } else if (key.equals("MMP")) {
                    item.eq.setMp(GameConstants.getHpMp(itemId, stat.getValue().intValue()));
                } else if (key.equals("tuc")) {
                    item.eq.setUpgradeSlots(stat.getValue().byteValue());
                } else if (key.equals("Craft")) {
                    item.eq.setHands(stat.getValue().shortValue());
                } else if (key.equals("durability")) {
                    item.eq.setDurability(stat.getValue().intValue());
                } else if (key.equals("charmEXP")) {
                    item.eq.setCharmEXP(stat.getValue().shortValue());
                } else if (key.equals("PVPDamage")) {
                    item.eq.setPVPDamage(stat.getValue().shortValue());
                }
            }
            if (item.equipStats.get("cash") != null && item.eq.getCharmEXP() <= 0) { //set the exp
                short exp = 0;
                int identifier = itemId / 10000;
                if (GameConstants.isWeapon(itemId) || identifier == 106) { //weapon overall
                    exp = 60;
                } else if (identifier == 100) { //hats
                    exp = 50;
                } else if (GameConstants.isAccessory(itemId) || identifier == 102 || identifier == 108 || identifier == 107) { //gloves shoes accessory
                    exp = 40;
                } else if (identifier == 104 || identifier == 105 || identifier == 110) { //top bottom cape
                    exp = 30;
                }
                item.eq.setCharmEXP(exp);
            }
        }
    }

    public void initItemInformation(ResultSet sqlItemData) throws SQLException {
        final ItemInformation ret = new ItemInformation();
        final int itemId = sqlItemData.getInt("itemid");
        ret.itemId = itemId;
        ret.slotMax = GameConstants.getSlotMax(itemId) > 0 ? GameConstants.getSlotMax(itemId) : sqlItemData.getShort("slotMax");
        ret.price = Double.parseDouble(sqlItemData.getString("price"));
        ret.wholePrice = sqlItemData.getInt("wholePrice");
        ret.stateChange = sqlItemData.getInt("stateChange");
        ret.name = sqlItemData.getString("name");
        ret.desc = sqlItemData.getString("desc");
        ret.msg = sqlItemData.getString("msg");

        ret.flag = sqlItemData.getInt("flags");

        ret.karmaEnabled = sqlItemData.getByte("karma");
        ret.meso = sqlItemData.getInt("meso");
        ret.monsterBook = sqlItemData.getInt("monsterBook");
        ret.itemMakeLevel = sqlItemData.getShort("itemMakeLevel");
        ret.questId = sqlItemData.getInt("questId");
        ret.create = sqlItemData.getInt("create");
        ret.replaceItem = sqlItemData.getInt("replaceId");
        ret.replaceMsg = sqlItemData.getString("replaceMsg");
        ret.afterImage = sqlItemData.getString("afterImage");
        ret.cardSet = 0;
        if (ret.monsterBook > 0 && itemId / 10000 == 238) {
            mobIds.put(ret.monsterBook, itemId);
            for (Entry<Integer, Triple<Integer, List<Integer>, List<Integer>>> set : monsterBookSets.entrySet()) {
                if (set.getValue().mid.contains(itemId)) {
                    ret.cardSet = set.getKey();
                    break;
                }
            }
        }

        final String scrollRq = sqlItemData.getString("scrollReqs");
        if (scrollRq.length() > 0) {
            ret.scrollReqs = new ArrayList<Integer>();
            final String[] scroll = scrollRq.split(",");
            for (String s : scroll) {
                if (s.length() > 1) {
                    ret.scrollReqs.add(Integer.parseInt(s));
                }
            }
        }
        final String consumeItem = sqlItemData.getString("consumeItem");
        if (consumeItem.length() > 0) {
            ret.questItems = new ArrayList<Integer>();
            final String[] scroll = scrollRq.split(",");
            for (String s : scroll) {
                if (s.length() > 1) {
                    ret.questItems.add(Integer.parseInt(s));
                }
            }
        }

        ret.totalprob = sqlItemData.getInt("totalprob");
        final String incRq = sqlItemData.getString("incSkill");
        if (incRq.length() > 0) {
            ret.incSkill = new ArrayList<Integer>();
            final String[] scroll = incRq.split(",");
            for (String s : scroll) {
                if (s.length() > 1) {
                    ret.incSkill.add(Integer.parseInt(s));
                }
            }
        }
        dataCache.put(itemId, ret);
    }

}
