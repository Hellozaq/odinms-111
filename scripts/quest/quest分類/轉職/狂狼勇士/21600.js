/*
     名字：噗尼的囑咐
     地图：噗尼的平原
     描述：140020110
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("可以幫助我的只有英雄你了。");
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
            qm.sendAcceptDecline("英雄，你好？我是飼養雪橇專用哈士奇的噗尼。這麼突然找你，很抱歉！但可以幫助我的只有英雄你了，你不忙可以聽我說嗎？");
            break;
        case 1:
            qm.sendNextPrev("就是不久前的事情，我像平時一樣照看可愛的哈士奇犬們，卻發現有個奇怪的傢夥夾在它們中間。毛色光澤都很不一樣，牙齒也#b銳利#k很多……怎麼看都不像一隻哈士奇犬。");
            break;
        case 2:
            qm.sendNextPrev("我開始還以為是只變種的哈士奇犬，後來一查才發現那傢夥不是哈士奇，而是只狼！瑞恩島上根本沒有狼，也不知道是從哪裡混進來的……很奇怪不是嗎？");
            break;
        case 3:
            qm.sendNextPrev("我也知道不能把狗和狼一起養，但這小狼崽才剛剛出生，丟掉又太不近人情了。再加上小狼崽的身體還很弱。所以，我打算把這只小狼崽養到它能#b自食其力#k的大小。");
            break;
        case 4:
            qm.sendNextPrev("雖然我很精通犬類的飼養，但……如何養狼卻是一竅不通。所以必須找人幫忙。#b#m230000000##k的某個地方，住著一個叫#b#p2060000##k的人，懂得飼養狼的辦法。所以想請英雄去見見她，請求她的幫助，謝謝你了。");
            break;
        case 5:
            qm.sendPrev("得到納努克的同意後，她應該會給你一個東西，你把那個東西帶回來給我就行。我的家就在#m140000000#旁邊，#b雪平原2#k附近。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21600).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
