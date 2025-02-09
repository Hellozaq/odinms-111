/*
     名字：过去回忆
     地图：精靈之島
     描述：101050020
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
            qm.sendNextS("我記得這個地方，那個時候的赫麗娜讓我擔心了很久。", 3);
            break;
        case 1:
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(24069).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(910150210), qm.getMap(910150210).getPortal(0)); //過去的記憶
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 9) {
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
            qm.sendSimple("精靈遊俠…\r\n#L0##b原來躲在這裡，赫麗娜。你嚇到亞斯提那了。為什麼不說一聲就來到這種地方呢？#l");
            break;
        case 1:
            qm.sendSimple("聽說你要離開村莊？\r\n#L0##b啊…是的。他們既然找上門了就一起去唄。#l");
            break;
        case 2:
            qm.sendSimple("和黑魔法師…要去戰鬥嗎？\r\n#L0##b是的。能夠見到傳說中的黑魔法師，我好期待呀。#l");
            break;
        case 3:
            qm.sendSimple("你不要走！可能會有危險！萬一受傷了怎麼辦？！\r\n#L0##b嗯？哈哈哈，所以躲在這裡嗎。別擔心。我和很多強的同伴一起去所以不會有危險。#l");
            break;
        case 4:
            qm.sendSimple("騙人…我知道你都是騙人的。聽說黑魔法師是可以用魔法更換地圖的強者不是嗎。和那種人戰鬥怎麼會贏呢。你不要走，精靈遊俠！\r\n#L0##b不行這樣，赫麗娜…#l");
            break;
        case 5:
            qm.sendSimple("為什麼？！那為什麼要去呢？你不行讓別人去嗎？精靈遊俠是精靈王嘛！精靈遊俠離開的話精靈該怎麼辦呢？不敢想像沒有王的村莊！\r\n#L0##b所以我才要離開的呀。赫麗娜…如果不阻擋黑魔法師可能導致楓之谷的滅亡，身為國王不能眼睜睜的看精靈的滅亡啊。所以…我要離開。#l");
            break;
        case 6:
            qm.sendSimple("…那麼…那麼我要跟著精靈遊俠走了！\r\n#L0##b什麼？#l");
            break;
        case 7:
            qm.sendSimple("我不能讓精靈遊俠自己走！精靈遊俠又不知道路不是嗎！所以赫麗娜也要跟！\r\n#L0##b這，這有點…赫麗娜？#l");
            break;
        case 8:
            qm.sendSimple("你說不行我也要！\r\n#L0##b真是個傻孩子！#l");
            break;
        case 9:
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(24069).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(101050020), qm.getMap(101050020).getPortal(2)); //過去的記憶
    }
}
