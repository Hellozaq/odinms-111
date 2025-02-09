/*
     名字：消失的能力
     地图：寒冷的森林３
     描述：140090300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("嗯......用這個方法也不能恢復記憶嗎？可是沒試過也不知道，您再考慮看看吧。");
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
            qm.sendNext("大英雄！您好！您說怎麼知道您是英雄嗎？前面有三個人大聲的叫喊，當然知道啊。這個島上已經流傳著英雄回來的消息。");
            break;
        case 1:
            qm.sendNextPrev("總之，英雄的臉色怎麼會這麼難看呢？您有什麼困難嗎？您說您不知道自己是不是真正的英雄嗎？英雄喪失記憶了嗎？怎麼會這樣...應該是數百年被困在冰雪之中的副作用。");
            break;
        case 2:
            qm.sendAcceptDecline("啊！既然您是英雄，只要揮揮劍應該會想起什麼吧！您想不想去#b獵捕怪物#k呢？");
            break;
        case 3:
            qm.sendNextPrev("正好這附近有很多瑞恩島穆魯，請您去擊退3隻，搞不好會想起些什麼。");
            break;
        case 4:
            qm.sendPrev("啊，該不會連技能使用方法都忘光了吧？將技能放入快捷欄就可以輕鬆使用。不只是技能，連消耗道具也可以放進去，請多加利用。");
            break;
        case 5:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(17));
            Packages.server.quest.MapleQuest.getInstance(21012).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("恩…看你的表情好像是什麼都想不起來了…但是不用擔心，一切都會好起來的。給你藥水，你要加油啊！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2000022# #t2000022# 10 \r\n#v2000023# #t2000023# 10 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21012).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2000022, 10);
            qm.gainItem(2000023, 10);
            qm.gainExp(57);
            qm.sendOkS("#b就算我是真正的英雄...可是什麼能力都沒有的英雄還有用處嗎？", 3);
            break;
        case 2:
            qm.dispose();
    }
}
