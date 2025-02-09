/*
     名字：收納衣類箱
     地图：弓箭手村市場
     描述：100000100
 */

var itemList = new Array();

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            var chat = "#e- 請選擇要回收的道具類型 -#n#b"
            var options = new Array("裝備欄", "消耗欄", "裝飾欄", "其它欄", "特殊欄");
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            inventoryType = selection + 1;
            itemList = cm.getInventory(inventoryType).list().iterator();
            text = "\t\t#e- 請選擇要回收的道具 -#n#b\r\n";
            var indexof = 0;
            while (itemList.hasNext()) {
                var item = itemList.next();
                text += "#L" + item.getPosition() + "##v" + item.getItemId() + "##l";
                if (indexof > 1 && indexof % 5 < 1) {
                    text += "\r\n";
                }
                indexof++;
            }
            cm.sendSimple(text);
            break;
        case 2:
            var item = cm.getInventory(inventoryType).getItem(selection);
            deleteSlot = selection;
            deleteQuantity = item.getQuantity();
            cm.sendYesNo("#e確定要回收#r#v" + item.getItemId() + "##z" + item.getItemId() + "#" + deleteQuantity + "個#k嗎？");
            break;
        case 3:
            status = -1;
            cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
            cm.sendOk("回收成功，祝你遊戲愉快。");
    }
}
