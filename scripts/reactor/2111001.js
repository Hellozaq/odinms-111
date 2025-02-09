/*
     名字：最後的任務
     地图：混沌殘暴炎魔的祭壇
     描述：280030000
 */
/*
function act() {
rm.getPlayer().getMap().spawnZakum(-10, -215);
rm.getClient().getSession().write(Packages.tools.packet.EtcPacket.environmentChange("Bgm06/FinalFight", 6));
rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "殘暴炎魔被火焰之眼的力量召喚"));
}
 */

//4001017火焰之眼

/*
Zakum Altar - Summons Zakum.
 */

function act() {
rm.changeMusic("Bgm06/FinalFight");
rm.spawnFakeMonster(8800000);
for (i = 8800003; i < 8800011; i++) {
rm.spawnMonster(i);
}
//rm.createMapMonitor(280030000, "ps00");
rm.mapMessage(5, "扎昆被火眼的力量召唤。");
}