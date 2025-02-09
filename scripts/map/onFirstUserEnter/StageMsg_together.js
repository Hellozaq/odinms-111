/*
     名字：隱密之地
     地图：第一次同行
     描述：910340100
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 910340100: //1號關隘
            ms.getPlayer().getMap().startMapEffect("歡迎來到第一次同行<1號關隘>，在這個階段，需要每個組員分別完成我交代的任務，才能獲得通行證", 5120017);
            break;
        case 910340200: //2號關隘
            ms.getPlayer().getMap().startMapEffect("歡迎來到第一次同行<2號關隘>，在這裡需要讓兩名組員分別爬上繩子，以形成正確的組合來解鎖下一階段", 5120017);
            break;
        case 910340300: //3號關隘
            ms.getPlayer().getMap().startMapEffect("歡迎來到第一次同行<3號關隘>，在這裡需要讓兩名組員分別站上平臺，以形成正確的組合來解鎖下一階段", 5120017);
            break;
        case 910340400: //4號關隘
            ms.getPlayer().getMap().startMapEffect("歡迎進入第一次同行<4號關隘>，請擊敗附近的怪物，收集好全部的通行證後，再轉交給我", 5120017);
            break;
        default:
    }
    ms.dispose();
}
