/*
     名字：蝙蝠俠
     地图：新葉城-市區中心
     描述：600000000
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
            if (status < 8) {
                cm.dispose();
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
            cm.sendSimple("誰知道邪惡的怪獸都有什麼年頭？蚊蝠俠知道！\r\n#L0##b那就好，看你的樣子，我猜你是……超級英雄？#l");
            break;
        case 1:
            cm.sendNext("沒錯！我，就是蚊蝠俠，<抓住披風遮住半張臉>，這座城市第一位犯罪鬥士！");
            break;
        case 2:
            cm.sendSimple("我來到新葉都市對抗犯罪、怪物和所有良善之輩……還是奸邪之輩來著？總之，你似乎是想要加入我們的英雄協會，蚊蝠聯盟！雖然我受寵若驚，但蚊蝠俠是單獨行動的！\r\n#L0##b我好奇的是為什麼你沒穿褲子。\r\n#L1#加入你？我看你在打擊犯罪前還是先把褲子穿好吧。#l");
            break;
        case 3:
            if (selection < 1) {
                cm.sendSimple("哦這個啊…哈哈哈<臉紅>，我的褲子在和秘寶齒輪裡的一隻火牙獸戰鬥的時候被燒焦了，我想要幫助那個叫#b#p9201051##k的人，他似乎研究新葉都市，好像很重要的樣子。真正的英雄是絕不會拒絕他人的求助的！\r\n#L0##b那你為什麼不穿別的褲子。就沒有備用的嗎？#l\r\n#L1#那你準備怎麼辦？總不能光著屁股四處亂跑吧。#l");
            }
            if (selection > 0) {
                cm.sendOk("別搞錯了！有沒有穿褲子可跟當不當得了超級英雄無關。只要你擁有勇氣，可以鋤強扶弱，救人於水貨，就能成為超級英雄。你要是不這麼覺得，那就此別過吧。");
                cm.dispose();
            }
            break;
        case 4:
            if (selection < 1) {
                cm.sendNext("這個，我在搬到新葉都市的時候犯了個小錯誤。是這樣的，我把補給打包好裝進蚊蝠車的時候忘記關車廂了。等我到了新葉都市，下來檢查車廂才發現這個問題。結果我所有的補給都丟了！我是有去鎧甲商人戴爾菲那兒看過有沒有我能穿的褲子，不過來到新葉都市後我好像胖了幾磅。");
            }
            if (selection > 0) {
                status = 6;
                cm.sendSimple("嗯，於是我陷入了這麼一個兩難境地：雖然我需要找到我的褲子，但罪犯可不會趁我去找褲子就放假。這附近滿是邪魔歪道，我沒工夫去四處探索……除非。這麼著吧，你跟我做個交換好了？\r\n#L0##b怎樣的交換？#l");
            }
            break;
        case 5:
            cm.sendPrev("米琪賣的烤乳酪和至尊披薩實在是太——蚊了！它們弄得我只能穿緊身褲了！");
            cm.dispose();
            break;
        case 7:
            cm.sendSimple("因為我不能擅自離開崗位，所以你能不能線上下冒險的時候代替我去找回我的補給？如果你幫我找到他們，我就讓你當我們英雄協會，蚊蝠聯盟的掛名成員！如何？\r\n#L0##b包在我身上吧，蚊蝠俠，我一有發現就向你報告！#l");
            break;
        case 8:
            cm.sendPrev("這就對了！繼續努力吧，總有一天你也能成為一名英雄的！");
            break;
        case 9:
            cm.dispose();
    }
}
