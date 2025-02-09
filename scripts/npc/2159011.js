/*
     名字：相當可疑的洞。
     地图：人煙稀少的石山
     描述：931000001
 */

function start() {
    cm.sendYesNo("看見可疑的洞口，不知道班是不是跑進去裡面了，要進去看看嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("#b怎麼可能…再怎麼說班也不會躲到裡面去的…是吧？");
            break;
        case 1:
            cm.gainExp(35);
            cm.getPlayer().changeMap(cm.getMap(931000010), cm.getMap(931000010).getPortal(0));
    }
    cm.dispose();
}
