/*
     名字：達克魯
     地图：墮落城市酒吧
     描述：103000003
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
            if (status < 2) {
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
            cm.sendSimple("若想要變成盜賊的人，請來找我！" + (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2351)).getStatus() == 1 && cm.getPlayer().getJob() != 400 ? "\r\n#L0##b我想成為盜賊#l" : "") + "\r\n#L1##b請向我說明盜賊的職業#l");
            break;
        case 1:
            if (selection == 0) {
                if (cm.getPlayer().getLevel() < 10) {
                    cm.sendOk("在我眼中你好像還不够成熟，等你到#b10#k級的時候在來找我。");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("你要轉職成为一位#b盜賊#k，确定吗？");
            }
            if (selection == 1) {
                cm.sendOk("盜賊是一種具備幸運、敏捷與力量的職業，在戰鬥中常扮演襲擊敵人的角色，此外盜賊也會使用隱身等特別的技能。盜賊善用短刀與飛鏢，並且可靈活使用偷竊、快速移動等補助型技能。為了提升高敏捷度的行動，與不露痕跡的隱藏術，盜賊大多穿著較貼身又輕便的服裝。");
                cm.dispose();
            }
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(7635).forceStart(cm.getPlayer(), 0, 1);
            cm.getPlayer().changeJob(400);
            cm.resetStats(4, 4, 4, 25);
            cm.gainItem(1332063, 1);
            cm.sendNext("現在你就是盜賊了，你已經可以使用盜賊技能了，打開技能窗看看吧，等級升高之後，能學習更多的技能。");
            break;
        case 3:
            cm.sendNext("但是光是技能還不行的，能力值也必須符合盜賊的需要，才能說是真正的盜賊。盜賊的主要屬性是運氣，輔助屬性是敏捷。如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 4:
            cm.sendNextPrev("我來告訴你一點需要注意的地方，初心者雖然沒關係，但不是初心者的人如果死了，之前積累的經驗值就會受到損失。所以請小心一些，要是辛苦積累到的經驗值受到損失，豈不是很冤枉？");
            break;
        case 5:
            cm.sendPrev("我能教你的只有這些，我給了你一件適合你用的武器，希望你能一邊旅行，一邊修煉。");
            break;
        case 6:
            cm.dispose();
    }
}
