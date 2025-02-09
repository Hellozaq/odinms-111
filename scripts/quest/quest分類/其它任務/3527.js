/*
     名字：找回遺失的記憶
     地图：航海室
     描述：120000101
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("穩定的姿勢和氣息，還有可以感受到藏有驚人爆發力的身軀…好久不見了#h0#，你已成為一個優秀的海盜。");
            break;
        case 1:
            qm.sendNextPrev("記得第一次碰到你，還是個無法適應大海生活的初心者，轉眼竟然變得這麼強了啊！現在想想，當時的你已經擁有成為偉大海盜的潛力，看來我並沒有看錯人。");
            break;
        case 2:
            qm.sendNextPrev("請你繼續加油！保持努力上進的姿態，我確信，你一定可以變成更強大的海盜……");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3527).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
