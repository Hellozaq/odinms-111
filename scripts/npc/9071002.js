var status;
var sel = -1;
var cardPiece = [4001513, 4001515, 4001521];
var card = [4001514, 4001516, 4001522];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else {
        status++;
    }

    if (status == 0) {
        cm.sendSimple("你好～天气不错吧？要想使用怪物公园，当然应该来找我。我能为你做什么呢？\r\n#b" +
            "\r\n#L0#交换#t4001513##l" +
            "\r\n#L1#交换#t4001515##l" +
            "\r\n#L2#交换#t4001521##l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendGetNumber("你想要换多少张#b#t4001513##k呢？\r\n\r\n你当前拥有#b" + cm.getPlayer().getItemQuantity(4001513, false) + " #k张#b#t4001513##k。", 1, 1, 1000);
        } else if (selection == 1) {
            status = 2;
            cm.sendGetNumber("你想要换多少张#b#t4001515##k呢？\r\n\r\n你当前拥有#b" + cm.getPlayer().getItemQuantity(4001515, false) + " #k张#b#t4001515##k。", 1, 1, 1000);
        } else if (selection == 2) {
            status = 3;
            cm.sendGetNumber("你想要换多少张#b#t4001521##k呢？\r\n\r\n你当前拥有#b" + cm.getPlayer().getItemQuantity(4001521, false) + " #k张#b#t4001521##k。", 1, 1, 1000);
        }
    } else if (status == 2) {
        if (cm.haveItem(4001513, 10 * selection)) {
            if (cm.canHold(4001514, selection)) {
                cm.gainItem(4001513, -(10 * selection));
                cm.gainItem(4001514, selection);
                cm.sendOk("恭喜你购买成功。");
                cm.dispose();
            } else {
                cm.sendOk("请确保你有足够的空间来容纳 #b" + selection + " 张斑马纹票券。");
                cm.dispose();
            }
        } else {
            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
            cm.dispose();
        }
    } else if (status == 3) {
        if (cm.haveItem(4001515, 10 * selection)) {
            if (cm.canHold(4001516, selection)) {
                cm.gainItem(4001515, -(10 * selection));
                cm.gainItem(4001516, selection);
                cm.sendOk("恭喜你购买成功。");
                cm.dispose();
            } else {
                cm.sendOk("请确保你有足够的空间来容纳 #b" + selection + " 张豹纹票券。");
                cm.dispose();
            }
        } else {
            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
            cm.dispose();
        }
    } else if (status == 4) {
        if (cm.haveItem(4001521, 10 * selection)) {
            if (cm.canHold(4001522, selection)) {
                cm.gainItem(4001521, -(10 * selection));
                cm.gainItem(4001522, selection);
                cm.sendOk("恭喜你购买成功。");
                cm.dispose();
            } else {
                cm.sendOk("请确保你有足够的空间来容纳 #b" + selection + " 张老虎纹票券。");
                cm.dispose();
            }
        } else {
            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
            cm.dispose();
        }
    }
}
