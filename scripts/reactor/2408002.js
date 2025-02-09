/*
     名字：生命之穴
     地图：第一個迷宮室
     描述：240050101
 */

function act() {
    var stage = rm.getPlayer().getMap().getId() - 240050100;

    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));

    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "鑰匙已被傳送到某處"));

    var Key = new Packages.client.inventory.Item(4001087 + stage, 0, 1);

    var reactor = rm.getMap(240050100).getReactorByName("keyDrop1");

    rm.getMap(240050100).spawnItemDrop(reactor, rm.getPlayer(), Key, reactor.getPosition(), true, true);
    rm.getMap(240050100).broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一道亮光之後，一把鑰匙突然出現在該區域的某個地方"));
}

//4001088第二個迷宮室的水晶鑰匙
//4001089第三個迷宮室的水晶鑰匙
//4001090第四個迷宮室的水晶鑰匙
//4001091第五個迷宮室的水晶鑰匙
