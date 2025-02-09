/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;中央塔&gt;
     描述：920010100
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 920010100: //中央塔
            ms.getPlayer().getMap().startMapEffect("大人，請你一定要拯救雅典娜女神", 5120019);
            break;
        case 920010200: //散步路
            ms.getPlayer().getMap().startMapEffect("大人，請從附近怪物那裡收集到30個雕像碎片，然後統一交給我", 5120019);
            break;
        case 920010300: //倉庫
            ms.getPlayer().getMap().startMapEffect("大人，請在倉庫裡的怪物身上尋找到15個雕像碎片，然後統一交給我", 5120019);
            break;
        case 920010400: //休息室
            ms.getPlayer().getMap().startMapEffect("大人，雅典娜女神以前最喜歡聽音樂了，在這裡，請你找到正確的CD放到播放機上", 5120019);
            break;
        case 920010700: //向上通道
            ms.getPlayer().getMap().startMapEffect("大人，在這裡需要打開上面三個啟動杆其中的兩個，然後由您與我交談，來解鎖隱藏的箱子", 5120019);
            break;
        case 920010800: //庭園
            ms.getPlayer().getMap().startMapEffect("大人，解開女神封印的生命草在爸爸精靈的身上，需要在花壇裏種出黑色的食人花，將它引誘出來", 5120019);
            break;
        default:
    }
    ms.dispose();
}
