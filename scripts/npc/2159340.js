/*
     名字：黑色翅膀警衛1
     地图：能量抽取處2
     描述：931050020
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
            Packages.server.quest.MapleQuest.getInstance(23207).forceComplete(cm.getPlayer(), 0);
            cm.spawnNPCRequestController(2159340, 175, 0, 0);
            cm.spawnNPCRequestController(2159341, 300, 0, 0);
            cm.spawnNPCRequestController(2159342, 600, 0, 0);
            cm.spawnNPCRequestController(2159343, -158, 18, 0);
            cm.getNPCDirectionEffect(2159340, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100);
            cm.getNPCDirectionEffect(2159341, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100);
            cm.getNPCDirectionEffect(2159342, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159340, "panic"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159341, "panic"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/0", 1500, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 1:
            cm.sendNextS("怎……怎麼回事？這是怎麼回事？！", 3);
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/1", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 900));
            break;
        case 3:
            cm.sendNextS("……到底是怎麼回事？精氣幾乎全部消失了。旁邊的東西……難道是這個東西吸走了我的力量……？！", 3);
            break;
        case 4:
            cm.sendNextS("嚇！！實驗體居然自己跑出來了！！！", 1);
            break;
        case 5:
            cm.sendNextS("你們在幹什麼！為什麼要這麼做？你們身上感覺到的那種力量……是黑魔法師的力量？！", 3);
            break;
        case 6:
            cm.sendNextS("我們必須要抓住你，要不然以後就麻煩了。", 1);
            break;
        case 7:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/16", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 373)); //角色攻擊
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121006", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121006/effect", 2000, 100, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 900));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction6.img/DemonTutorial/Scene3"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/17", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 900));
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(23207).forceStart(cm.getPlayer(), 0, null);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159340, "die"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159341, "die"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121006h", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 11:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159340));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159341));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 12:
            cm.sendNextS("(那是誰？我從未見過如此強大的力量。)", 5, 2159342);
            break;
        case 13:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 14:
            cm.sendNextS("(呃……好不容易除掉了他們，但是花費了太多的力量……這是哪里？肯定不是什麼友好的地方。快點離開這裏吧。)", 3);
            break;
        case 15:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 16:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/12", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 17:
            cm.getNPCDirectionEffect(2159342, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", 2000, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1200));
            break;
        case 18:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.NPCSpecialAction(2159342, -1, 150, 100));
            cm.sendNextS("不好。意識有點模糊……要是現在遭到攻擊，那就危險了！", 3);
            break;
        case 19:
            cm.sendNextS("等等，鎮靜。我不想和你戰鬥。你是誰？為什麼會在這種地方……？", 5, 2159342);
            break;
        case 20:
            cm.sendNextS("(在那個人身上感覺不到黑魔法師的氣息。)……別過來……！", 3);
            break;
        case 21:
            cm.sendNextS("你這樣踉踉蹌蹌的，在說什麼呢？你知道黑色翅膀對你做了什麼嗎？旁邊的機器是能量傳送裝置……黑色翅膀在吸取你的力量。", 5, 2159342);
            break;
        case 22:
            cm.sendNextS("能量傳送裝置……？是這個東西嗎？黑色翅膀是什麼？搞不明白……到底是怎麼回事？", 3);
            break;
        case 23:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 24:
            cm.sendNextS("你是誰？怎麼會……咳咳，知道這種事情？", 3);
            break;
        case 25:
            cm.sendNextS("我是末日反抗军的工作員J，和黑色翅膀是敵對關係。雖然不清楚具體的情況，但我不是壞人，不會和受傷的人戰鬥的。你的狀態看上去很不好，需要我幫忙……", 5, 2159342);
            break;
        case 26:
            cm.sendNextS("怎麼會這樣……力量……現在……沒有……", 3);
            break;
        case 27:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 372)); //角色隱身
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(cm.getPlayer().getGender() == 0 ? "Effect/Direction6.img/effect/tuto/fallMale" : "Effect/Direction6.img/effect/tuto/fallFemale", 3000, 0, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 600));
            break;
        case 28:
            cm.getNPCDirectionEffect(2159342, "Effect/Direction6.img/effect/tuto/balloonMsg1/13", 2000, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 29:
            cm.dispose();
            cm.removeNpc(cm.getPlayer().getMap().getId(), 2159342);
            cm.removeNpc(cm.getPlayer().getMap().getId(), 2159343);
            cm.getPlayer().changeMap(cm.getMap(931050030), cm.getMap(931050030).getPortal(0));
    }
}
