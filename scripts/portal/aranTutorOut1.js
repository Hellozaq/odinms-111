/*
     名字：黑路
     地图：避難準備中
     描述：914000100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21000)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(5, "只有接受了右边赫丽娜的任务，才能出去。"));
        return false;
    }
    pi.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(20000017), 1, 1, -1);
    pi.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(20000018), 1, 1, -1);

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914000200), pi.getMap(914000200).getPortal(1)); //燃燒的森林1
    return true;
}
