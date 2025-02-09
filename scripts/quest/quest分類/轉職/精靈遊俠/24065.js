/*
     名字：三大長老和國王
     地图：櫻花處
     描述：101050000
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
            qm.sendNext("現在我們……精靈的三大長老全部聚齊了，雖然其他的精靈還被黑魔法師的詛咒困在冰裏……但是有國王在，有我們在，就不會害怕任何人。");
            break;
        case 1:
            qm.sendNextPrev("……你還記得嗎？精靈遊俠，我們的國王？三大長老全部聚齊的話，就能使用一個魔法，名叫#b純白淨化#k……");
            break;
        case 2:
            qm.sendNextPrevS("純白淨化的話，我應該……");
            break;
        case 3:
            qm.sendNextPrev("本來是在國王遇到危急情況，無法使用力量的時候使用的魔法。可以將所有精靈精神深處最純潔最高貴的力量召喚出來。使用之後，其他陷入詛咒的人一定就會醒來。");
            break;
        case 4:
            qm.sendNextPrevS("你們也因為詛咒的影響而變弱了……沒關係嗎？");
            break;
        case 5:
            qm.sendNextPrev("純白淨化可以通過精神共鳴將精靈們連接在一起，增強相互的力量……雖然不是很簡單，但只需消耗很少的力量就行，現在馬上就可以使用。");
            break;
        case 6:
            qm.sendPrevS("如果那個魔法可以成功……大家就都能醒來嗎？那就別再猶豫了。三大長老，請把困在冰裏的精靈從痛苦中拯救出來吧。", 3);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(24065).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("mercedes/frame", 3));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("mercedes/elfElder", 3));
            qm.dispose();
    }
}
