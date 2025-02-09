/*
     名字：書的下落？1
     地图：魔法森林圖書館
     描述：101000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
                qm.dispose();
                return;
            }
            if (status < 4) {
                qm.sendOk("嗯嗯...好像看起來不是很需要這本書啊，那就沒有辦法了。");
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
            qm.sendSimple("是來借書的嗎？也是，不會因為擁有強的力量就停止原地不動，以更努力的心態更上一層才是最重要...呵呵...好，想要看什麼書呢？\r\n#L0##b想要看#t4161050##l");
            break;
        case 1:
            qm.sendSimple("啊...指在神木村發現的這本書啊，我來看看...(上)册不久前借給弓箭手村的一個青年，(下)册......唉唷，這本書被誰借走了。\r\n#L0##b什麼~已經有人借走了？是誰借走了？#l");
            break;
        case 2:
            qm.sendSimple("知道墮落城市的伊卡路斯少年嗎？想要飛翔天邊的這少年借走的，借有段時間了，但是還沒有還...呼。\r\n#L0##b啊，到底何時會還呢？#l");
            break;
        case 3:
            qm.sendAcceptDecline("這個嘛...因為魔法森林圖書館沒有租借期限......啊，對了，如果沒有關係，請你去墮落城市，從伊卡路斯少年手中拿到龍的種類和特徵(下)後，閱讀完還給我，如何？");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(22541).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
