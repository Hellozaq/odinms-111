package server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import client.inventory.Item;
import client.SkillFactory;
import constants.GameConstants;
import client.inventory.MapleInventoryIdentifier;
import client.MapleClient;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import database.DatabaseConnection;
import tools.FileoutputUtil;
import tools.Pair;
import tools.packet.EtcPacket.NPCPacket;
import tools.packet.MaplePacketCreator;
import tools.packet.MaplePacketCreator.InventoryPacket;

public class MapleShop {

    private static final Set<Integer> rechargeableItems = new LinkedHashSet<Integer>();
    private int id;
    private int npcId;
    private List<MapleShopItem> items = new LinkedList<MapleShopItem>();
    private List<Pair<Integer, String>> ranks = new ArrayList<Pair<Integer, String>>();

    static {
        rechargeableItems.add(2070000);
        rechargeableItems.add(2070001);
        rechargeableItems.add(2070002);
        rechargeableItems.add(2070003);
        rechargeableItems.add(2070004);
        rechargeableItems.add(2070005);
        rechargeableItems.add(2070006);
        rechargeableItems.add(2070007);
        rechargeableItems.add(2070008);
        rechargeableItems.add(2070009);
        rechargeableItems.add(2070010);
        rechargeableItems.add(2070011);
        rechargeableItems.add(2070012);
        rechargeableItems.add(2070013);
        rechargeableItems.add(2070016);
        rechargeableItems.add(2070018); // Balanced Fury
        //rechargeableItems.add(2070019);// 마비표창
        rechargeableItems.add(2070023);
        rechargeableItems.add(2070024);
        rechargeableItems.add(2330000);
        rechargeableItems.add(2330001);
        rechargeableItems.add(2330002);
        rechargeableItems.add(2330003);
        rechargeableItems.add(2330004);
        rechargeableItems.add(2330005);
        rechargeableItems.add(2330008);
        rechargeableItems.add(2331000); // Capsules
        rechargeableItems.add(2332000); // Capsules
    }

    /**
     * Creates a new instance of MapleShop
     */
    private MapleShop(int id, int npcId) {
        this.id = id;
        this.npcId = npcId;
    }

    public void addItem(MapleShopItem item) {
        items.add(item);
    }

    public List<MapleShopItem> getItems() {
        return items;
    }

    public void sendShop(MapleClient c) {
        c.getPlayer().setShop(this);
        c.sendPacket(NPCPacket.getNPCShop(getNpcId(), this, c));
    }

    public void sendShop(MapleClient c, int customNpc) {
        c.getPlayer().setShop(this);
        c.sendPacket(NPCPacket.getNPCShop(customNpc, this, c));
    }

    public void buy(MapleClient c, int itemId, short quantity) {
        if (quantity <= 0) {
            AutobanManager.getInstance().addPoints(c, 1000, 0, "Buying " + quantity + " " + itemId);
            return;
        }
        if (itemId / 10000 == 190 && !GameConstants.isMountItemAvailable(itemId, c.getPlayer().getJob())) {
            c.getPlayer().dropMessage(1, "You may not buy this item.");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        int x = 0, index = -1;
        for (Item i : c.getPlayer().getRebuy()) {
            if (i.getItemId() == itemId) {
                index = x;
                break;
            }
            x++;
        }
        if (index >= 0) {
            final Item i = c.getPlayer().getRebuy().get(index);
            final int price = (int) Math.max(Math.ceil(ii.getPrice(itemId) * (GameConstants.isRechargable(itemId) ? 1 : i.getQuantity())), 0);
            final int price2 = (int) Math.max(Math.ceil(ii.getPrice(itemId) * i.getQuantity() + ii.getWholePrice(itemId)), 0);
            if (price >= 0 && c.getPlayer().getMeso() >= price) {
                if (MapleInventoryManipulator.checkSpace(c, itemId, i.getQuantity(), i.getOwner()) && GameConstants.isRechargable(itemId) || MapleInventoryManipulator.checkSpace(c, itemId, i.getQuantity(), i.getOwner()) && GameConstants.isBullet(itemId)) {
                    c.getPlayer().gainMeso(-price2, false);
                    MapleInventoryManipulator.addbyItem(c, i);
                    c.getPlayer().getRebuy().remove(index);
                    c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, x));
                } else if (MapleInventoryManipulator.checkSpace(c, itemId, i.getQuantity(), i.getOwner())) {
                    c.getPlayer().gainMeso(-price, false);
                    MapleInventoryManipulator.addbyItem(c, i);
                    c.getPlayer().getRebuy().remove(index);
                    c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, x));
                } else {
                    c.getPlayer().dropMessage(1, "在收到物品之前，請檢查一下背包是否留有空位。");
                    c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, -1));
                }
            } else {
                c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, -1));
            }
            return;
        }
        MapleShopItem item = findById(itemId);
        if (item != null && item.getPrice() > 0 && item.getReqItem() == 0) {
            if (item.getRank() >= 0) {
                boolean passed = true;
                int y = 0;
                for (Pair<Integer, String> i : getRanks()) {
                    if (c.getPlayer().haveItem(i.left, 1, true, true) && item.getRank() >= y) {
                        passed = true;
                        break;
                    }
                    y++;
                }
                if (!passed) {
                    c.getPlayer().dropMessage(1, "You need a higher rank.");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
            }
            final int price = GameConstants.isRechargable(itemId) ? item.getPrice() : (item.getPrice() * quantity);
            if (price >= 0 && c.getPlayer().getMeso() >= price) {
                if (MapleInventoryManipulator.checkSpace(c, itemId, quantity, "")) {
                    c.getPlayer().gainMeso(-price, false);
                    if (GameConstants.isPet(itemId)) {
                        MapleInventoryManipulator.addById(c, itemId, quantity, "", MaplePet.createPet(itemId, MapleInventoryIdentifier.getInstance()), -1, "Bought from shop " + id + ", " + npcId + " on " + FileoutputUtil.CurrentReadable_Date());
                    } else {
                        if (GameConstants.isRechargable(itemId)) {
                            quantity = ii.getSlotMax(item.getItemId());
                        }

                        MapleInventoryManipulator.addById(c, itemId, quantity, "Bought from shop ", item.getPotential() == 1 && item.getTab() == 1, item.getPeriod());
                    }
                } else {
                    c.getPlayer().dropMessage(1, "请确认是不是你的\r\n背包的空间不够。");
                }
                c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, -1));
            }
        } else if (item != null && item.getReqItem() > 0 && quantity >= 1 && c.getPlayer().haveItem(item.getReqItem(), item.getReqItemQ() * quantity, false, true)) {
            if (MapleInventoryManipulator.checkSpace(c, itemId, quantity, "")) {
                MapleInventoryManipulator.removeById(c, GameConstants.getInventoryType(item.getReqItem()), item.getReqItem(), item.getReqItemQ() * quantity, false, false);
                if (GameConstants.isPet(itemId)) {
                    MapleInventoryManipulator.addById(c, itemId, quantity, "", MaplePet.createPet(itemId, MapleInventoryIdentifier.getInstance()), -1, "");
                } else {
                    if (GameConstants.isRechargable(itemId)) {
                        quantity = ii.getSlotMax(item.getItemId());
                    }
                    MapleInventoryManipulator.addById(c, itemId, quantity, "", item.getPotential() == 1 && item.getTab() == 1, item.getPeriod());
                }
            } else {
                c.getPlayer().dropMessage(1, "请确认是不是你的\r\n背包的空间不够。");
            }
            c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0, this, c, -1));
        }
    }

    public void sell(MapleClient c, MapleInventoryType type, byte slot, short quantity) {
        if (quantity == 0xFFFF || quantity == 0) {
            quantity = 1;
        }
        Item item = c.getPlayer().getInventory(type).getItem(slot);
        if (item == null) {
            return;
        }

        if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
            quantity = item.getQuantity();
        }
        if (quantity < 0) {
            AutobanManager.getInstance().addPoints(c, 1000, 0, "Selling " + quantity + " " + item.getItemId() + " (" + type.name() + "/" + slot + ")");
            return;
        }
        short iQuant = item.getQuantity();
        if (iQuant == 0xFFFF) {
            iQuant = 1;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.cantSell(item.getItemId()) || GameConstants.isPet(item.getItemId())) {
            return;
        }
        if (quantity <= iQuant && iQuant > 0) {
            if (GameConstants.GMS) { //TODO JUMP
                if (item.getQuantity() == quantity) { // selling all
                    c.getPlayer().getRebuy().add(item.copy()); // we copy all
                } else {
                    c.getPlayer().getRebuy().add(item.copyWithQuantity(quantity));
                }
            }
            MapleInventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
            double price;
            if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
                price = ii.getPrice(item.getItemId()) * (double) quantity;//飛鏢 子彈計算方式
            } else {
                price = ii.getPrice(item.getItemId());
            }
            final int recvMesos = (int) Math.max(Math.ceil(price * quantity), 0);
            final int recvMesos2 = (int) Math.max(Math.ceil(price + ii.getWholePrice(item.getItemId())), 0);//對應飛鏢 子彈售出價格
            if (price != -1.0 && recvMesos > 0 && GameConstants.isThrowingStar(item.getItemId()) || price != -1.0 && recvMesos > 0 && GameConstants.isBullet(item.getItemId())) {
                c.getPlayer().gainMeso(recvMesos2, false);
            } else {
                c.getPlayer().gainMeso(recvMesos, false);
            }
            c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0x4, this, c, -1));
        }
    }

    public void recharge(final MapleClient c, final byte slot) {
        final Item item = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);

        if (item == null || (!GameConstants.isThrowingStar(item.getItemId()) && !GameConstants.isBullet(item.getItemId()))) {
            return;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        short slotMax = ii.getSlotMax(item.getItemId());
        final int skill = GameConstants.getMasterySkill(c.getPlayer().getJob());

        if (skill != 0) {
            //slotMax += c.getPlayer().getTotalSkillLevel(SkillFactory.getSkill(skill)) * 10;
            slotMax += c.getPlayer().getSkillLevel(SkillFactory.getSkill(skill)) * 10;
        }
        if (item.getQuantity() < slotMax) {
            final int price = (int) Math.round(ii.getPrice(item.getItemId()) * (slotMax - item.getQuantity()));
            if (c.getPlayer().getMeso() >= price) {
                item.setQuantity(slotMax);
                c.sendPacket(InventoryPacket.updateInventorySlot(MapleInventoryType.USE, (Item) item, false));
                c.getPlayer().gainMeso(-price, false, false);
                c.sendPacket(NPCPacket.confirmShopTransaction((byte) 0x8, this, c, -1));
            }
        }
    }

    protected MapleShopItem findById(int itemId) {
        for (MapleShopItem item : items) {
            if (item.getItemId() == itemId) {
                return item;
            }
        }
        return null;
    }

    public static MapleShop createFromDB(int id, boolean isShopId) {
        MapleShop ret = null;
        int shopId;
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            con = DatabaseConnection.getConnection();
            ps = con.prepareStatement(isShopId ? "SELECT * FROM shops WHERE shopid = ?" : "SELECT * FROM shops WHERE npcid = ?");
            ps.setInt(1, id);
            rs = ps.executeQuery();
            if (rs.next()) {
                shopId = rs.getInt("shopid");
                ret = new MapleShop(shopId, rs.getInt("npcid"));

            } else {

                return null;
            }
            ps = con.prepareStatement("SELECT * FROM shopitems WHERE shopid = ? ORDER BY position ASC");
            ps.setInt(1, shopId);
            rs = ps.executeQuery();
            List<Integer> recharges = new ArrayList<Integer>(rechargeableItems);
            while (rs.next()) {
                if (!ii.itemExists(rs.getInt("itemid"))) {
                    continue;
                }
                if (GameConstants.isThrowingStar(rs.getInt("itemid")) || GameConstants.isBullet(rs.getInt("itemid"))) {
                    MapleShopItem starItem = new MapleShopItem((short) 1, rs.getInt("itemid"), rs.getInt("price"), rs.getInt("reqitem"), rs.getInt("reqitemq"), rs.getByte("rank"), rs.getByte("tab"), rs.getInt("period"), rs.getInt("potential"));
                    ret.addItem(starItem);
                    if (rechargeableItems.contains(starItem.getItemId())) {
                        recharges.remove(Integer.valueOf(starItem.getItemId()));
                    }
                } else {
                    ret.addItem(new MapleShopItem((short) 1000, rs.getInt("itemid"), rs.getInt("price"), rs.getInt("reqitem"), rs.getInt("reqitemq"), rs.getByte("rank"), rs.getByte("tab"), rs.getInt("period"), rs.getInt("potential")));
                }
            }
            for (Integer recharge : recharges) {
                ret.addItem(new MapleShopItem((short) 1, recharge.intValue(), 0, 0, 0, (byte) 0, (byte) 0, 0, 0));
            }

            ps = con.prepareStatement("SELECT * FROM shopranks WHERE shopid = ? ORDER BY rank ASC");
            ps.setInt(1, shopId);
            rs = ps.executeQuery();
            while (rs.next()) {
                if (!ii.itemExists(rs.getInt("itemid"))) {
                    continue;
                }
                ret.ranks.add(new Pair<Integer, String>(rs.getInt("itemid"), rs.getString("name")));
            }
        } catch (SQLException e) {
            System.err.println("Could not load shop");
            e.printStackTrace();
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
        return ret;
    }

    public int getNpcId() {
        return npcId;
    }

    public int getId() {
        return id;
    }

    public List<Pair<Integer, String>> getRanks() {
        return ranks;
    }
}