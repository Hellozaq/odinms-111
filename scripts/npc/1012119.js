/*
     名字：王年海
     地图：芽孢山丘
     描述：100020000
 */

var map = 910060000;

function start() {
    if (cm.getPlayer().getLevel() > 30) {
        cm.sendOk("三十等級以後無法使用唷。");
        cm.dispose();
        return;
    }
    var chat = "選擇一個你想要去的培育中心，30等級以後無法使用唷！#b";
    for (var i = 0; i < 5; i++)
        chat += "\r\n#L" + i + "#培育中心" + i + "(" + cm.getMap(map + i).getCharacters().size() + "/" + 3 + ")#l";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getMap(map + selection).getCharacters().size() < 4) {
            cm.getPlayer().changeMap(cm.getMap(map + selection), cm.getMap(map + selection).getPortal(1));
            cm.dispose();
            return;
        }
        cm.sendOk("這個培育中心已經滿人，請稍後再嘗試！");
    }
    cm.dispose();
}
