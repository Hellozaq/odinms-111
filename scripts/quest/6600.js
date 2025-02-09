/*
     名字：傳授百烈祝福連結技能
     地图：傳授百烈祝福連結技能
     描述：砲手
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("恭喜你，經過不斷的努力，你已經具備將種族特性技能傳授給同一伺服器的其他角色的資格。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(6600).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.sendLinkSkillWindow(110);
            qm.dispose();
    }
}
