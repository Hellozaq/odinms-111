/*
     名字：隱藏地圖
     地图：遺棄之塔
     描述：922010100
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 922010100: //第1階段
            ms.getPlayer().getMap().startMapEffect("歡迎來到遺棄之塔<第1階段>，請在附近搜尋，整個小組需要集齊20張異次元通行證", 5120018);
            break;
        case 922010400: //第2階段
            ms.getPlayer().getMap().startMapEffect("歡迎來到遺棄之塔<第2階段>，請在附近搜尋，整個小組需要集齊14張異次元通行證", 5120018);
            break;
        case 922010600: //第3階段
            ms.getPlayer().getMap().startMapEffect("請站在有數位的箱子上面，按「↑」鍵，試著找到正確的數位組合才能到達最上面", 5120018);
            break;
        case 922010700: //第4階段
            ms.getPlayer().getMap().startMapEffect("歡迎來到遺棄之塔<第4階段>，請在附近搜尋，整個小組需要集齊4張異次元通行證", 5120018);
            break;
        case 922010800: //第5階段
            ms.getPlayer().getMap().startMapEffect("在這個階段中，需要2名組員分別站在這些標有數位的方塊上面，以形成正確的組合來解鎖下一階段", 5120018);
            break;
        case 922010900: //時空的裂縫
            ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300012), new java.awt.Point(941, 184));
            ms.getPlayer().getMap().startMapEffect("歡迎來到時空的裂縫，請消滅巨型戰鬥機，並收集異次元鑰匙", 5120018);
            break;
        default:
    }
    ms.dispose();
}
