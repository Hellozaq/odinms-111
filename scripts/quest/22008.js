/*
     名字：追趕後院的狐狸
     地图：前院
     描述：100030102
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("嗯！！！什麽？害怕陰險的狐貍？沒想到我妹妹這麽膽小。");
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
            qm.sendAcceptDecline("不覺得奇怪嗎？最近雞和以前都不一樣了。以前，雞蛋數量比現在多，可是現在卻漸漸減少了。難道是狐狸變多的原因？如果真是這樣，那麼必須要儘快採取行動了。不是嗎？");
            break;
        case 1:
            qm.sendPrev("好吧，讓我們去消滅狐貍，你先去#b後院#k消滅10隻#r陰險的狐貍#k，我會負責剩下的事情的，好了，你快到後院去吧～");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(22008).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/10/0"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendNext("陰險的狐貍，消滅掉了嗎？");
            break;
        case 1:
            qm.sendNextPrevS("你說要去收拾剩下的狐貍的，怎麽回事？");
            break;
        case 2:
            qm.sendNextPrev("啊，那個嘛？我後來是去了，但走錯了路，怕被#o9300385#抓去做人質，所以就回來了。");
            break;
        case 3:
            qm.sendNextPrevS("該不會是害怕狐貍而躲起來了吧？");
            break;
        case 4:
            qm.sendNextPrev("你在胡說什麽啊？我為什麽會害怕狐貍？我一點都不害怕狐貍！");
            break;
        case 5:
            qm.sendNextPrevS("……啊，有一隻#o9300385# !");
            break;
        case 6:
            qm.sendNextPrev("啊！快躲起來！");
            break;
        case 7:
            qm.sendNextPrevS("...");
            break;
        case 8:
            qm.sendNextPrev("......");
            break;
        case 9:
            qm.sendNextPrev("……你這家夥，別嚇哥哥我！哥哥我的心臟不好，不能受驚嚇！");
            break;
        case 10:
            qm.sendNextPrevS("所以叫哥哥才不願意去，叫我去。");
            break;
        case 11:
            qm.sendNextPrev("哼哼，不管怎樣，陰險的狐貍消滅掉了。辛苦你了，我把一個路過的冒險家送我的東西送給你，作為給你的酬勞，來，拿著。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1372043# #t1372043# 1 \r\n#v2022621# #t2022621# 25 \r\n#v2022622# #t2022622# 25 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
            break;
        case 12:
            Packages.server.quest.MapleQuest.getInstance(22008).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1372043, 1);
            qm.gainItem(2022621, 25);
            qm.gainItem(2022622, 25);
            qm.gainExp(910);
            qm.sendNext("是法師的攻擊武器短杖，雖然你也可能沒什麽用，但拿在手裏到處走，還是很帥的，哈哈哈。");
            break;
        case 13:
            qm.sendOk("狐貍的數量確實增加了，對吧？奇怪，狐貍的數量為什麽會增加呢？看來必須調查一下。");
            qm.dispose();
    }
}
