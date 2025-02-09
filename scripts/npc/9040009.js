/*
     名字：城門守門人
     地图：威廉的古堡城門
     描述：990000300
 */

function start() {
    if (cm.getPlayer().getMap().getReactorByName("statuegate").getState() > 0) {
        cm.sendOk("通往下一區域的入口，已经開啟。");
        cm.dispose();
        return;
    }
    if (cm.getPlayerStat("GRANK") > 2) {
        cm.sendOk("很抱歉，我只會與參加這次公會任務的負責人談話。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    switch (eim.getProperty("stage1")) {
        case null:
        case "waiting":
            if (eim.getProperty("stage1phase") == null)
                eim.setProperty("stage1phase", 1);
            stage = parseInt(eim.getProperty("stage1phase"));
            cm.sendNext(stage == 1 ? "歡迎來到威廉的古堡城門，想要進入城堡，就必須通過我的測試，我將會在我周圍的雕像上展示一個圖案，你只需要記住出現圖案的#b雕像順序#k，重複一次就行。" : "我現在要為你們呈現一個更難的圖案，祝你好運。");
            break;
        case "active":
            stage = parseInt(eim.getProperty("stage1phase"));

            if (eim.getProperty("stage1combo").equals(eim.getProperty("stage1guess"))) {

                if (stage == 3) {
                    cm.sendOk("測試通過！通往下一區域的入口，已经開啟。");
                    cm.getPlayer().getMap().getReactorByName("statuegate").forceHitReactor(1);
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    cm.getGuild().gainGP(500);
                    cm.dispose();
                    return;
                }
                cm.sendNext("答案讓我很滿意，還有更多的測驗要完成，準備好了再跟我交談。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "已经完成第" + stage + "阶段守門人的測試"));
                eim.setProperty("stage1phase", stage + 1);
                eim.setProperty("stage1", "waiting");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，你的答案讓我很不滿意，請保持鎮靜，稍後再試。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "測試失敗，沒有通過守門人測試"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
            eim.setProperty("stage1phase", 1);
            eim.setProperty("stage1", "waiting");
            cm.dispose();
            break;
        default:
            cm.sendOk("雕像正在製作圖案，請稍等。");
            cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode > 0) {
        var eim = cm.getPlayer().getEventInstance();
        var reactors = getReactors();
        var combo = makeCombo(reactors);
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "正在顯示組合，請稍候"));
        var delay = 5000;
        for (var i = 0; i < combo.length; i++) {
            cm.getPlayer().getMap().getReactorByOid(combo[i]).delayedHitReactor(cm.getClient(), delay + 3500 * i);
        }
        eim.setProperty("stage1", "display");
        eim.setProperty("stage1combo", "");
    }
    cm.dispose();
}

function getReactors() {
    var reactors = new Array();

    var iter = cm.getPlayer().getMap().getAllReactorsThreadsafe().iterator();
    while (iter.hasNext()) {
        var mo = iter.next();
        if (!mo.getName().equals("statuegate")) {
            reactors.push(mo.getObjectId());
        }
    }
    return reactors;
}

function makeCombo(reactors) {
    var combo = new Array();
    while (combo.length < (stage + 3)) {
        var chosenReactor = reactors[Math.floor(Math.random() * reactors.length)];
        var repeat = false;
        if (combo.length > 0) {
            for (var i = 0; i < combo.length; i++) {
                if (combo[i] == chosenReactor) {
                    repeat = true;
                    break;
                }
            }
        }
        if (!repeat) {
            combo.push(chosenReactor);
        }
    }
    return combo;
}
