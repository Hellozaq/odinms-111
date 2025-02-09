/*
     名字：精靈之王
     地图：燃燒的廢墟
     描述：272000310
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
            qm.sendNext("你救了狂狼勇士和我們種族，現在該去救精靈遊俠了，她估計也傷得不輕。");
            break;
        case 1:
            qm.sendNextPrevS("#b是的，看上去情況比狂狼勇士還要糟糕，該怎麼幫助她呢？");
            break;
        case 2:
            qm.sendNextPrev("精靈遊俠承受了世界上所有精靈的詛咒，囙此正在忍受更大的痛苦。如果她這樣倒下的話，精靈們也會全部消失。為了封鎖這樣的事情發生，必須幫助精靈遊俠重新站起來。為此，我能借助你的力量嗎？");
            break;
        case 3:
            qm.sendNextPrevS("#b沒問題，我願意幫忙。");
            break;
        case 4:
            qm.sendNextPrev("請把你的力量借給我一些，你的體力可能會突然下降，別害怕。");
            break;
        case 5:
            qm.getPlayer().addHP(qm.getPlayerStat("HP") > 3000 ? -2000 : 0);
            qm.sendNextPrev("真讓人吃驚，你體內的能力不輸於剛才見到的所有英雄。我暫時恢復了大部分的能力。我會用這個力量製作出可以救精靈遊俠的結晶。請等一下。");
            break;
        case 6:
            qm.sendPrev("拿著我給你的亞普力耶精隨，去喚醒精靈遊俠吧。只要輕輕碰一下她就行了。");
            break;
        case 7:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(31174).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4033082, qm.getPlayer().itemQuantity(4033082) ? 0 : 1);
            qm.dispose();
    }
}
