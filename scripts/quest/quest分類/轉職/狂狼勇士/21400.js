/*
     名字：武器向主人挑戰？
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("不是鬧著玩的！真的很怪…分明瑪哈出問題了！");
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
            qm.sendAcceptDecline("修煉還順利嗎？我知道你很忙，很抱歉打擾你，不過快點跟我回去瑞恩村，瑪哈又有了奇怪的反應…好奇怪。跟之前的反應不一樣。好像更深沉更黑暗…我有這樣的感覺。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21400).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
