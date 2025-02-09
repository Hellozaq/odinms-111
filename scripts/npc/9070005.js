/*
     名字：羅茲弟
     地图：戰鬥廣場
     描述：960000000
 */

function start() {
    var chat = "歡迎來到楓之谷世界的大亂鬥，參加大亂鬥的方法很簡單，找旁邊的#b#p9070000##k就可以馬上入場，那麼簡單說明一下規則吧。";
    var options = ["生死戰", "紅藍隊戰", "冰騎士", "等級選擇"];
    for (var i = 0; i < options.length; i++)
        chat += "\r\n#L" + i + "#" + options[i] + "#l";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk(Text[selection][mode - 1]);
    cm.dispose();
}

var Text = [["簡單說就是個人賽，在地圖上所有玩家都是敵人，想辦法打倒他們就對了。"],
    ["也就是團體賽，進入地圖後，系統會自動幫玩家分成紅藍兩隊，互相比賽，和哪隊打倒的對手最多為勝利隊伍。"],
    ["玩法是10名玩家中會有1人變為冰騎士，1個人對抗其他9名玩家，會有特殊的大絕招，詳細玩法就要進遊戲才能體驗了哦！"],
    ["大亂鬥模式按照等級分為LV.30+、LV.70+、LV.120+、LV.180+4個階段，玩家可以選擇進入合適的區域挑戰。"]];
