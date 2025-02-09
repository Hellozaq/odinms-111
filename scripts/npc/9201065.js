/*
     名字：米蘭達
     地图：新葉城 購物中心
     描述：600000001
 */

var skin = Array(0, 1, 2, 3, 4, 5);

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
            if (status < 2) {
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
            var chat = "歡迎光臨新葉城購物中心，我是米蘭達，只需要持有本店的會員卡，就能让你擁有一直想要的那種肌膚~！#b";
            chat += "\r\n#L1##v5153015##t5153015#";
            cm.sendSimple(chat);
            break;
        case 1:
            cm.sendStyle("使用專用的機器，可以提前看到治療後的自己，您想做什麼樣的皮膚護理？", skin);
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(5153015)) {
                cm.gainItem(5153015, -1);
                cm.setSkin(selection);
                cm.sendOk("您的新肤色已经護理好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，你沒有接受治療所需的護膚優惠券，恐怕我們不能為您做這件事。");
            cm.dispose();
    }
}
