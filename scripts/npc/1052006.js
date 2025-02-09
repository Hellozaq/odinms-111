/**
    Jake - Victoria Road : Subway Ticketing Booth (103000100)
**/

var meso = new Array(500, 1200, 2000);
var item = new Array(4031036, 4031037, 4031038);
var regions = ["第一地区", "第二地区", "第三地区"]; // 对应地区名称
var selector;
var menu = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else if (status == 1 && mode == 0) {
        cm.sendNext("只要有票，你随时都能进去。虽然里面有危险的装置，但也有珍贵的物品。以后你想进去的时候再来吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getPlayerStat("LVL") <= 19) {
            cm.sendNext("看起来你现在还无法进去，工地里面有危险的装置，可能会让你难以应对。请先进行训练，做好准备后再回来。");
            cm.dispose();
        } else {
            if (cm.getPlayerStat("LVL") >= 20) {
                menu += "#L0##b工地B1#k#l\r\n";
            }
            if (cm.getPlayerStat("LVL") >= 30) {
                menu += "#L1##b工地B2#k#l\r\n";
            }
            if (cm.getPlayerStat("LVL") >= 40) {
                menu += "#L2##b工地B3#k#l\r\n";
            }
            cm.sendSimple("你想进去就要买票。买票后你通过右边的检票口可以进去。买\r\n什么票？\r\n" + menu);
        }
    } else if (status == 1) {
        selector = selection;
        cm.sendYesNo("你要买#b工地B" + (selector + 1) + "票#k吗？票价是" + meso[selector] + "金币。购买前你先确认背包的\r\n其它窗有没有空间。");
    } else if (status == 2) {
        // 检查玩家是否有足够的金币并且背包是否有空位
        if (cm.getMeso() < meso[selector]) {
            cm.sendNext("你是不是金币不够？请你再确认背包的其它窗有没有空间。");
            cm.dispose();
        } else if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            // 背包空间不足时提示信息，但不扣金币和发放物品
            cm.sendNext("你是不是金币不够？请你再确认背包的其它窗有没有空间。");
            cm.dispose();
        } else {
            // 扣除金币并给予道具
            cm.gainMeso(-meso[selector]);
            cm.gainItem(item[selector], 1);
            // 根据选择的票据来判断地区名称
            var region = regions[selector];
            cm.sendNext("把票投入那边儿的检票口就行。我听说在" + regions[selector] + "里可以得到\r\n珍贵的物品，但是里面陷阱太多，大多数人都放弃了。你千万\r\n小心。");
            cm.dispose();
        }
    }
}
