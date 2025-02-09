
package constants;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuickMove {
    private static Map<Integer, List<QuickMoveEntry>> quickmoves = new HashMap<Integer, List<QuickMoveEntry>>();

    public static void QuickMoveLoad() {
        List<QuickMoveNpc> QuickMap = new ArrayList<QuickMoveNpc>();
        //萬能, 公園, 碼頭, 市場, 技術, 計程, 商店, 商店, 大亂鬥
        QuickMap.add(new QuickMoveNpc(100000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(101000000, true, true, true, false, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(102000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(103000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(104000000, true, false, true, false, false, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(120000100, true, true, true, true, false, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(200000000, true, true, true, true, true, false, true, true, true));
        QuickMap.add(new QuickMoveNpc(211000000, true, true, false, false, false, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(220000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(221000000, true, true, false, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(222000000, true, true, false, true, true, false, true, true, true));
        QuickMap.add(new QuickMoveNpc(230000000, true, true, false, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(240000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(250000000, true, true, true, true, true, false, true, true, true));
        QuickMap.add(new QuickMoveNpc(251000000, true, true, false, true, true, false, true, true, true));
        QuickMap.add(new QuickMoveNpc(260000000, true, true, true, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(261000000, true, true, false, true, true, true, true, true, true));
        QuickMap.add(new QuickMoveNpc(310000000, true, true, true, true, true, true, true, true, true));
        for (QuickMoveNpc qmtp : QuickMap) {
            List<QuickMoveEntry> asd = new ArrayList<QuickMoveEntry>();
            if (qmtp.npc1) {
                asd.add(new QuickMoveEntry(9010022, 2, 10, "使用可以前往组队任务等各种内容地图的\n#c<次元之镜>#"));
            }
            if (qmtp.npc2) {
                asd.add(new QuickMoveEntry(9071003, 1, 20, "移动到可以和队员们一起对付强大怪物的组队游戏区域\n#c<怪物公园>#\n#c20级以上可以参加"));
            }
            if (qmtp.npc3) {
                asd.add(new QuickMoveEntry(9000086, 5, 0, "前往离现在位置较近的\n#c<大陆移动码头>#"));
            }
            if (qmtp.npc4) {
                asd.add(new QuickMoveEntry(9000087, 3, 0, "前往可与其他角色交易的\n#c<自由市场>#。"));
            }
            if (qmtp.npc5) {
                asd.add(new QuickMoveEntry(9000088, 4, 30, "前往专业技术村\n#c<匠人街>。#\n#c30级以上才能进入。"));
            }
            if (qmtp.npc6) {
                int npc = qmtp.mapid < 200000000 ? 9000089 : qmtp.mapid < 230000000 ? 2023000 : qmtp.mapid < 240000000 ? 2060009 : qmtp.mapid < 250000000 ? 2023000 : qmtp.mapid < 270000000 ? 9000090 : 2150007;
                asd.add(new QuickMoveEntry(npc, 6, 0, "使用可以前往附近主要地区的\n#c<出租车>#。"));
            }
            if (qmtp.npc7) {
                asd.add(new QuickMoveEntry(9010037, 7, 10, "使用传说硬币可以购买的\n#c<蓝多普的商店>#"));
            }
            if (qmtp.npc8) {
                asd.add(new QuickMoveEntry(9010038, 8, 10, "使用传说枫叶硬币可以购买的\n#c<露西娅的商店>#"));
            }
            if (qmtp.npc9) {
                asd.add(new QuickMoveEntry(9070004, 0, 10, "移动到可以和其他玩家比试实力的大乱斗区域\n#c<战斗广场-赤壁>#\n#c30级以上可以移动"));
            }
            quickmoves.put(qmtp.mapid, asd);
        }
    }
//在比克·爱德华那里可以打造时尚的发型。
//通过蕾雅可移动到#c家族中心<英雄公馆>#。

    public static List<QuickMoveEntry> getQuickMoves(int mapid) {
        return quickmoves.get(mapid);
    }

    public static class QuickMoveNpc {
        boolean npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8, npc9;
        int mapid;

        public QuickMoveNpc(int map, boolean npc1, boolean npc2, boolean npc3, boolean npc4, boolean npc5, boolean npc6, boolean npc7, boolean npc8, boolean npc9) {
            this.mapid = map;
            this.npc1 = npc1;
            this.npc2 = npc2;
            this.npc3 = npc3;
            this.npc4 = npc4;
            this.npc5 = npc5;
            this.npc6 = npc6;
            this.npc7 = npc7;
            this.npc8 = npc8;
            this.npc9 = npc9;
        }
    }
}
