/*
     名字：雾海大作战
     地图：触礁的幽灵船
     描述：923020000
 */

function start() {
    switch (ms.getPlayer().getMap().getId() % 10) {
        case 0: //第1作戰室
            ms.getPlayer().getMap().startMapEffect("消滅所有的海軍二等兵幽靈", 5120033);
            break;
        case 1: //第2作戰室
            ms.getPlayer().getMap().startMapEffect("消滅藏匿在箱子裡的海軍一等兵幽靈", 5120033);
            break;
        case 2: //第3作戰室
            ms.getPlayer().getMap().startMapEffect("請小心，一等航海士很厲害", 5120033);
            break;
        case 3: //第4作戰室
            ms.getPlayer().getMap().startMapEffect("在這個區域也有很多幽靈船員，要儘快消滅它們", 5120033);
            break;
        case 4: //第5作戰室
            ms.getPlayer().getMap().startMapEffect("消滅所有的幽靈船員並連通兩個操縱杆，就可以進入船長室", 5120033);
            break;
        default:
    }
    ms.dispose();
}
