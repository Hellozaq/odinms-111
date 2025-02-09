/*
     名字：基礎體力測試
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
                qm.sendOk("難道，5隻太少了嗎？要是為了修煉想多消滅幾隻的話，我是不會反對的。雖然有點心痛，但是為了英雄的修煉，這次我就睜一隻眼閉一隻眼吧…");
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
            qm.sendNext("好，那就開始檢驗一下你的體力吧。方法很簡單，去消滅這座島上最強，最兇惡的怪物穆魯君就可以！幫我們消滅50隻得話再好不過了…");
            break;
        case 1:
            qm.sendAcceptDecline("但是把沒有幾隻的穆魯君全部消滅掉的話，對生態環境也是不好的，所以就除掉5隻吧。為環境和自然照相的修煉，真是美麗啊…");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21018).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1"));
            qm.dispose();
    }
}
