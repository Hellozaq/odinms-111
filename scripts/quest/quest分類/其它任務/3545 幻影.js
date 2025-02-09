/*
     名字：找回失去的回憶
     地图：幻影
     描述：幻影
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3545)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3545).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你來啦，主人，你忙著修煉，一定很累了吧？要我給你裝備洗澡的熱水嗎？還是香噴噴的紅茶？");
            break;
        case 1:
            qm.sendNextPrevS("嗯……現在你都快成管家了，跟剛見面的時候好像完全不同了。");
            break;
        case 2:
            qm.sendNextPrev("剛見面……的時候？現在想想，好像已經是很久以前了。");
            break;
        case 3:
            qm.sendNextPrevS("嗯。那時根本沒想到會和你一起做事，現在卻成了忠實的管家，真讓人吃驚。啊，一開始的時候，真的非常危險。");
            break;
        case 4:
            qm.sendNextPrev("那時主人還是個不懂生活艱辛的小少爺，整天吵著要出去冒險，我一開始還不把你當回事，後來才知道，竟然是過去的英雄。");
            break;
        case 5:
            qm.sendNextPrevS("不懂生活艱辛的小少爺……切，你是這麼想的嗎？");
            break;
        case 6:
            qm.sendNextPrev("老實說，主人從外表看，還像是個不懂事的小少爺。");
            break;
        case 7:
            qm.sendNextPrevS("……喂，我在這回憶過去，是想跟你分享一下過去的記憶，幹嘛要罵我啊……？");
            break;
        case 8:
            qm.sendNextPrev("我只是客觀地對主人的外貌做出評價罷了，我知道主人其實不是那樣的人，哈哈哈……");
            break;
        case 9:
            qm.sendNextPrevS("那個笑聲，聽起來好像是在嘲笑我！");
            break;
        case 10:
            qm.sendNextPrev("怎麼會，呵呵呵呵……");
            break;
        case 11:
            qm.sendNextPrevS("(雖然對話的氣氛很微妙，不過還是感覺心裏暖融融的……)");
            break;
        case 12:
            Packages.server.quest.MapleQuest.getInstance(3544).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
