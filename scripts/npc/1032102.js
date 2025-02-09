/*
     名字：妖精 瑪麗
     地图：魔法森林
     描述：101000000
 */

var pet = null;
var theitems = Array();

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 3) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendSimple("您好，我是#p1032102#有什麼我可以幫您的嗎？\r\n#L0##b我要升級寶貝龍寵物#l\r\n#L1#我要升級我的機器人#l\r\n#L2#我要復活我的寵物#l");
            break;
        case 1:
            if (selection == 0) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000028 && currentpet.getPetItemId() < 5000034 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.getPlayer().itemQuantity(5380000)) {
                    cm.sendOk("升級寶貝龍寵物需要一個#b#z5380000##k, 以及其中任何一個寵物。\r\n#d#v5000029##t5000029##k LVL 15 \r\n#g#v5000030##t5000030##k LVL 15 \r\n#r#v5000031##t5000031##k LVL 15 \r\n#b#v5000032##t5000032##k LVL 15 \r\n#e#v5000033##t5000033##n LVL 15 ");
                    cm.dispose();
                    return;
                }
                var id = pet.getPetItemId();
                var name = pet.getName();
                var level = pet.getLevel();
                var closeness = pet.getCloseness();
                var fullness = pet.getFullness();
                var slot = pet.getInventoryPosition();
                var flag = pet.getFlags();
                var rand = 0;
                var after = id;
                while (after == id) {
                    rand = 1 + Math.floor(Math.random() * 10);
                    after = rand < 3 ? 5000030 : rand < 6 ? 5000031 : rand < 9 ? 5000032 : 5000033;
                }
                if (name.equals(cm.getItemName(id))) {
                    name = cm.getItemName(after);
                }
                cm.getPlayer().unequipPet(pet, true, false);
                cm.gainItem(5380000, -1);
                cm.removeSlot(5, slot, 1);
                cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                cm.getPlayer().spawnPet(slot);
                cm.sendOk("你的寵物#v" + id + "##t" + id + "#得到了進化，升級成#v" + after + "##t" + after + "#。");
                cm.dispose();
            }
            if (selection == 1) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000047 && currentpet.getPetItemId() < 5000054 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.getPlayer().itemQuantity(5380000)) {
                    cm.sendOk("升級機器人需要一個#b#z5380000##k, 以及其中任何一個機器人。\r\n#g#v5000048##t5000048##k LVL 15 \r\n#r#v5000049##t5000049##k LVL 15 \r\n#b#v5000050##t5000050##k LVL 15 \r\n#d#v5000051##t5000051##k LVL 15 \r\n#d#v5000052##t5000052##k LVL 15 \r\n#e#v5000053##t5000053##n LVL 15 ");
                    cm.dispose();
                    return;
                }
                var id = pet.getPetItemId();
                var name = pet.getName();
                var level = pet.getLevel();
                var closeness = pet.getCloseness();
                var fullness = pet.getFullness();
                var slot = pet.getInventoryPosition();
                var flag = pet.getFlags();
                var rand = 0;
                var after = id;
                while (after == id) {
                    rand = 1 + Math.floor(Math.random() * 9);
                    after = rand < 2 ? 5000049 : rand < 4 ? 5000050 : rand < 6 ? 5000051 : rand < 8 ? 5000052 : 5000053;
                }
                if (name.equals(cm.getItemName(id))) {
                    name = cm.getItemName(after);
                }
                cm.getPlayer().unequipPet(pet, true, false);
                cm.gainItem(5380000, -1);
                cm.removeSlot(5, slot, 1);
                cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                cm.getPlayer().spawnPet(slot);
                cm.sendOk("你的機器人#v" + id + "##t" + id + "#得到了進化，升級成#v" + after + "##t" + after + "#。");
                cm.dispose();
            }
            if (selection == 2) {
                var inv = cm.getInventory(5);
                var pets = cm.getPlayer().getPets();
                for (var i = 0; i <= inv.getSlotLimit(); i++) {
                    var it = inv.getItem(i);
                    if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() > 0 && it.getExpiration() < cm.getCurrentTime()) {
                        theitems.push(it);
                    }
                }
                if (theitems.length < 1) {
                    cm.sendOk("你是不是弄错了，你沒有需要复活的寵物。");
                    cm.dispose();
                    return;
                }
                var chat = "請選擇要復活的寵物，需要生命之水來恢復它。#b";
                for (var i = 0; i < theitems.length; i++) {
                    chat += "\r\n#L" + i + "##v" + theitems[i].getItemId() + "##t" + theitems[i].getItemId() + "##l";
                }
                cm.sendSimple(chat);
            }
            break;
        case 2:
            if (theitems.length < 1) {
                cm.sendOk("你沒有需要复活的寵物。");
                cm.dispose();
                return;
            }
            if (!cm.getPlayer().itemQuantity(5180000)) {
                cm.sendOk("你需要#v5180000##t5180000#才能復活寵物。");
                cm.dispose();
                return;
            }
            theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
            cm.getPlayer().fakeRelog();
            cm.sendOk("從今天起，寵物的壽命延長到45天。");
            cm.gainItem(5180000, -1);
            cm.dispose();
    }
}
