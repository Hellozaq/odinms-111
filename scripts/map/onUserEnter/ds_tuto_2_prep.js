/*
     名字：隱藏地圖
     地图：黑色魔法師的房前迴廊1
     描述：927000020
 */

function start() {
    ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30010166), 1, 1, -1);
    ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30011167), 1, 1, -1);
    ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30011168), 1, 1, -1);
    ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30011169), 1, 1, -1);
    ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30011170), 1, 1, -1);
    ms.spawnNPCRequestController(2159309, 550, 50, 0);
    ms.dispose();
}
