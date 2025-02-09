/*
     名字：生命煉成與失蹤的煉金術師
     地图：研究所中央通道
     描述：261020000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3314)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3314).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (!qm.getPlayer().hasDisease(Packages.client.MapleDisease.getBySkill(125))) {
                qm.sendOk("不要再囉嗦了，快點吃下#v2022198#。");
                qm.dispose();
                return;
            }
            qm.sendSimple("呼呼呼呼….看你面色蒼白看來真的很有效果啊，這次的實驗成功了！呃哈哈哈哈！果然可以用在能打倒洛伊德的堅強的人身上！\r\n#L0##b（果然真的是人體實驗嘛！）#l");
            break;
        case 1:
            qm.sendSimple("很驚訝的表情嘛？不用太擔心，不是很危險的藥…不，雖然是危險的藥但是有解毒藥…呼呼呼呼…\r\n#L0##b（給病又給藥…天啊！）#l");
            break;
        case 2:
            qm.sendSimple("如此一來，任意改變人體的狀態會變得更為容易…這樣…搞不好可以幫那傢夥達成願望…\r\n#L0##b那傢夥？#l");
            break;
        case 3:
            qm.sendNextPrev("是的……在生命煉金方面，他是第一人，他的能力比任何人都要強……只要有他在的話，這種研究很快就能解決……但是他#b失蹤#k了……");
            break;
        case 4:
            qm.sendNextPrev("誰都不知道那傢夥為什麼會消失，不知從什麼時候開始那傢夥就變得暴躁，人們不知道他到底在做什麼實驗。那傢夥大概半年左右一直是瘋瘋癲癲的狀態，研究，研究…不斷地在做實驗，有關生命煉金的…結果，#b那個事件#k終於發生了…");
            break;
        case 5:
            qm.sendNextPrev("就算是號稱練金術士之村的瑪加提亞…也未曾發生過像那樣的劇烈爆炸事件…不曉得那傢夥到底做了什麼實驗，我怎麼猜也猜不透…他到底是在做什麼驚人的研究呢？既然已經對他家進行了調查，我想協會會長應該知道些什麼，但他也不肯透露…");
            break;
        case 6:
            qm.sendNextPrev("這項研究..其實一開始也是和他一起合作，但他卻消失無蹤，而這項研究也無法繼續下去。我對藥物雖然還算有自信，但還真不容易啊！既然是和那傢夥一起開始的，雖然斷斷續續還在持續下去，但是…那傢夥為什麼會想要研究改變#b人體#k的狀態呢？");
            break;
        case 7:
            qm.sendPrev("那傢夥應該還活著…那傢夥…有活下去的理由！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2050004# #t2050004# 10 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12500 exp");
            break;
        case 8:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3314).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2050004, 10);
            qm.gainExp(12500);
            qm.dispose();
    }
}
