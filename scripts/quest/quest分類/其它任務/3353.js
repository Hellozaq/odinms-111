/*
     名字：特力的願望
     地图：閒人勿入
     描述：261020401
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
                qm.sendOk("嗯...不要？討厭就沒有辦法...看你有興趣而故意辛苦知道的事情，竟然這樣忽視派溫的好意...哭哭。");
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
            qm.sendNext("呼嗚~親切的冒險家朋友！來了嗎？很久了吧？真的很想很想見你。為什麼啊？呼呼呼呼...知道了你之前詢問的事情！那，就是那件事情。");
            break;
        case 1:
            qm.sendAcceptDecline("那個是黑暗的煉金術師的思念，因為你有興趣，所以努力去找了。呼呼呼... 那，快去找他。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3353).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(926120200), qm.getMap(926120200).getPortal(0));
            qm.dispose();
    }
}
