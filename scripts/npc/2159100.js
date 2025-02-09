/*
     名字：須勒
     地图：2次轉職
     描述：931000100
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
            cm.sendNext("怎，怎麼回事？我以為這個時候應該不會有人到機場來……難道！你是末日反抗軍嗎？");
            break;
        case 1:
            cm.sendNextPrevS("#b……不認識我了嗎？");
            break;
        case 2:
            cm.sendNextPrev("嗯，我好像在什麼地方見過你……是在什麼地方來著……");
            break;
        case 3:
            cm.sendNextPrev("原來你是之前帶走實驗體的那個傢伙啊！因為你，我被降了級！在這裏做這種雜事！我一定要報仇！");
            break;
        case 4:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("擊敗須勒，把報告書拿到手"));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001031), new java.awt.Point(-107, -23));
            cm.dispose();
    }
}
