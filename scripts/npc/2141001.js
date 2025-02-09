/*
     名字：被遺忘的神殿管理人
     地图：被遺忘的黃昏
     描述：270050000
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
            em = cm.getEventManager("PinkBeanBattle");

            var squadAvailability = cm.getSquadAvailability("PinkBean");
            var chat = "#e<探險隊: 皮卡啾>#n\r\n\r\n奇勒斯坦侵入了过去之路，原先想使用女神之镜召唤黑魔法师，但反而召唤出皮卡啾。皮卡啾是一個未知的惡魔，擁有深不可測的神奇力量，它應不屬於這個世界…\r\n";
            if (squadAvailability == -1) {
                chat += "\r\nNumber of players: 1~30";
                chat += "\r\nLevel range: 120 +";
                chat += "\r\nTime limit: 60minutes";
                chat += "\r\n#L0#開始挑戰";
            }
            if (squadAvailability == 1) {
                var type = cm.isSquadLeader("PinkBean");
                if (type == -1) {
                    cm.sendOk("本次探險已結束，請重新註冊。");
                    cm.dispose();
                    return;
                }
                if (type == 0) {
                    var memberType = cm.isSquadMember("PinkBean");
                    if (memberType == 2) {
                        cm.sendOk("很抱歉，妳已在限制名單，不能再參加本次探險。");
                        cm.dispose();
                        return;
                    }
                    if (memberType == 0) {
                        chat += "\r\n有人已經組建了探險隊，如果你想繼續挑戰，請嘗試加入他們。";
                        chat += "\r\n#L1#查看隊員資訊";
                        chat += "\r\n" + (cm.getChannelServer().getMapleSquad("PinkBean").getMembers().contains(cm.getPlayer().getName()) ? "#L3#离开探險隊" : "#L2#登記探險隊") + "";
                    }
                }
                if (type == 1) {
                    chat += "\r\n#L4#調整隊員清單";
                    chat += "\r\n#L5#限制隊員清單";
                    chat += "\r\n#L6#進入探險地圖";
                }
            }
            if (squadAvailability == 2) {
                chat += "\r\n探險隊已經開始了對抗皮卡啾，願真主保佑。";
                chat += "\r\n#L1#查看探險隊資訊";
            }
            chat += "\r\n#L7#稍等一下";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0 || selection == 8) {
                if (cm.registerSquad("PinkBean", 5, "已經成為了<皮卡啾>探險隊隊長，如果你想嘗試本次探險，請重新與我對話申請登記探險，否則你將無法參與本次探險。")) {
                    cm.sendOk("你已經成為<皮卡啾>探險隊隊長，請在5分鐘內召集好探險隊隊員進行探險，否則將會自動註銷本次探險資格。");
                    em.setProperty("state", selection == 0 ? 0 : 1);
                    cm.dispose();
                    return;
                }
                cm.sendOk("由於未知的錯誤，操作失敗。");
            }
            if (selection == 1) {
                if (!cm.getSquadList("PinkBean", 0)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                }
            }
            if (selection == 2) {
                var ba = cm.addMember("PinkBean", true);
                cm.sendOk(ba == 1 ? "申請加入探險隊成功，請做好探險準備。" : ba == 2 ? "探險隊員已經達到30名，請稍後再嘗試。" : "已經加入了探險隊，請做好探險準備。");
            }
            if (selection == 3) {
                var baa = cm.addMember("PinkBean", false);
                cm.sendOk(baa == 1 ? "離開探險隊成功。" : "妳已經離開探險隊。");
            }
            if (selection == 4) {
                if (!cm.getSquadList("PinkBean", 1)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                }
            }
            if (selection == 5) {
                if (!cm.getSquadList("PinkBean", 2)) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                }
            }
            if (selection == 6) {
                if (cm.getSquad("PinkBean") == null) {
                    cm.sendOk("由於未知的錯誤，操作失敗。");
                    cm.dispose();
                    return;
                }
                dd = cm.getEventManager("PinkBeanBattle");
                dd.startInstance(cm.getSquad("PinkBean"), cm.getPlayer().getMap());
                cm.dispose();
            }
            if (selection == 7) {
                cm.dispose();
            }
            select = selection;
            break;
        case 2:
            if (select == 4) {
                cm.banMember("PinkBean", selection);
                cm.dispose();
            }
            if (select == 5) {
                if (selection != -1) {
                    cm.acceptMember("PinkBean", selection);
                }
            }
            cm.dispose();
    }
}
