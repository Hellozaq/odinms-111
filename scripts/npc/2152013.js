/*
     名字：小可愛
     地图：埃德爾斯坦
     描述：310000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23914)).getStatus() != 1 || cm.getPlayer().itemQuantity(4032750)) {
        cm.sendOk("你看我的氣球顏色好看嗎。");
        cm.dispose();
        return;
    }
    cm.sendSimple("啊……你正在搜集廢電池啊？我也有幾個。嗯……對了！如果你能給我一支#b#v4000596##z4000596##k，我就把電池送給你。怎麼樣？\r\n#L0##b換取#z4032750##l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (!cm.getPlayer().itemQuantity(4000596)) {
            cm.sendOk("需要一支#b#v4000596##z4000596##k才能換取#z4032750#哦。");
            cm.dispose();
            return;
        }
        cm.sendOk("重新利用資源，是件很開心的事吧？");
        cm.gainItem(4000596, -1);
        cm.gainItem(4032750, 1);
    }
    cm.dispose();
}
