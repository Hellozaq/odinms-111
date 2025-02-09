/*
     名字：會有希望嗎
     地图：第五座塔樓
     描述：211061001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 4) {
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
            qm.sendSimple("請問你有見到知道這城的過往詳情的人嗎？什麼？是盧頓？他曾是王的近衛騎士團長。原來他還在…嗯，那盧頓都有說什麼嗎？你有聽到凡雷恩為什麼變成現在這樣嗎？\r\n#L0##b(說明從#p2161002#聽來的故事。)#l");
            break;
        case 1:
            qm.sendSimple("對…沒錯，就是這樣。就是黑雲遮蓋天空的那天，原來是如此平凡的士兵突然開始攻擊我們。城牆倒塌屋頂燃燒…我，我在塔中被煙霧…沒錯事情就是這樣。\r\n#L0##b(#p2161001#的反應#p2161002#說的話應該是事實。)#l");
            break;
        case 2:
            qm.sendSimple("原來是因為這樣才會讓凡雷恩變節。我只是一味的埋怨著凡雷恩，但是沒想到這段時間，他卻在極度的悲傷與憤怒中讓憎惡茁壯。…我不會讓他這樣繼續下去了。\r\n#L0##b請問你有什麼方法嗎？#l");
            break;
        case 3:
            qm.sendAcceptDecline("我要親自去找他。之前因為擁有黑暗氣息的怪物，讓我無法前往見面室…但是若有你相助應該就可以了。請和我一起去見面室吧！我拜託你！");
            break;
        case 4:
            if (qm.getMap(921140000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3178).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(921140000).resetFully();
                qm.getMap(921140000).killMonster(9300295);
                shammos = Packages.server.life.MapleLifeFactory.getMonster(9300295);
                qm.getPlayer().changeMap(qm.getMap(921140000), qm.getMap(921140000).getPortal(1));
                qm.getPlayer().getMap().spawnMonsterWithEffectBelow(shammos, new java.awt.Point(qm.getPlayer().getMap().getPortal(0).getPosition()), 12);
                shammos.switchController(qm.getPlayer(), false);
                qm.getClient().sendPacket(Packages.tools.packet.MobPacket.getNodeProperties(shammos, qm.getPlayer().getMap()));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(211061001));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "秘密走道目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
