/*
     名字：裴爾
     地图：秘密廣場
     描述：310010000
 */

function start() {
    cm.sendSimple("我真的很喜歡動物。特別是像貓咪一樣的動物。看上去很優雅不是嗎？\r\n#L0##b請向我說狂豹獵人的職業#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk("狂豹獵人是使用弩的反抗軍，擁有弓箭手的銳志與敏捷，同時擁有弩手的穩定的攻擊，其最大的特點是駕馭獵豹，把駕馭野獸的技能發揮到了極致。");
    cm.dispose();
}
