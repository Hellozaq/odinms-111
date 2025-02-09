/*
     名字：遠征隊的標識
     地图：闇黑龍王洞穴入口
     描述：240050400
 */

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
            if (status < 2) {
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
            em = cm.getEventManager("HorntailBattle");
            eventname = em.getProperty("state") == 0 ? "Horntail" : "ChaosHt";

            var squadAvailability = cm.getSquadAvailability(eventname);
            var chat = "#e<探險隊: 闇黑龍王>#n\r\n\r\n闇黑龍王是同时拥有冰、火、雷三大高级魔法的巨型怪物，有着如哥斯拉一样巨大的体型，抬一下左脚能引发地震、跺一下右脚会掀起海啸、挥动一下翅膀更是召唤起超级飓风，在它引领的黑暗龙族所向披靡。\r\n";
            if (cm.getMap(240060000).getCharacters().size() == 0 && cm.getMap(240060100).getCharacters().size() == 0 && cm.getMap(240060200).getCharacters().size() == 0 && cm.getMap(240060001).getCharacters().size() == 0 && cm.getMap(240060101).getCharacters().size() == 0 && cm.getMap(240060201).getCharacters().size() == 0) {
                if (squadAvailability == -1) {
                    chat += "\r\nNumber of players: 1~30";
                    chat += "\r\nLevel range: 50~200";
                    chat += "\r\nTime limit: 60minutes\r\n";
                    chat += "#L0##v3994115#";
                    chat += "#L8##v3994117#";
                }
                if (squadAvailability == 1) {
                    var type = cm.isSquadLeader(eventname);
                    if (type == -1) {
                        cm.sendOk("本次探險已結束，請重新註冊。");
                        cm.dispose();
                        return;
                    }
                    if (type == 0) {
                        var memberType = cm.isSquadMember(eventname);
                        if (memberType == 2) {
                            cm.sendOk("很抱歉，妳已在限制名單，不能再參加本次探險。");
                            cm.dispose();
                            return;
                        }
                        if (memberType == 0) {
                            chat += "\r\n有人已經組建了探險隊，如果你想繼續挑戰，請嘗試加入他們。";
                            chat += "\r\n#L1#查看隊員資訊";
                            chat += "\r\n" + (cm.getChannelServer().getMapleSquad(eventname).getMembers().contains(cm.getPlayer().getName()) ? "#L3#离开探險隊" : "#L2#登記探險隊") + "";
                        }
                    }
                    if (type == 1) {
                        chat += "\r\n#L4#調整隊員清單";
                        chat += "\r\n#L5#限制隊員清單";
                        chat += "\r\n#L6#進入探險地圖";
                    }
                }
            }
            if (squadAvailability == 2 || !(cm.getMap(240060000).getCharacters().size() == 0 && cm.getMap(240060100).getCharacters().size() == 0 && cm.getMap(240060200).getCharacters().size() == 0 && cm.getMap(240060001).getCharacters().size() == 0 && cm.getMap(240060101).getCharacters().size() == 0 && cm.getMap(240060201).getCharacters().size() == 0)) {
                chat += "\r\n探險隊已經開始了對抗闇黑龍王，願真主保佑。";
                chat += "\r\n#L1#查看探險隊資訊";
            }
            chat += "\r\n#L7#稍等一下";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0 || selection == 8) {
                if (cm.registerSquad(selection == 0 ? "Horntail" : "ChaosHt", 5, "已經成為了<闇黑龍王>探險隊隊長，如果你想嘗試本次探險，請重新與我對話申請登記探險，否則你將無法參與本次探險。")) {
                    cm.sendOk("你已經成為<闇黑龍王>探險隊隊長，請在5分鐘內召集好探險隊隊員進行探險，否則將會自動註銷本次探險資格。");
                    em.setProperty("state", selection == 0 ? 0 : 1);
                    cm.dispose();
                    return;
                }
                cm.sendOk("由於未知的錯誤，操作失敗。");
            }
            if (selection == 1) {
                if (!cm.getSquadList(eventname, 0)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                }
            }
            if (selection == 2) {
                var ba = cm.addMember(eventname, true);
                cm.sendOk(ba == 1 ? "申請加入探險隊成功，請做好探險準備。" : ba == 2 ? "探險隊員已經達到30名，請稍後再嘗試。" : "已經加入了探險隊，請做好探險準備。");
            }
            if (selection == 3) {
                var baa = cm.addMember(eventname, false);
                cm.sendOk(baa == 1 ? "離開探險隊成功。" : "妳已經離開探險隊。");
            }
            if (selection == 4) {
                if (!cm.getSquadList(eventname, 1)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                }
            }
            if (selection == 5) {
                if (!cm.getSquadList(eventname, 2)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                }
            }
            if (selection == 6) {
                if (cm.getSquad(eventname) == null) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                    return;
                }
                dd = cm.getEventManager(em.getProperty("state") == 0 ? "HorntailBattle" : "ChaosHorntail");
                dd.startInstance(cm.getSquad(eventname), cm.getPlayer().getMap());
                cm.dispose();
            }
            if (selection == 7) {
                cm.dispose();
            }
            select = selection;
            break;
        case 2:
            if (select == 4) {
                cm.banMember(eventname, selection);
                cm.dispose();
            }
            if (select == 5) {
                if (selection != -1) {
                    cm.acceptMember(eventname, selection);
                }
            }
            cm.dispose();
    }
}
