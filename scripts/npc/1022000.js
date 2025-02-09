/*
     名字：武術教練
     地图：戰士聖殿
     描述：102000003
 */

function start() {
    cm.sendSimple("歡迎來到戰士聖殿，請問有什麼事？如果你想喜歡戰士的話，可以加入到我們這個部落！\r\n#L0##b請向我說明戰士的職業#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk("劍士～是一位攻擊與體力雙具的超級角色，在戰鬥中總是站在最前線，發揮他的實力與價值。他們主要使用的武器為劍、斧頭、棍、槌、槍、矛。");
    cm.dispose();
}
