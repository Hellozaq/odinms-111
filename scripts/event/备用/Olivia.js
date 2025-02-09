/*
     名字：隱藏地圖
     地图：鬧鬼宅邸外部
     描述：682000000
 */

function setup(mapid) { //開始事件，時間
    var eim = em.newInstance("Olivia" + mapid);

    eim.setProperty("stage", "0");
    eim.setProperty("mode", mapid);
    var map = eim.setInstanceMap(682010100 + (parseInt(mapid)));
    map.resetFully();
    map.getPortal(2).setScriptName("oliviaOut");

    eim.startEventTimer(10 * 60000); //10 mins
    return eim;
}

function playerEntry(eim, player) { //傳送進事件地圖
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(2));
}

function monsterValue(eim, mobId) { //殺怪後觸發
    if (mobId == 9400641 || mobId == 9400642 || mobId == 9400643) {
        eim.getMapInstance(0).broadcastMessage(Packages.tools.packet.EtcPacket.showEffect("quest/party/clear"));
        eim.getMapInstance(0).broadcastMessage(Packages.tools.packet.EtcPacket.playSound("Party1/Clear"));
    }
    eim.startEventTimer(1 * 60000);
    return 1;
}

function scheduledTimeout(eim) { //規定時間結束
    eim.disposeIfPlayerBelow(100, 682000000);
}

function changedMap(eim, player, mapid) { //進入地圖觸發
    if (mapid != 682010100 && mapid != 682010101 && mapid != 682010102) {
        playerExit(eim, player);
    }
}

function playerDisconnected(eim, player) { //活動中角色斷開連接觸發
    playerExit(eim, player);
}

function playerExit(eim, player) { //角色退出時觸發
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0)
}

function init() {
}

//服務端讀取

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
