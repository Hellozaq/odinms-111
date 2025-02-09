/*
     名字：騎乘狼
     地图：冰原雪域
     描述：211000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
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
            qm.sendNext("啊呀，你帶著的不是狼嗎？我已經好久都沒見過帶狼的人了。不過，帶著狼卻不#b騎乘#k，難道你還不會騎乘之術嗎？");
            break;
        case 1:
            qm.sendNextPrev("所謂騎乘，就是一種騎在狼背上快速行進，並能和狼之間實現良好溝通的技能。我曾經騎過#o5130104#和#o5140000#，當時我可帥呢！");
            break;
        case 2:
            qm.sendNextPrev("你想學習騎狼嗎？如果你想學的話，我#b#p2020007##k可以幫助你。");
            break;
        case 3:
            qm.sendNextPrev("要想騎乘，沒有任何準備，直接騎在狼背上是很困難的。要先弄個野狼馬鞍，這樣才能讓狼不覺得難受啊。我會做狼鞍#v1912011#，你去找資料就好。");
            break;
        case 4:
            qm.sendAcceptDecline("製作野狼馬鞍的資料是雪吉拉之皮，大概50張就可以了。等你把資料都找齊了，我就把騎乘的技巧和野狼馬鞍一起傳授給你。趕緊去找資料吧，我也很期待啊。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(21604).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
