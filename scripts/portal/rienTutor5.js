/*
     名字：瑞恩島
     地图：寒冷的森林５
     描述：140090500
 */

function enter(pi) {
    if (pi.getPlayer().getInfoQuest(21019).indexOf("miss=o") != -1) {
        return false;
    }
    pi.getPlayer().updateInfoQuest(21019, pi.getPlayer().getInfoQuest(21019) + ";miss=o");
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage("再往前面一點，你就到鎮上了，我先去那裡，因為我還有一些事情要處理，沒有必要著急，我們在瑞恩村見。"));
    return true;
}
