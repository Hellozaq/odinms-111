/*
     名字：救命恩人是隻猴子？
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
            if (status > 1) {
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
            qm.sendNext("吱吱吱吱吱！吱！吱！");
            break;
        case 1:
            qm.sendNextPrevS("肚子吃飽了，但精神還是不清醒……到底是怎麼回事？一睜開眼睛看到的是猴子，不知道這是什麼地方……船怎麼樣了呢？你知道怎麼回事嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("吱吱，吱吱！(猴子點著頭。牠真的知道情況嗎？仔細問問猴子吧！)");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(2560).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
