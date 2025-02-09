/*
     名字：聯盟的誕生
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.dispose();
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
            qm.sendNext("你好！！我知道你有一直在為楓之谷的和平做出不懈的努力，在此，非常感謝你的支持。");
            break;
        case 1:
            qm.sendNextPrev("現在，為了更好的維護楓之谷世界的安寧，阻止黑魔法師的一切破壞活動，英雄們打算聚集在一起，成立楓之谷聯盟。");
            break;
        case 2:
            qm.sendAcceptDecline("您也是被邀請的嘉賓之一，所以請務必來耶雷弗參加第一次的聯盟會議。");
            break;
        case 3:
            y = qm.getPlayer().getJob();
            Packages.server.quest.MapleQuest.getInstance(1507).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(y < 1000 ? 190 : y < 2000 ? 10000190 : y < 2200 ? 20000190 : y < 2300 ? 20010190 : y < 2400 ? 20020190 : y < 3200 ? 30010190 : 30000190), 1, 1, -1);
            qm.getPlayer().changeMap(qm.getMap(913050000), qm.getMap(913050000).getPortal(0));
            qm.dispose();
    }
}
