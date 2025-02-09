var status = 0;
var minLevel = 0;
var maxLevel = 255;
var minPlayers = 1;
var maxPlayers = 6;
var item = [4001087, 4001088, 4001089, 4001090, 4001091, 4001092, 4001093];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMapId() == 240050000) {
                if (cm.getParty() == null) { // no party
                    cm.sendSimple("暗黑龙王的里程碑弥漫着邪恶气息...");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) { // not party leader
                    cm.sendSimple("请让你的队长和我对话。");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    if (party.size() < minPlayers || party.size() > maxPlayers)
                        next = false;
                    else {
                        for (var i = 0; i < party.size() && next; i++) {
                            if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
                                levelValid += 1;
                            if (party.get(i).getMapid() == mapId)
                                inMap += 1;
                        }
                        if (levelValid < party.size() || inMap < party.size())
                            next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("HontalePQ");
                        if (em == null) {
                            cm.sendSimple("事件管理器无法加载，请稍后再试。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                            } else {
                                cm.sendSimple("里面已经有人在挑战任务。");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("没有与组队长同一地图的组队成员。");
                        cm.dispose();
                    }
                }
            } else if (cm.getMapId() == 240050100 || cm.getMapId() == 240050300 || cm.getMapId() == 240050310) {
                if (!cm.isLeader()) {
                    cm.sendSimple("请让你的队长和我对话。");
                    cm.dispose();
                }
                if ((cm.getPlayer().itemQuantity(4001087) && cm.getPlayer().itemQuantity(4001088) && cm.getPlayer().itemQuantity(4001089) && cm.getPlayer().itemQuantity(4001090) && cm.getPlayer().itemQuantity(4001091)) || cm.getPlayer().itemQuantity(4001093) > 5) {
                    for (var i = 0; i < item.length; i++)
                        cm.removeAll(item[i]);
                    cm.warpParty(cm.getPlayer().getMap().getId() == 240050100 ? 240050200 : 240050400);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("请先解决迷宫室的难题。");
                }
            }
            cm.dispose();
        }
    }
}
