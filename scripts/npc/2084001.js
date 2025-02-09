/*
     名字：里諾赫
     地图：維多利亞港
     描述：104000000
 */

var Text = [["不認識我嗎？我是世界第一富翁里諾赫，我通過貿易賺了很多錢，如果你有什麼值錢的東西，可以隨時來找我。"],
    ["如果你集齊了空白指南針和四個方向的空白指南針用文字，就能拼出一個完整的金指南針哦，它會將你帶往一個神秘的倉庫，裡面會有你意向不到的#r寶藏#k。"]];

function start() {
    cm.sendSimple("Hello！有什麼事嗎？\r\n#L0##b你是誰？#l\r\n#L1#空白指南針有什麼用。#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk(Text[selection][mode - 1]);
    cm.dispose();
}
