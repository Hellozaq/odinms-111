/*
     名字： 神木村
     地图： 危险巢穴下方
          描述：240040610
 */

var minPlayers = 1;
var timeLimit = 5; //5 minutes
var eventTimer = 1000 * 60 * timeLimit;
var exitMap = 240040610;
var eventMap = 240040611;

var minMapId = 240040611;
var maxMapId = 240040611;

function init() {
}

function setup(difficulty, lobbyId) {
    var eim = em.newInstance("NineSpirit_" + lobbyId);
    eim.getInstanceMap(eventMap).resetFully();
    eim.getInstanceMap(eventMap).allowSummonState(false);
    respawn(eim);
    eim.startEventTimer(eventTimer);
    return eim;
}

function afterSetup(eim) {
}

function respawn(eim) {
}

function playerEntry(eim, player) {
    var nest = eim.getMapInstance(eventMap);
    if (!player.haveItem(4001094)) {
        eim.spawnNpc(2081008, nest.getReactorById(2406000).getPosition(), nest);
    }

    player.changeMap(nest, 1);
}

function scheduledTimeout(eim) {
    var party = eim.getPlayers();

    for (var i = 0; i < party.size(); i++)
        playerExit(eim, party.get(i));

    eim.dispose();
}

function playerRevive(eim, player) {
    player.respawn(eim, exitMap);
    return false;
}

function playerDead(eim, player) {
}

function playerDisconnected(eim, player) {
    var party = eim.getPlayers();

    for (var i = 0; i < party.size(); i++) {
        if (party.get(i).equals(player))
            removePlayer(eim, player);
        else
            playerExit(eim, party.get(i));
    }
    eim.dispose();
}

function monsterValue(eim, mobId) {
    return -1;
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerUnregistered(eim, player) {
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap);
}

function changedMap(eim, chr, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        removePlayer(eim, chr);
        eim.stopEventTimer();
        eim.setEventCleared();
        eim.dispose();
    }
}

function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
}

function cancelSchedule() {
}

function dispose() {
}

function clearPQ(eim) {
}

function monsterKilled(mob, eim) {
}

function allMonstersDead(eim) {
}

// ---------- FILLER FUNCTIONS ----------

function changedLeader(eim, leader) {
}
