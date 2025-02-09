/*
     名字：結冰的精靈森林
     地图：發光的洞穴之路
     描述：910150002
 */

function init() { //服務端讀取
    em.setProperty("state", 0);
}

function setup(level, lobbyid) { //開始事件，時間
    em.setProperty("state", 1);
    var eim = em.newInstance("DanikaRequest");

    eim.setInstanceMap(910150003).resetFully();

    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-1762, -498));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-1862, -498));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-3101, -398));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-3201, -398));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-1808, -118));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2255, -105));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2803, -133));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-3403, -133));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2775, -685));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-3075, -685));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2183, -510));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2483, -510));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2783, -510));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-1862, -805));
    eim.setInstanceMap(910150003).spawnMonsterOnGroundBelow(em.getMonster(9300422), new java.awt.Point(-2162, -805));

    eim.startEventTimer(3 * 60000);

    return eim;
}

function playerEntry(eim, player) { //傳送進事件地圖
    var map = eim.getMapInstance(910150003);
    player.changeMap(map, map.getPortal(1));
}

function scheduledTimeout(eim) { //規定時間結束
    eim.disposeIfPlayerBelow(100, 910150002);
}

function monsterValue(eim, mobId) { //殺怪後觸發
    return 1;
}

function playerDisconnected(eim, player) { //活動中角色斷開連接觸發
    playerExit(eim, player);
}

function changedMap(eim, chr, mapid) { //不在此地圖中事件結束
    if (mapid != 910150003) {
        eim.unregisterPlayer(chr);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", 0);
        }
    }
}

function playerExit(eim, player) { //角色退出時觸發
    eim.disposeIfPlayerBelow(100, 910150002);
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
