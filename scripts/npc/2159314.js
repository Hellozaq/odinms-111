/*
     名字：裴爾
     地图：秘密廣場1
     描述：931050010
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            cm.sendNextS("真……真的長著翅膀啊。", 1);
            break;
        case 1:
            cm.sendNextPrevS("你是誰？難道是黑色翅膀的間諜？從情況看，好像又不是……", 5, 2159312);
            break;
        case 2:
            cm.sendNextPrevS("不要放鬆警惕。情況還沒確認。", 5, 2159313);
            break;
        case 3:
            cm.sendNextPrevS("你是誰？和黑色翅膀什麼關係？", 5, 2159315);
            break;
        case 4:
            cm.sendNextPrevS("我對黑色翅膀不是很瞭解。老實說，我也是頭一次聽到這個名字。你們想從我這裡知道什麼？我也不知道……該從何說起。", 3);
            break;
        case 5:
            cm.sendNextPrevS("首先告訴我你的名字，屬於哪個組織，你的經歷……還有，如果可以的話，希望你能告訴我為什麼長著翅膀。", 5, 2159315);
            break;
        case 6:
            cm.sendNextPrevS("我現在不屬於任何組織。雖然不久前是黑魔法師的軍團長……在和黑魔法師對抗的時候戰敗了。醒來之後就看到了那個戴帽子的男人。至於翅膀，因為我父親是魔族，所以一生下來就有了。還有就是我的名字叫#b#h0##k。", 3);
            break;
        case 7:
            cm.sendNextPrevS("黑魔法師？軍團長？聽不懂你在說什麼。你說的事情和現在的情況差得太遠了。你知道嗎？黑魔法師已經在數百年前被英雄們封印了起來！", 5, 2159315);
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 600));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, -90, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, 210, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, 100, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, -180, -150, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, -260, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1500, 270, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 10:
            cm.sendNextS("……嗯……是因為實驗讓你的腦袋變糊塗了嗎？", 1);
            break;
        case 11:
            cm.sendNextPrevS("(數百年前……？黑魔法師被英雄們封印了……？！到底是怎麼回事？這些人在說謊嗎？但是這陌生的土地、陌生的東西、陌生的勢力……那次戰鬥之後……到底過去了多長時間……)", 3);
            break;
        case 12:
            cm.sendNextPrevS("呃……搞不明白。喂，怪醫！你覺得怎麼樣？那個人像在說謊嗎？", 1);
            break;
        case 13:
            cm.sendNextPrevS("至少應該沒在說謊。雖然很可能腦袋有點不清醒，但應該沒有惡意。", 5, 2159345);
            break;
        case 14:
            cm.sendNextPrevS("怪醫說不是說謊的話，應該就不是……這麼說，有兩個可能性。要麼那個人精神不正常，要麼他說的是真的。", 5, 2159316);
            break;
        case 15:
            cm.sendNextPrevS("如果他說的是真的的話，那他就應該是數百年前的人。而且還是黑魔法師的軍團長……但是如果是軍團長的話，為什麼要對抗黑魔法師呢？", 5, 2159315);
            break;
        case 16:
            cm.sendNextPrevS("……我有我個人的原因。我回答了你們的問題，我能問幾個問題嗎？你們是誰？那些叫做黑色翅膀的人又是……？", 3);
            break;
        case 17:
            cm.sendNextPrevS("見到你的時候我就說過，我們是末日反抗軍，是為了對抗黑色翅膀而成立的組織。為了從他們手中奪回埃德爾斯坦，我們正在和他們鬥爭。", 5, 2159344);
            break;
        case 18:
            cm.sendNextPrevS("把你的能量吸走的人就是黑色翅膀。我們的村子本來一直很和平，但是他們佔領了這裡，搶奪我們的能量……不知道他們為什麼要搜集那麼多能量。我們只知道他們是黑魔法師的先鋒。", 5, 2159344);
            break;
        case 19:
            cm.sendNextPrevS("黑魔法師的先鋒……？你不是說黑魔法師被封印起來了嗎？為什麼會有那些傢伙出現呢？", 3);
            break;
        case 20:
            cm.sendNextPrevS("那是我們所有人都想知道的事情。他們相信黑魔法師會重新來到楓之谷世界。世界各地也確實出現了類似的徵兆……目前的世界並不太平。", 5, 2159344);
            break;
        case 21:
            cm.sendNextPrevS("黑魔法師重新來到世界……？這……是個好消息。……沒想到還會有機會向他復仇……", 3);
            break;
        case 22:
            cm.sendNextPrevS("……雖然你腦袋好像有點問題，但看來你確實很憎恨黑魔法師……", 5, 2159313);
            break;
        case 23:
            cm.spawnNPCRequestController(2159311, 361, 58, 0);
            Packages.server.quest.MapleQuest.getInstance(23279).forceStart(cm.getPlayer(), 0, null); //顯示隱藏的佩樂迪
            cm.sendNextS("想向黑魔法師復仇的人……你願意成為我們的同伴嗎？", 5, 2159311);
            break;
        case 24:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, -90, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, 210, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, 100, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, -180, -150, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, -260, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1500, 270, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 25:
            cm.sendNextS("校長？！你怎麼突然說這個……", 5, 2159315);
            break;
        case 26:
            cm.sendNextPrevS("你想相信這個人嗎？他可能不是因為實驗的原因才精神恍惚的。就算是那樣，他不是說自己是黑魔法師的軍團長嗎？", 5, 2159313);
            break;
        case 27:
            cm.sendNextPrevS("看到大家聚在一起，我感覺很放心。呵呵呵……", 5, 2159311);
            break;
        case 28:
            cm.sendNextPrevS("就像怪醫說的那樣，就算他沒有說謊，至少可以確認他對黑魔法師非常憎恨。他只是#b“以前”#k是軍團長罷了，現在又不是。", 5, 2159311);
            break;
        case 29:
            cm.sendNextPrevS("話雖如此。但是就算他出去，可能也會被黑色翅膀重新抓走……", 5, 2159312);
            break;
        case 30:
            cm.sendNextPrevS("同伴總是越多越好。只要他和我們的目的是一致的，我們就能一起戰鬥，不是嗎？", 5, 2159311);
            break;
        case 31:
            cm.sendNextPrevS("等，等等！情況進展得太快了吧？我還沒適應這個情況呢……我需要時間考慮一下！", 3);
            break;
        case 32:
            cm.sendNextPrevS("需要考慮一下？情況很明確。你說想和黑魔法師戰鬥，那就不能避免會和追隨他的勢力黑色翅膀戰鬥。敵人的敵人就是朋友，不是嗎？因此我們可以成為朋友。而且現在你沒有選擇的餘地。從這裡出去的話，外面到處都是黑色翅膀。以你現在的狀態能戰勝他們嗎？", 1);
            break;
        case 33:
            cm.sendNextPrevS("慎重是好事。反正要你馬上信任我們也是不可能的。在和你合作的同時……我們也會監視你，懷疑你。信任是一點一滴積累起來的。", 5, 2159316);
            break;
        case 34:
            cm.sendNextPrevS("……你說的沒錯。那麼……我就暫且相信你們吧。", 3);
            break;
        case 35:
            cm.sendNextPrevS("不管怎樣……雖然有點晚了，不過我想對你們表示感謝，謝謝你們救了我。", 3);
            break;
        case 36:
            cm.sendNextPrevS("聽你這麼說，我就放心了……知道感恩的人是不會輕易背叛的。", 5, 2159344);
            break;
        case 37:
            cm.sendNextPrevS("我忠於忠於我的人。", 3);
            break;
        case 38:
            cm.sendNextPrevS("那你先好好待著。如果改變了主意，可以隨時跟我說……呵呵呵。", 5, 2159311);
            break;
        case 39:
            cm.dispose();
            cm.gainItem(1142341, 1);
            cm.getPlayer().changeJob(3100);
            Packages.server.quest.MapleQuest.getInstance(23209).forceStart(cm.getPlayer(), 0, 1);
            Packages.server.quest.MapleQuest.getInstance(23977).forceStart(cm.getPlayer(), 0, 1);
            Packages.server.quest.MapleQuest.getInstance(23279).forceComplete(cm.getPlayer(), 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.getPlayer().changeMap(cm.getMap(310010000), cm.getMap(310010000).getPortal(0));
    }
}
