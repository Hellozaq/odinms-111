/*
     名字：石巨人寺院
     地图：第1階段 : 石巨人寺院1
     描述：952000000
 */

function start() {
    switch ((ms.getPlayer().getMap().getId() / 100) % 100) {
        case 5:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("monsterPark/stageEff/final", 3));
            break;
        default:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("monsterPark/stageEff/stage", 3));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("monsterPark/stageEff/number/" + (((ms.getPlayer().getMap().getId() / 100) % 100) + 1), 3));
    }
    ms.getPlayer().dropMessage(-1, "清除掉周圍所有怪物，可以進入下一階段");
    ms.getPlayer().dropMessage(-1, "每位成員可以而外獲得20%經驗值");
    ms.dispose();
}
