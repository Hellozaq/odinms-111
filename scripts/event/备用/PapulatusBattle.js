/*
     名字： 玩具城
     地图： 时间塔的本源
          描述：220080001
 */

var isPq = true;
var minPlayers = 1, maxPlayers = 6;
var minLevel = 1, maxLevel = 255;
var entryMap = 220080001;
var exitMap = 220080000;
var recruitMap = 220080000;
var clearMap = 220080000;

var minMapId = 220080001;
var maxMapId = 220080001;

var eventTime = 45; // 45 minutes

var lobbyRange = [0, 0];

function init() {
    setEventRequirements();
}

function setLobbyRange() {
    return lobbyRange;
}

function setEventRequirements() {
    var reqStr = "";

    reqStr += "\r\n    Number of players: ";
    if (maxPlayers - minPlayers >= 1)
        reqStr += minPlayers + " ~ " + maxPlayers;
    else
        reqStr += minPlayers;

    reqStr += "\r\n    Level range: ";
    if (maxLevel - minLevel >= 1)
        reqStr += minLevel + " ~ " + maxLevel;
    else
        reqStr += minLevel;

    reqStr += "\r\n    Time limit: ";
    reqStr += eventTime + " minutes";

    em.setProperty("party", reqStr);
}

function setEventExclusives(eim) {
    var itemSet = [];
    eim.setExclusiveItems(itemSet);
}

function setEventRewards(eim) {
    var itemSet,
        itemQty,
        evLevel,
        expStages;

    evLevel = 1; //Rewards at clear PQ
    itemSet = [];
    itemQty = [];
    eim.setEventRewards(evLevel, itemSet, itemQty);

    expStages = []; //bonus exp given on CLEAR stage signal
    eim.setEventClearStageExp(expStages);
}

function getEligibleParty(party) { //selects, from the given party, the team that is allowed to attempt this event
    var eligible = [];
    var hasLeader = false;

    if (party.size() > 0) {
        var partyList = party.toArray();

        for (var i = 0; i < party.size(); i++) {
            var ch = partyList[i];

            if (ch.getMapId() == recruitMap && ch.getLevel() >= minLevel && ch.getLevel() <= maxLevel) {
                if (ch.isLeader())
                    hasLeader = true;
                eligible.push(ch);
            }
        }
    }

    if (!(hasLeader && eligible.length >= minPlayers && eligible.length <= maxPlayers))
        eligible = [];
    return eligible;
}

function setup(level, lobbyid) {
    var eim = em.newInstance("Papulatus" + lobbyid);
    eim.setProperty("level", level);
    eim.setProperty("boss", "0");

    eim.getInstanceMap(220080001).resetPQ(level);

    respawnStages(eim);
    eim.startEventTimer(eventTime * 60000);
    setEventRewards(eim);
    setEventExclusives(eim);
    return eim;
}

function afterSetup(eim) {
    updateGateState(1);
}

function respawnStages(eim) {
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(entryMap);
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    end(eim);
}

function playerUnregistered(eim, player) {
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, 0);
}

function playerLeft(eim, player) {
    if (!eim.isEventCleared()) {
        playerExit(eim, player);
    }
}

function changedMap(eim, player, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        if (eim.isExpeditionTeamLackingNow(true, minPlayers, player)) {
            eim.unregisterPlayer(player);
            end(eim);
        } else
            eim.unregisterPlayer(player);
    }
}

function changedLeader(eim, leader) {
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) { // player presses ok on the death pop up.
    if (eim.isExpeditionTeamLackingNow(true, minPlayers, player)) {
        eim.unregisterPlayer(player);
        end(eim);
    } else
        eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
    if (eim.isExpeditionTeamLackingNow(true, minPlayers, player)) {
        eim.unregisterPlayer(player);
        end(eim);
    } else
        eim.unregisterPlayer(player);
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function monsterValue(eim, mobId) {
    return 1;
}

function end(eim) {
    var party = eim.getPlayers();

    for (var i = 0; i < party.size(); i++) {
        playerExit(eim, party.get(i));
    }
    eim.dispose();
}

function giveRandomEventReward(eim, player) {
    eim.giveEventReward(player);
}

function clearPQ(eim) {
    eim.stopEventTimer();
    eim.setEventCleared();
    updateGateState(0);
}

function isPapulatus(mob) {
    var mobid = mob.getId();
    return mobid == 8500002;
}

function monsterKilled(mob, eim) {
    if (isPapulatus(mob)) {
        eim.showClearEffect();
        eim.clearPQ();
    }
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function updateGateState(newState) { // thanks Conrad for noticing missing gate update
    em.getChannelServer().getMapFactory().getMap(220080000).getReactorById(2208001).forceHitReactor(newState);
    em.getChannelServer().getMapFactory().getMap(220080000).getReactorById(2208002).forceHitReactor(newState);
    em.getChannelServer().getMapFactory().getMap(220080000).getReactorById(2208003).forceHitReactor(newState);
}

function dispose(eim) {
    if (!eim.isEventCleared()) {
        updateGateState(0);
    }
}
