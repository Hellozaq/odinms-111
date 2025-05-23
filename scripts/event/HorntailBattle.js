/*
     名字：生命之穴
     地图：闇黑龍王洞穴入口
     描述：240050400
 */

function init() { //服務端讀取
    em.setProperty("state", 0);
}

function setup(level, lobbyid) { //開始事件，時間
    em.setProperty("state", 1);
    var eim = em.newInstance("HorntailBattle");

    eim.setProperty("stage", 0);

    eim.setInstanceMap(240060000).resetFully();
    eim.setInstanceMap(240060100).resetFully();
    eim.setInstanceMap(240060200).resetFully();

    eim.startEventTimer(60 * 60000);
    return eim;
}

function playerEntry(eim, player) { //傳送進事件地圖
    var map = eim.getMapInstance(240060000);
    player.changeMap(map, map.getPortal(1));
}

function scheduledTimeout(eim) { //規定時間結束
    eim.disposeIfPlayerBelow(100, 240050000);
}

function monsterValue(eim, mobId) { //殺怪後觸發
    if (mobId == 8810000) {
        eim.getMapInstance(240060000).broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "暗黑龍王的邊頭缩回洞穴里了，可以沿着通道继续前行"));
        eim.getMapInstance(240060000).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        eim.getMapInstance(240060000).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
    if (mobId == 8810001) {
        eim.getMapInstance(240060100).broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "暗黑龍王的巢穴就在不远处，去消灭它吧"));
        eim.getMapInstance(240060100).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        eim.getMapInstance(240060100).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
    if (mobId == 8810002 || mobId == 8810003 || mobId == 8810004 || mobId == 8810005 || mobId == 8810006 || mobId == 8810007 || mobId == 8810008 || mobId == 8810009) {
        var stage = parseInt(eim.getProperty("stage")) + 1;
        eim.setProperty("stage", stage);
    }
    if (eim.getProperty("stage") == 8) {
        eim.startEventTimer(3 * 60000);
        eim.getMapInstance(240060200).broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "暗黑龍王被打敗了"));
        eim.getMapInstance(240060200).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        eim.getMapInstance(240060200).broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
        eim.schedule("Clear", 3 * 1000); //加載指定時間
    }
    return 1;
}

function Clear(eim) { //清除主體
    eim.getMapInstance(240060200).killAllMonsters(true);
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
        eim.applyBuff(party.get(i), 2022108); //加載Buff內容
        if (party.get(i).getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3707)).getStatus() == 1) {
            party.get(i).mobKilled(8810018, 1); //添加任務怪物計數
        }
    }
}

function playerDisconnected(eim, player) { //活動中角色斷開連接觸發
    playerExit(eim, player);
}

function changedMap(eim, chr, mapid) { //不在此地圖中事件結束
    if (!(mapid == 240060000 || mapid == 240060100 || mapid == 240060200)) {
        playerExit(eim, chr);
    }
}

function playerExit(eim, player) { //角色退出時觸發
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", 0);
    }
}

function allMonstersDead(eim) {
}

//怪物死亡觸發和刪除這個怪在活動中的資訊

function leftParty(eim, player) {
}

//離開小組觸發

function disbandParty(eim) {
}

//小組退出時觸發

function playerDead(eim, player) {
}

//玩家死亡時觸發

function playerRevive(eim, player) {
}

//玩家角色复時觸發

function cancelSchedule() {
}

//清除事件
