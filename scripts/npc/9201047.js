/*
     名字：閃光人
     地图：挑戰入口
     描述：670010200
 */

var item = [4031594, 4031595, 4031596, 4031597];

function start() {
    switch (cm.getPlayer().getMap().getId()) {
        case 670010200:
            var eim = cm.getPlayer().getEventInstance();
            if (eim.getProperty("stage0") == 2) {
                cm.sendOk("任務已經完成，現在可以穿過破裂的魔鏡返回亞邁斯那裡，祝你好運。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().itemQuantity(4031595)) {
                cm.sendOk("你成功的打破了魔術師的魔鏡，太棒了！現在可以穿過破裂的魔鏡返回亞邁斯那裡，祝你好運。");
                eim.setProperty("stage0", 2);
                cm.gainItem(4031595, -1);
                cm.dispose();
                return;
            }
            if (eim.getProperty("stage0") == 1) {
                cm.sendOk("請擊敗在地圖出現的#o9400518#，並獲得#b#z4031596##k，使用#z4031596#可以打破魔術師魔鏡，當你完成任務後，獲取一片#b#z4031595##k交給我。");
                cm.dispose();
                return;
            }
            if (eim.getProperty("stage0") == 0 && cm.getPlayer().getMap().getAllMonstersThreadsafe().size() != 0) {
                cm.sendOk("你的任務是要打破魔術師魔鏡，要做到這一點，首先請消滅地圖中所有的怪物，然後再來找我接受下一步的指示。請選擇與您的性別對應的門戶並殺死那裡的所有怪物。\r\n#b女士們走左邊，先生們走右邊。");
                cm.dispose();
                return;
            }
            if (eim.getProperty("stage0") == 0 && cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
                cm.sendOk("#o9400518#在地圖中出現的了，請擊敗她並獲得#b#z4031596##k，使用#z4031596#可以打破魔術師的魔鏡，當你完成任務後，#b獲取一片#z4031595#交給我。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "閃光人: 魔法蝴蝶精在地圖中出現的了，請擊敗她並獲得飛行鐵鎚"));
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400518), new java.awt.Point(-245, 810));
                eim.setProperty("stage0", 1);
            }
            cm.dispose();
            break;
        case 670011000:
            cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
    }
}

function action(mode, type, selection) {
    if (mode > 0) {
        for (var i = 0; i < item.length; i++)
            cm.removeAll(item[i]);
        cm.getPlayer().changeMap(cm.getMap(670010000), cm.getMap(670010000).getPortal(1));
    }
    cm.dispose();
}
