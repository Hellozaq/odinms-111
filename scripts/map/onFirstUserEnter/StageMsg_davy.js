/*
     名字：隱藏地圖
     地图：前往海盜船之路
     描述：925100000
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 925100000: //前往海盜船之路
            ms.getPlayer().getMap().startMapEffect("大人，這裏是通往海盜船的必經之路，要想登上海盜船，我們必須先要消滅掉附近的海盜", 5120020);
            break;
        case 925100100: //突破船首!
            ms.getPlayer().getMap().startMapEffect("大人，如果想要前往海盜船的內部，需要從附近海盜的身上找到新手海賊、中級海賊、老手海賊的象徵", 5120020);
            break;
        case 925100200: //
            ms.getPlayer().getMap().startMapEffect("大人，請消滅掉這裏所有的的守衛，如果覺得合適，也可以進入到船艙中，或許有什麼其他發現也不一定", 5120020);
            break;
        case 925100300: //
            ms.getPlayer().getMap().startMapEffect("大人，請消滅掉這裏所有的的守衛，如果覺得合適，也可以進入到船艙中，或許有什麼其他發現也不一定", 5120020);
            break;
        case 925100400: //打倒海賊!
            ms.getPlayer().getMap().startMapEffect("大人，現在我們必須從附近怪物身上找到鑰匙，把船艙的門全部關閉，防止更多的海盜支援", 5120020);
            break;
        case 925100500: //海賊王的最後
            ms.getPlayer().getMap().startMapEffect("大人，你看到了嗎，我的孫子被海盜王綁了起來，請儘快救出它", 5120020);
            break;
        default:
    }
    ms.dispose();
}
