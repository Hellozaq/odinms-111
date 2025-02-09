/*
玩家在线改名
by:Mp3
 */
var status = -1;
var beauty = 0;
var chrName;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("你好,我可以幫助你更改你的名字.");
    } else if (status == 1) {
        cm.sendGetText("請輸入你需要更改的名字吧!\r\n#r注:請不要輸入類似'管理員','GM'等的名字,一旦查出,立即封號!#k");
    } else if (status == 2) {
        chrName = cm.getText();
        if (chrName == "") { //检查输入的名字是否为空
            cm.sendOk("請輸入你將要修改的名字.");
            cm.dispose();
        } else {
            cm.sendSimple("您當前的名字為:#b「" + cm.getPlayer().getName() + "」#k\r\n您將要更改的名字是:#r「" + chrName + "」#k");
        }
    } else if (status == 3) {
        cm.getChar().setName(chrName);
        cm.getChar().saveToDB(false, false);
        cm.getPlayer().fakeRelog();
        cm.dispose();
    }
}
