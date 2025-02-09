function start() {
    cm.sendSimple("#e<组队任务：玩具城组队任务>#n \r\n\r\n从这里往上到处都是很危险的东西，你不能继续往上走了。你\r\n想和队员们一起齐心协力，完成任务吗？如果想挑战的话，就\r\n通过#b所属组队的队长#k来和我说话。\r\n#L0##b我想参加组队任务。#l\r\n#L1##b我想听听说明。#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection == 1) {
            cm.sendOk("#e<组队任务：时空裂缝>#n \r\n#b玩具城#k出现了时空裂缝！如果想要阻止入侵这里的怪物，我们\r\n需要勇敢的冒险家的自发帮助。请和同伴们齐心协力，拯救玩\r\n具城吧！必须突破消灭怪物或解开谜题的各种难关，打败#r阿丽\r\n莎乐。#k\r\n#e - 等级 : #n20级以上\r\n#e - 限制时间 : #n60分钟\r\n#e - 参加人员 : #n6人\r\n#e - 获得道具 : #n#v1022073#划痕眼镜（#b每帮忙5次时获得）#k\r\n                                         各种消耗、其他、装备道具");
            cm.dispose();
            return;
        }

        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("组队任务只有组成组队后才能参加。请和其他人组成组队之后再来挑战。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
            cm.sendOk("请让队长跟我对话.");
            cm.dispose();
            return;
        }
        var chat = "你所属的组队人数不是2人，或者队员等级不在要求范围内，无法执行任务。请确认人数或等级。";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 20 || party.get(i).getLevel() > 69 || party.get(i).getMapid() != 221023300 || party.size() < 2) {
                chat += "";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("LudiPQ");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("当前已经有人在里面了. 请稍等或切换到其他频道.");
    }
    cm.dispose();
}
