/*
     名字：人質
     地图：叢林山谷
     描述：600010300
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28749)).getStatus() != 1) {
                cm.dispose();
                return;
            }
            if (!(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28762)).getStatus() > 0 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28763)).getStatus() > 0 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28765)).getStatus() > 0 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28766)).getStatus() > 0)) {
                cm.sendOk("這裡防衛看上去特別的森嚴！我先探一探其他地方情況再來這裡吧！");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getPosition().x < -200 || cm.getPlayer().getPosition().x > 50) {
                cm.sendOk("距離太遠了……需要靠近一些。");
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("快速連按Ctrl鍵打碎鎖"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/guide1/0", 5000, 0, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 5:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 6:
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("鎖被你打碎了"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 7:
            cm.sendNextS("用這個返回卷軸回新葉城去！", 3);
            break;
        case 8:
            cm.sendNextS("謝謝你救了我！", 1);
            break;
        case 9:
            cm.sendNextS("市民們都安全了，該去找市長了。", 3);
            break;
        case 10:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 10));
            break;
        case 11:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 200, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 230, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 260, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 290, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 330, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 360, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 390, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 600000, 420, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 200, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 12:
            cm.sendNextS("你！你就是那個在我們這兒搗蛋的傢伙！", 5, 9201174);
            break;
        case 13:
            cm.sendNextS("如果周圍的外星人不多，我就會說：給我滾出這裡，你們這幫外星雜種。…… 你好啊，外星人們，近來如何？", 3);
            break;
        case 14:
            cm.sendNextS("外星人把我們包圍了！", 1);
            break;
        case 15:
            cm.sendNextS("沒辦法了！用我給你的那個返回卷軸回城裏吧！", 3);
            break;
        case 16:
            cm.sendNextS("那——那你怎麼辦？！", 1);
            break;
        case 17:
            cm.sendNextS("對付這幾個弱小的外星人還不是手到擒來！", 3);
            break;
        case 18:
            cm.sendNextS("我們抓到這個楓之谷人了，把他關起來，到時候洗腦成奴隸！", 5, 9201174);
            break;
        case 19:
            cm.sendNextS("遵命，長官！洗腦機器最棒了！", 5, 9201174);
            break;
        case 20:
            cm.sendNextS("不不不！我的腦子不用洗！乾淨得很，我保證！", 3);
            break;
        case 21:
            cm.sendNextS("你們這種人的腦子都不乾淨，給我打昏這個原始人！", 5, 9201174);
            break;
        case 22:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/whiteOut", 3));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/BasicEff.img/CannonJump", 0, 0, -50, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 23:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face00"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 24:
            cm.dispose();
            Packages.server.quest.MapleQuest.getInstance(28764).forceStart(cm.getPlayer(), 0, null);
            Packages.server.quest.MapleQuest.getInstance(28749).forceComplete(cm.getPlayer(), 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.getPlayer().changeMap(cm.getMap(610040500), cm.getMap(610040500).getPortal(0));

    }
}
