/*
     名字：馬蒂達
     地图：勇士部落
     描述：102000000
 */

var weapon = [1302064, 1402039, 1322054, 1422029, 1432040, 1442051, 1372034, 1382039, 1452045, 1462040, 1472055, 1332055, 1482022, 1492022];

var req = [[5220007, 1]];
var sels;

var status = -1;

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            if (status >= 0) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            var msg = "    Hi~ #b#h ##k，你好啊，我是大姐大，你是要找我租凭装备吗？使用 #b#z5220007##k 可以在我这里租凭道具 #b2#k 天哦。\r\n";
            for (var i = 0; i < weapon.length; i++) {
                msg += "     #b#L" + i + "#";
                msg += "#v" + weapon[i] + "# #t" + weapon[i] + "##l\r\n";
            }
            cm.sendSimple("" + msg + "");
            break;
        case 1:
            sels = selection;
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.playerMessage(1, "裝備道具視窗的欄位不足！");
                cm.dispose();
                return;
            }
            for (var i = 0; i < req.length; i++) {
                if (cm.itemQuantity(req[i][0]) < req[i][1]) {
                    cm.sendNext("#b身上没有#r#v" + req[i][0] + "#  #t" + req[i][0] + "# x " + req[i][1] + "");
                    cm.dispose();
                    return;
                }
            }
            cm.sendYesNo("是否要租凭道具 #b#v" + weapon[sels] + "#  #t" + weapon[sels] + "# ? \r\n");
            break;
        case 2:
            for (var i = 0; i < req.length; i++) {
                cm.gainItem(req[i][0], -req[i][1]);
            }
            cm.gainItem(weapon[sels], 1, 2);
            cm.sendNext("#b成功租凭道具  #b#v" + weapon[sels] + "#  #t" + weapon[sels] + "# ?");
            cm.dispose();
    }
}
