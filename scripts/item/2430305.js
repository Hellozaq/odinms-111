/*
名字:	夢饜使用券
地圖:	夢饜使用券
描述:	騎乘技能
 */

function start() {
    if (im.getPlayer().getSkillLevel(80001072) > 0) {
        im.sendOkS("You already learned the #fSkill/8000.img/skill/80001072/iconMouseOver# #b#q80001072##k skill. You can relearn it once the skill expires.", 4);
        im.dispose();
        return;
    }
    im.gainItem(2430305, -1);
    im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001072), 1, 1, -1);
    im.sendNextS("You learned the #fSkill/8000.img/skill/80001072/iconMouseOver# #b#q80001072##k skill!", 4);
    im.dispose();
}
