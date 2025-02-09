/*
     名字：傑利麥勒
     地图：可疑的實驗室
     描述：931000011
 */

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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendNextS("嗯…實驗似乎進行的相當順利，和黑魔法師合作果然是明智之舉…呵呵呵。", 1);
            break;
        case 1:
            cm.sendNextPrevS("果然有先見之明。", 5, 2159008);
            break;
        case 2:
            cm.sendNextPrevS("黑色翅膀無可挑剔的機器人，就快要完成了，現在實驗要開始下一個階段了。", 1);
            break;
        case 3:
            cm.sendNextPrevS("下一個階段？", 5, 2159008);
            break;
        case 4:
            cm.sendNextPrevS("呼呼…到現在還反應不過來嗎？光看這個實驗室就應該知道，我現在要製作什麼東西。只是做機器人不够好玩，這比做機器人還有趣…", 1);
            break;
        case 5:
            cm.sendNextPrevS("嗯？這實驗室嗎？你打算對這些實驗者做什麼事嗎？", 5, 2159008);
            break;
        case 6:
            cm.sendNextPrevS("我能瞭解在你眼中，看不到這實驗室偉大的地方，至於你呢！只要把你的任務做好就行了，看好在這裡的每一個實驗者，別讓他們逃跑就行了。", 1);
            break;
        case 7:
            cm.sendNextPrevS("…嗯？有沒有聽到什麼奇怪的聲音？", 1);
            break;
        case 8:
            cm.sendNextPrevS("嗯？奇怪的聲音？這樣一說，好像有什麼…？", 5, 2159008);
            break;
        case 9:
            cm.dispose();
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.trembleEffect(0, 500));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/Resistance/TalkInLab"));
    }
}
