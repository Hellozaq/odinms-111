/*
     名字：第二個任務的結果
     地图：長老公館
     描述：211000001
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
            qm.sendNext("有什麼事嗎？你好像不需要我的指點啊……嗯？消滅殭屍好不好？當然是好事，要是沒有殭屍，冰原雪域的發展就會快得多，如果你有能力，希望你能幫我們消滅殭屍。");
            break;
        case 1:
            qm.sendNextPrevS("#b這次應該是好事了吧？");
            break;
        case 2:
            qm.sendNextPrev("但是消滅殭屍之後，必須小心處理它們的牙齒。#t4000069#中存在黑暗的力量，不小心的話，很可能會受到黑暗力量的污染，就像邪摩斯一樣。雖然希望他能贖罪，但他卻變得越來越邪惡了……");
            break;
        case 3:
            qm.sendNextPrevS("#b#p2022003#犯了什麼錯誤啊？");
            break;
        case 4:
            qm.sendNextPrev("不久前，我們發現邪摩斯複製了長老公館地下室的鑰匙，我們雖然把鑰匙扣下了，但他複製的鑰匙一定不止一把，看來暫時必須加强地下室的管理工作才行。");
            break;
        case 5:
            qm.sendNextPrevS("#b……！地下室裏有什麼東西？");
            break;
        case 6:
            qm.sendNextPrev("是很久以來一直存放在冰原雪域的寶物，具體是什麼東西，我不能告訴你，但那是絕對不能遺失的東西，你不要再問了。那樣的話，我可能就要懷疑你了……");
            break;
        case 7:
            qm.sendPrev("不過你的臉色也用不著這麼難看，你又沒有偷走寶物，也沒有幫助他偷走寶物，有什麼好擔心的呢？雖然防禦體系確實很薄弱，但只要我們注意防備，不要讓寶物遺失就行了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 28135 exp");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(22594).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(28135);
            qm.dispose();
    }
}
