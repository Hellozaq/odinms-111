/*
     名字：隱密之地
     地图：第一次同行&amp;lt;1號關隘&gt;
     描述：910340100
 */

var map = [910340100, 910340200, 910340300, 910340400];
var stage = [1, 2, 3, 4];

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    for (var i = 0; i < map.length; i++)
        if (pi.getPlayer().getMap().getId() == map[i]) {
            x = i;
        }
    if (pi.getPlayer().getMap().getId() == map[x] && eim.getProperty("stage" + stage[x]) != null) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(pi.getPlayer().getMap().getId() + 100), pi.getMap(pi.getPlayer().getMap().getId() + 100).getPortal(0));
    }
    return false;
}
