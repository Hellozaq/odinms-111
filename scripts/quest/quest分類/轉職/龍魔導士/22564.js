/*
     名字：關於龍的知識3
     地图：魔法森林圖書館
     描述：101000003
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22564)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22564).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("嗯…你好像是人類，到矮人族的村莊來幹什麼呢……呃！你旁邊的那條龍是歐尼斯龍，是歐尼斯龍嗎？那麼你就是#p1032001#所說的擁有歐尼斯龍的人？");
            break;
        case 1:
            qm.sendNextPrevS("咳，不愧是矮人族，塔塔曼一下子就認出了寶貝龍是歐尼斯龍，但是他是矮人族，應該不會傷害#p1013000#。");
            break;
        case 2:
            qm.sendNextPrev("真，真讓人吃驚…沒想到現在還有活著的歐尼斯龍存在，不，不僅是活著的，看牠這麼小，好像孵化出來還沒多久，沒想到牠真的存在……");
            break;
        case 3:
            qm.sendNextPrevS("……看來漢斯發現了寶貝龍是歐尼斯龍，但是卻裝作不知道……");
            break;
        case 4:
            qm.sendNextPrev("據我所知！歐尼斯龍是通過契約才能誕生的特殊的龍！如果沒有契約者的話，牠可能連最低等的龍都比不上，你的龍看上去非常強！你難道是……");
            break;
        case 5:
            qm.sendNextPrevS("是的，我是龍魔導士。寶貝龍，你也來打個招呼。");
            break;
        case 6:
            qm.sendNextPrev("我不想和主人以外的人說話。", 1013000);
            break;
        case 7:
            qm.sendNextPrevS("呃……對不起，牠有點怕難為情。");
            break;
        case 8:
            qm.sendNextPrev("沒事，哈哈哈…聽說歐尼斯龍很警惕，看來果然是真的，沒想到我真的能親眼看到歐尼斯龍……");
            break;
        case 9:
            qm.sendNextPrevS("……歐尼斯龍很警惕，但為什麼滅絕了呢？");
            break;
        case 10:
            qm.sendNextPrev("這……嗯……這件事早就被人遺忘了，你可能不知道。在數百年前，有個想要讓楓之谷世界滅亡的非常強大而可怕的人，是他讓歐尼斯龍滅絕了。");
            break;
        case 11:
            qm.sendNextPrevS("……為什麼呢？");
            break;
        case 12:
            qm.sendNextPrev("這我就不知道了，聽說歐尼斯龍和他對抗，所以被他滅絕了。我當時還小，只知道這些。");
            break;
        case 13:
            qm.sendNextPrev("但是看來還沒有滅絕啊，現在就有一條歐尼斯龍在我們的眼前……你在生活上沒有遇到什麼不便嗎？神木村是有很多用於飼養龍的便利設施，你願意在這裡住下來嗎？");
            break;
        case 14:
            qm.sendNextPrev("不要，我喜歡呆在主人身邊。", 1013000);
            break;
        case 15:
            qm.sendNextPrev("聽說對於歐尼斯龍來說，和契約者的關係比牠們的本能還要重要，看來是真的……也是，擁有契約者的歐尼斯龍，牠的潛力要比任何龍都要強…");
            break;
        case 16:
            qm.sendNextPrev("你知道嗎？歐尼斯龍的靈魂和契約者緊密相連，契約者的力量可以讓歐尼斯龍變強，而契約者則可以自由地使用歐尼斯龍的力量。");
            break;
        case 17:
            qm.sendNextPrev("但是不是任何人都可以簽訂契約，歐尼斯龍非常挑剔，除非是擁有強大靈魂的人，否則牠們是不會輕易和人簽訂契約的，看來你一定擁有非常強大的靈魂。");
            break;
        case 18:
            qm.sendNextPrev("能看到本以為已經滅絕的歐尼斯龍，真讓人高興。雖然很希望牠能待在神木村，但恐怕太勉強了。看到了你，我想其它地方應該還有其他歐尼斯龍存在，我和漢斯不會就此放棄，我們會繼續尋找的。");
            break;
        case 19:
            qm.sendPrev("如果你有所發現，#p1032001#會與你聯系的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7500 exp");
            break;
        case 20:
            Packages.server.quest.MapleQuest.getInstance(22564).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(7500);
            qm.dispose();
    }
}
