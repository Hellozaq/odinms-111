/*
     名字：幼龍醒來
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 12) {
                qm.sendOk("你不相信我？你把我氣瘋了！");
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
            qm.sendNext("我終於來了！吸氣……這一定是我呼吸的空氣，那一定是太陽！那是一棵樹！那是一株植物！那是一朵花！Woohaha！這太不可思議了！這比我想像中的世界要好得多。還有…嗯？你是我的主人嗎？怎麼好像和我期待的印象不同。");
            break;
        case 1:
            qm.sendNextPrevS("哇，它在說話！");
            break;
        case 2:
            qm.sendNextPrev("我的主人很奇怪，不過已經簽訂了契約，我也不能選擇其他主人了。唉！好的，很高興見到你，我們會看到很多彼此。");
            break;
        case 3:
            qm.sendNextPrevS("嗯？你什麽意思？我們會看到很多彼此？什麽協定？");
            break;
        case 4:
            qm.sendNextPrev("你是什麽意思，你把我從蛋裏叫醒了。你是我的主人！所以，當然，你的責任是照顧我，訓練我，幫助我成為一條強壯的龍，很明顯！");
            break;
        case 5:
            qm.sendNextPrevS("什麽？一條龍？你是龍？我不明白…為什麽我是你的主人？你在說什麽？");
            break;
        case 6:
            qm.sendNextPrev("你在說什麽？你的精神與我的靈魂達成了契約！我們現在差不多是同一個人了，我真的需要解釋嗎？結果，你成了我的主人，我們受到公約的約束，你不能改變主意…公約不能被打破。");
            break;
        case 7:
            qm.sendNextPrevS("等等，等等！！！！讓我直說吧，你是說我別無選擇，只能幫助你？");
            break;
        case 8:
            qm.sendNextPrev("尤尤普！嘿！臉怎麼了？你……難道不想做我的主人嗎？");
            break;
        case 9:
            qm.sendNextPrevS("不……不是那樣…我只是不知道如何養寵物。");
            break;
        case 10:
            qm.sendNextPrev("一個P-PET？你剛才叫我寵物嗎？怎麽敢…為什麽，我是龍！世界上最強大的龍！");
            break;
        case 11:
            qm.sendNextPrevS("…你懷疑地盯著它，它看起來像一隻蜥蜴，一個弱小的龍。");
            break;
        case 12:
            qm.sendYesNo("你為什麽那樣看著我？看！看看我能用我的力量做什麽，準備好了嗎？");
            break;
        case 13:
            qm.sendNext("立刻去攻擊肥肥吧！喚醒你的魔力，同時我也會證明自己作為龍的能力！來，沖吧！");
            break;
        case 14:
            qm.sendPrev("不，不對啊，等一下！在此之前難道不該先分配屬性點嗎？魔法會受到#b智力#k的影響！所以好好分配屬性點，穿戴好#b法師#k裝備後再戰吧！");
            break;
        case 15:
            Packages.server.quest.MapleQuest.getInstance(22500).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/11/0"));
            qm.dispose();
    }
}
