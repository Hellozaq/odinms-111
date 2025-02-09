/*
     名字：興兒
     地图：迎月花山丘
     描述：910010000
 */

function start() {
    cm.sendSimple("這是迎月花山，當6個種子都被種植，天空會出現滿月，這時候會召喚月妙兔，當月妙兔開始敲年糕時，怪物將會不斷的出現來騷擾月妙兔，你必須保護它不受傷害並且拾取年糕。途中如果“月妙兔”死了，你將無法完成任務，我將感到饑餓....\r\n#L0##b給你10個年糕#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().itemQuantity(4001101) < 10) {
            cm.sendOk("太餓了，我需要吃10個#v4001101##b#t4001101##k。");
            cm.dispose();
            return;
        }
        cm.gainItem(4001101, -10);
        cm.givePartyNX(250);
        cm.addPartyTrait("charm", 1); //魅力
        cm.addPartyTrait("craft", 1); //手藝
        cm.addPartyTrait("charisma", 1); //領導力
        cm.addPartyTrait("will", 5); //意志力
        cm.addPartyTrait("sense", 1); //感性
        cm.addPartyTrait("insight", 1); //洞察力
        cm.getPlayer().endPartyQuest(1200);
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
        cm.getPlayer().getEventInstance().setProperty("stage0", 1); //給與完成條件
        cm.getPlayer().getEventInstance().startEventTimer(10 * 1000); //10秒倒計時
        cm.sendOk("哦~~我又可以吃到美味的年糕了，謝謝你們！");
    }
    cm.dispose();
}
