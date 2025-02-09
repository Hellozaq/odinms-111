/*
     名字：失蹤的煉金術士─特力
     地图：特力的研究室
     描述：926120200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
                qm.sendOk("真是個無禮的人……");
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
            qm.sendNext("...雖然不知道你怎麼來到這裡...煉金術師的實驗室不是尋開心的地方。對於不是煉金術師的人而言是個非常無聊的。也是...她是身為#b妖精#k可能更無趣... ");
            break;
        case 1:
            qm.sendNextPrev("她是誰嗎？她是...我的妻子，這麼說好像很久沒有看到她的臉了...到了連女兒的臉都很模糊了...她應該會生氣，當然和藹可親的她很快就會#b原諒#k我...");
            break;
        case 2:
            qm.sendNextPrev("...但是那就沒有辦法了，結束這研究之前有決心不會見她。雖然非常想念...結束研究之前...只要結束這研究就可以永遠看到#b#p2111004##k的臉了。");
            break;
        case 3:
            qm.sendNextPrev("這樣看來還沒有把#b項墜#k送給她，怕被她發現藏在#b相框後面#k...因為無法見她，所以就無法送她禮物了，何時能見她呢...");
            break;
        case 4:
            qm.sendAcceptDecline("...廢話太長了，雖然抱歉,  要繼續研究...請離開研究室。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(3321).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(261020401), qm.getMap(261020401).getPortal(0));
            qm.dispose();
    }
}
