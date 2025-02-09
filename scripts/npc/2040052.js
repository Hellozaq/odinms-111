/*
     名字：圖書館員 懷玆
     地图：赫爾奧斯塔圖書館
     描述：222020000
 */

var questid = new Array(3615, 3616, 3617, 3618, 3920, 3630, 3633, 3639);
var questitem = new Array(4031235, 4031236, 4031237, 4031238, 4031591, 4031270, 4031280, 4031298);
var counter = 0;

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
            if (status < 1) {
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
            if (counter < 1) {
                var books = "";
                for (i = 0; i < questid.length; i++)
                    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(questid[i])).getStatus() == 2) {
                        counter += 1;
                        books += "\r\n#v" + questitem[i] + "##t" + questitem[i] + "#";
                    }
            }
            if (counter < 1) {
                cm.sendOk("给我站住，又想跑去偷懒，你还沒有归还任何一本故事书哦。");
                cm.dispose();
                return;
            }
            cm.sendNext("讓我看看，#b#h0##k一共歸還了#b" + counter + "#k本故事書：#b" + books);
            break;
        case 1:
            cm.sendPrev("感谢你为童话村所做的一切。");
            break;
        case 2:
            cm.dispose();
    }
}
