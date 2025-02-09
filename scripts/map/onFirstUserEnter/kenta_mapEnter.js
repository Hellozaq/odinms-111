/*
     名字：隱藏地圖
     地图：危險之海1
     描述：923040100
 */

function start() {
    switch ((ms.getPlayer().getMap().getId() / 100) % 10) {
        case 1: //危險之海1
            ms.getPlayer().getMap().startMapEffect("消滅附近所有的怪物", 5120052);
            break;
        case 2: //危險之海2
            ms.getPlayer().getMap().startMapEffect("由於水壓的阻礙，需要攜帶10個氣泡進入更深的地方", 5120052);
            break;
        case 3: //危險之海中央
            ms.getPlayer().getMap().startMapEffect("快點來啊，我在這裡，請在三分鐘內保護我", 5120052);
            break;
        case 4: //危險的洞窟
            ms.getPlayer().getMap().startMapEffect("請打敗洞穴裏的海怒斯，恢復原本平靜的海洋", 5120052);
            break;
        default:
    }
    ms.dispose();
}
