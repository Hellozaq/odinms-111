/*
     名字：猴子
     地图：淺海地帶
     描述：3000100
 */

function start() {
    cm.sendNextS("吱吱！吱吱！", 1);
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    cm.dispose();
}
