/*
     名字：神聖的石頭
     地图：雪原聖地
     描述：211040401
 */

var quest = [1431, 1432, 1433, 1435, 1436, 1437, 1439, 1440, 1442, 1443, 1445, 1446, 1447, 1448];

function start() {
    for (var i = 0; i < quest.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            cm.getPlayer().changeMap(cm.getMap(910540000), cm.getMap(910540000).getPortal(1));
        }
    cm.dispose();
}
