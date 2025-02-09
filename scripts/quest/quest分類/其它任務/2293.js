/*
     名字：最後演奏曲
     地图：101大道
     描述：103040000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 2) {
                qm.dispose();
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
            qm.sendNext("你還記得搖滾精神#b演奏#k的最後一首歌嗎？我能想到他可能在#b模仿#k的幾首歌，所以仔細聽，告訴我是哪首歌。");
            break;
        case 1:
            var chat = "我給你一些樣品試聽，在你做出選擇之前請仔細聽。#b";
            chat += "\r\n#L1#聽第一首歌";
            chat += "\r\n#L2#聽第二首歌";
            chat += "\r\n#L3#聽第三首歌";
            chat += "\r\n#L4#輸入正確的歌曲";
            qm.sendSimple(chat);
            break;
        case 2:
            if (selection == 1) {
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
                qm.sendOk("令人尷尬的熟悉。");
                status = 0;
            }
            if (selection == 2) {
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("Coconut/Failed", 4));
                qm.sendOk("是這個嗎？");
                status = 0;
            }
            if (selection == 3) {
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("quest2293/Die", 4));
                qm.sendOk("你聽到了嗎？");
                status = 0;
            }
            if (selection == 4) {
                qm.sendGetNumber("現在，請告訴我答案，請在聊天視窗輸入#b1、2、或者3", 1, 1, 3);
            }
            break;
        case 3:
            if (selection == 1) {
                qm.sendNext("顯然你不喜歡音樂。");
                status = 0;
            }
            if (selection == 2) {
                qm.sendNext("我想你可以再試一次。");
                status = 0;
            }
            if (selection == 3) {
                qm.sendNext("這就是他演奏的那首歌，和我的作品#b風格#k不一樣，非常感謝。");
            }
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(2293).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
