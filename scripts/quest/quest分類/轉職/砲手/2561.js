/*
     名字：率先恢復體力
     地图：淺海地帶
     描述：3000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 6) {
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
            qm.sendNext("吱～吱，吱！吱吱吱！吱吱～！吱！吱？");
            break;
        case 1:
            qm.sendNextPrevS("我明明是想到楓之谷世界去當一個冒險家的……到底是怎麼回事？");
            break;
        case 2:
            qm.sendNextPrev("吱吱吱吱～吱！吱吱！吱吱吱吱吱！");
            break;
        case 3:
            qm.sendNextPrevS("和船長說話的時候看了看船員，好像是…….沒錯！巴洛古！巴洛古出現了！然後我……就那樣掉下了船？那怎麼會沒事呢？雖然我知道游泳的方法，但是在這個過程中，我不可能神智清醒啊……難道，我是個游泳神童嗎？");
            break;
        case 4:
            qm.sendNextPrevS("吱吱吱吱吱！...吱！吱！(有只小猴子好像很不滿地在那裡上竄下跳。看上去好像還很小。我醒來之後看到的第一個面孔，好像就是牠……)");
            break;
        case 5:
            qm.sendNextPrevS("嗯…….？從剛才開始，你就一直想跟我說話嗎？嗯？手上拿著的是……(猴子從懷裡拿出一個蘋果，看上去很好吃的熟透的蘋果。但是……給我#v2010000#蘋果幹什麼？)");
            break;
        case 6:
            qm.sendAcceptDecline("吱吱吱吱吱..～咕噫！(猴子一臉鬱悶的表情，把蘋果遞給我，做出吃的動作。難道……牠知道我體力很虛弱，讓我吃掉它！這傢伙，心地還挺善良的！)");
            break;
        case 7:
            qm.gainItem(2010000, qm.getPlayer().itemQuantity(2010000) ? 0 : 1);
            qm.sendPrevS("獲得了看上去很好吃的蘋果。吃一口看看吧。按一下#b「I」鍵#k，可以打開物品欄視窗嗎～？", 3);
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(2561).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/28"));
            qm.dispose();
    }
}
