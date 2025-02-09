/*
     名字：可疑男子
     地图：通往地底的路
     描述：105100000
 */

var item = Array(2040728, 2040729, 2040730, 2040731, 2040732, 2040733, 2040734, 2040735, 2040736, 2040737, 2040738, 2040739);
var shoeItemId = 1072000; // 假设鞋子的物品ID为1072000

var status;
var shoeSelection = false;
var scrollSelection = false;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode === -1) {
        cm.dispose();
        return;
    } else if (mode === 0 && (shoeSelection || scrollSelection)) {
        cm.sendOk("犹犹豫豫的......好吧，需要的话，可以再来找我。");
        cm.dispose();
        return;
    } else if (mode === 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }

    switch (status) {
        case 0:
            cm.sendSimple("你又来了？我们经常见面啊？你很闲吗？你要拜托我什么事吗\r\n？你找到蝙蝠怪的皮了吗？\r\n\r\n#L1##b请你用蝙蝠怪的皮碎片制作卷轴吧。\r\n#L2##b请你用20个蝙蝠怪的皮碎片做一双皮鞋吧。#l");
            break;
        case 1:
            if (selection === 1) {
                scrollSelection = true;
                // 检查消耗栏位是否足够
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.sendOk("如果你想获得卷轴，必须在消费栏中留出一个以上的空格。");
                    cm.dispose();
                    return;
                }
                // 显示卷轴制作选项
                var chat = "你要制作什么样的卷轴呢？卷轴种类不同，需要的皮毛数量也\r\n不同。#b";
                chat += "\r\n#L" + item.length + "##b等一下，下次再制作吧。#l"; // 将新选项放到顶部
                for (var i = 0; i < item.length; i++)
                    chat += "\r\n#L" + i + "##v" + item[i] + "##t" + item[i] + "##l";
                cm.sendSimple(chat);
            } else if (selection === 2) {
                shoeSelection = true;
                // 玩家选择制作鞋子后的新对话
                if (cm.getPlayer().itemQuantity(4001261) >= 20) {
                    cm.sendYesNo("你确认要交出20个蝙蝠怪的皮碎片来制作鞋子吗？");
                } else {
                    cm.sendNext("不过你好像没有足够的蝙蝠怪皮毛啊……材料不够。这样怎么\r\n能制作鞋子呢?");
                    cm.dispose();
                }
            }
            break;
        case 2:
            if (shoeSelection) {
                if (mode === 1) { // 玩家确认制作鞋子
                    // 检查背包空间是否足够
                    if (!cm.canHold(shoeItemId, 1)) {
                        cm.sendOk("你的背包的空间不足。");
                        cm.dispose();
                    } else {
                        // 扣除材料并给予鞋子
                        cm.gainItem(4001261, -20);
                        cm.gainItem(shoeItemId, 1);
                        cm.sendOk("我已经为你制作好皮鞋，请收好。");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("犹犹豫豫的......好吧，需要的话，可以再来找我。");
                    cm.dispose();
                }
            } else if (scrollSelection) {
                if (selection < item.length) {
                    // 检查材料数量
                    if (cm.getPlayer().itemQuantity(4001261) < 1) {
                        cm.sendOk("不过你好像没有足够的蝙蝠怪皮毛啊......材料不够。这样怎么\r\n能制作卷轴呢？");
                    } else {
                        // 处理制作卷轴的逻辑
                        cm.gainItem(4001261, -1);
                        cm.gainItem(item[selection], 1);
                        cm.sendOk("请收好#v" + item[selection] + "#，如果还有多的#t4001261#请来找我。");
                    }
                } else {
                    cm.sendOk("犹犹豫豫的......好吧，需要的话，可以再来找我。");
                }
                cm.dispose();
            }
            break;
    }
}
