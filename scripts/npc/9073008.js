/*
     名字： 時空門
     地图： 維多利亞
          描述：102040600
 */

var quest = [1608, 1611, 1615, 1620, 1621, 1623, 1625, 1627, 1628, 1629, 1631, 1632, 1633, 1634, 1613];
var tomap = [931050410, 931050411, 931050412, 931050413, 931050414, 931050415, 931050416, 931050417, 931050417, 931050418, 931050419, 931050421, 931050420, 931050422, 931050423];
var map = [102040600, 200080000, 220011000, 220040200, 221040400, 260010201, 250020300, 261020500, 261020500, 251010500, 240010200, 240010500, 240010600, 240020200, 211040000];
var portal = [2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1];

function start() {
    for (var i = 0; i < quest.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            q = i;
            if (cm.getPlayer().getMap().getId() == 240010600) {
                q = i + 1;
            }
        }
    if (cm.getPlayer().getMap().getId() != map[q]) {
        cm.dispose();
        return;
    }
    cm.sendYesNo("只要觸碰到時空門，就會有一股身體快要被吸進去的感覺。要移動到時空門裡的空間嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getMap(tomap[q]).getCharacters().size() > 0) {
            cm.getClient().getSession().write(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "區域目前擁擠，請稍後再試"));
            cm.dispose();
            return;
        }
        cm.getMap(tomap[q]).resetFully();
        cm.getPlayer().changeMap(cm.getMap(tomap[q]), cm.getMap(tomap[q]).getPortal(portal[q]));
        cm.getPlayer().startMapTimeLimitTask(1200, cm.getMap(map[q]));

    }
    cm.dispose();
}
