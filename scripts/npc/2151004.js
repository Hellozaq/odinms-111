/*
     名字：傑奇
     地图：秘密廣場
     描述：310010000
 */

function start() {
    cm.sendSimple("你很好奇我假面裡的樣子嗎？！\r\n#L0##b請向我說明機甲戰神的職業#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk("機甲戰神擁有完全不同的裝備。其最大的特點是裝備機甲，使用火彈進行強有力的攻擊。機甲戰神在攻擊怪物的時候，擁有高攻擊，高暴擊的特點，且具備高頻輸出的優勢。");
    cm.dispose();
}
