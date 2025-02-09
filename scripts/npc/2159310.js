/*
     名字：凡雷恩
     地图：時間神殿迴廊2
     描述：927000010
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
            cm.sendNextS("除了出去外勤的軍團長，大家都到齊了嗎…那就開始開會吧。", 1);
            break;
        case 1:
            cm.sendNextS("在偉大的黑魔法師完成計畫之前，我們一刻也不能放鬆！我聽說你發現了有趣的資訊，#h0#，說來聽聽。", 5, 2159308);
            break;
        case 2:
            cm.sendNextS("是的…我發現一個抵抗組織秘密成立，正在建立一支反對我們的力量。", 3);
            break;
        case 3:
            cm.sendNextS("抵抗軍……一群烏合之眾能做什麼，咳咳咳……聽說人們叫他們#b英雄#k？不是很搞笑嗎？", 5, 2159308);
            break;
        case 4:
            cm.sendNextS("我還很期待呢，看到他們驚慌失措地到處亂跑樣子，我就會興奮。", 5, 2159339);
            break;
        case 5:
            cm.sendNextS("#p2159339#？別那麼囂張。", 5, 2159308);
            break;
        case 6:
            cm.sendNextS("我還沒盡興呢。", 5, 2159339);
            break;
        case 7:
            cm.sendNextS("史烏大人好像很忙的樣子，殺人鯨，您在這裡沒問題嗎？", 3);
            break;
        case 8:
            cm.sendNextS("史烏她是認真過了頭，總會找些沒用的事來做！不過我也正打算去一趟史烏那裡！哼！軍團長都太刻板了，無聊。", 5, 2159339);
            break;
        case 9:
            cm.sendNextS("…那會議呢？", 1);
            break;
        case 10:
            cm.sendNextS("真是的，殺人鯨一吵起來，會議都進行不下去了。嘖嘖…剛才是在說英雄們的事情，相信這些可悲的“英雄”不會蹦達多久。我肯定#h0#有對付他們的計畫。", 5, 2159308);
            break;
        case 11:
            cm.sendNextS("連時間的女神都能戰勝的人，那麼點英雄算什麼啊？不是嗎？哈哈哈哈…", 5, 2159308);
            break;
        case 12:
            cm.sendNextS("與大多數敵人不同的是，英雄們為他人而戰，而不是為自己而戰，他們很特別，因為他們想保護世界，這幫人很危險，而且，我只是抓住了女神，黑魔法師才是打敗她的人。", 3);
            break;
        case 13:
            cm.sendNextS("你可真謙虛！你可是黑魔法師的最信任的人呢。", 5, 2159308);
            break;
        case 14:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 15:
            cm.sendNextS("…你們兩個夠了吧。", 1);
            break;
        case 16:
            cm.sendNextS("為什麼？不是很有意思嗎？繼續啊，#p2159308#。", 5, 2159339);
            break;
        case 17:
            cm.sendNextS("我只是在讚美我們軍隊的真正英雄，哈哈哈……最強者！", 5, 2159308);
            break;
        case 18:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 19:
            cm.sendNextS("自從佔領了神殿，一切都快要結束了…在這件事情上，能把時間女神困住，#h0#的貢獻是最重要的。", 1);
            break;
        case 20:
            cm.sendNextS("這個話題就到此為止，我們繼續開會吧。", 1);
            break;
        case 21:
            cm.sendNextS("那些無聊的英雄就不要再說了，說說其他的抵抗勢力怎麼樣？", 5, 2159308);
            break;
        case 22:
            cm.sendNextS("…按照命令，已經確認過，他們幾乎全部被消滅了。", 1);
            break;
        case 23:
            cm.sendNextS("哦哦，這樣啊。", 5, 2159308);
            break;
        case 24:
            cm.sendNextS("不過，為什麼黑魔法師要我們摧毀一切呢？如果什麼都沒有，就沒有什麼可以控制的了。", 5, 2159339);
            break;
        case 25:
            cm.sendNextS("什麼？黑魔法師什麼時候訂的要求？我從沒聽說過這個。", 3);
            break;
        case 26:
            cm.sendNextS("對，我差點忘了告訴你，黑魔法師要我們所有人，消滅一切。", 5, 2159308);
            break;
        case 27:
            cm.sendNextS("例如，利弗爾剛剛被燒成灰燼。。", 1);
            break;
        case 28:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 29:
            cm.sendNextS("(利弗爾？離我家很近。。。)", 3);
            break;
        case 30:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction6.img/effect/tuto/balloonMsg1/3"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 31:
            cm.sendNextS("我們做得很好，清除的一乾二淨，消滅了所有抵抗勢力，只剩下幾個奴僕。", 5, 2159308);
            break;
        case 32:
            cm.sendNextS("哈哈哈哈哈……你的反應怎這麼敏感？有什麼掛心的事情嗎？", 5, 2159308);
            break;
        case 33:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 34:
            cm.sendNextS("請原諒，有件事我必須要去處理一下。", 3);
            break;
        case 35:
            cm.sendNextS("等等！還沒有開完會呢！你受到黑魔法師的寵愛並不代表你可以隨便行事，我沒說要做我們的事情嗎？現在離開的話就是不服從命令！", 5, 2159308);
            break;
        case 36:
            cm.sendNextS("#b（母親和戴米安…希望你們沒事…）", 3);
            break;
        case 37:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 38:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(924020010), cm.getMap(924020010).getPortal(0));
    }
}
