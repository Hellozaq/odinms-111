/*
     名字：乾枯的路
     地图：礦山入口
     描述：310040200
 */

function init() { //服務端讀取
    em.setProperty("state", 0);
}

function setup(level, lobbyid) { //開始事件，時間
    em.setProperty("state", 1);
    var eim = em.newInstance("BlackWing");

    eim.getMapInstance(931050700).resetFully();
    eim.getMapInstance(931050701).resetFully();

    eim.setInstanceMap(931050701).spawnNpc(2159350, new java.awt.Point(727, 18)); //可疑的女子

    eim.startEventTimer(10 * 60000);

    return eim;
}

function playerEntry(eim, player) { //傳送進事件地圖
    var map = eim.getMapInstance(931050700);
    player.changeMap(map, map.getPortal(1));
}

function scheduledTimeout(eim) { //規定時間結束
    eim.disposeIfPlayerBelow(100, 310040200);
}

function monsterValue(eim, mobId) { //殺怪後觸發
    return 1;
}

function playerDisconnected(eim, player) { //活動中角色斷開連接觸發
    playerExit(eim, player);
}

function changedMap(eim, player, mapid) { //不在此地圖中事件結束
    if (mapid != 931050700 && mapid != 931050701) {
        playerExit(eim, player);
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
