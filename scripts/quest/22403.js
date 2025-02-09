/*
     名字：尋找漂亮的馬鞍
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 5) {
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
            qm.sendSimple("是誰竟然不經允許就進入了耶雷弗？請說出，你的名字和職業，以及島上來的目的。凡是說謊或目的不純的人，一律無法進入島內。\r\n#L0##b嗯？這裡是禁止出入的地區嗎？我看其他人好像可以隨意來往啊？#l");
            break;
        case 1:
            qm.sendSimple("這裡是只有皇家騎士團的騎士們可以出入的地方。看來你是不知道吧？這次我就饒恕你。你快點離開吧。\r\n#L0##b等，等等！我能問一個問題嗎？#l");
            break;
        case 2:
            qm.sendSimple("嗯？你來這裡有事嗎？我還以為你是閑著沒事呢？看來是有事情啊。那麼請說出你的名字、職業和訪問目的。\r\n#L0##b我叫小不點，我的職業是龍魔導士！我想為龍配一個馬鞍。聽說來這裡就能找到漂亮的馬鞍……你能幫我想想辦法嗎？#l");
            break;
        case 3:
            qm.sendSimple("……龍魔導士？是召喚強化聖龍的法師嗎？\r\n#L0##b不，不是的……#l");
            break;
        case 4:
            qm.sendSimple("……嗯，真是個奇怪的人。龍魔導士……冒險家之中竟然還有這種職業……嗯，我打聽一下應該就知道了。你說你需要馬鞍？\r\n#L0##b是的！你知道在什麼地方能製作馬鞍嗎？#l");
            break;
        case 5:
            qm.sendNextPrev("騎士們的馬鞍不是在這裡製作的，因為人手不足。所以我們委託#b#m230000000##k的動物園裡的#b#p2060005##k製作的。你去那邊問問看吧。");
            break;
        case 6:
            qm.sendPrev("好了，沒別的事了吧？請你馬上離開這裡。看你好像不是壞人，但規定就是規定，我不能讓外部人員隨便進入。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(22403).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
