/*
名字:	地獄巴洛古使用券
地圖:	地獄巴洛古使用券
描述:	騎乘技能
 */

function start() {
    if (im.getPlayer().getSkillLevel(80001074) > 0) {
        im.sendOkS("You already learned the #fSkill/8000.img/skill/80001074/iconMouseOver# #b#q80001074##k skill. You can relearn it once the skill expires.", 4);
        im.dispose();
        return;
    }
    im.gainItem(2430309, -1);
    im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001074), 1, 1, -1);
    im.sendNextS("You learned the #fSkill/8000.img/skill/80001074/iconMouseOver# #b#q80001074##k skill!", 4);
    im.dispose();
}
