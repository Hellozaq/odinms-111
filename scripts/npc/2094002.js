/*
     名字：邱翁
     地图：前往海盜船之路
     描述：925100000
 */

var item = [4001117, 4001120, 4001121, 4001122];

function start() {
    switch (cm.getPlayer().getMap().getId()) {
        case 925100000:
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
                cm.sendOk("大人，沿途的海盜已經被消滅掉了，我們可以順著道路登上海盜船。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，這裏是通往海盜船的必經之路，要想登上海盜船，我們必須先要消滅掉附近的海盜。");
            cm.dispose();
            break;
        case 925100100:
            if (cm.getPlayer().getMap().getReactorByName("treasure1").getState() > 0) {
                cm.sendOk("大人，我們可以繼續前進了。");
                cm.dispose();
                return;
            }
            var qty = cm.getMap(925100100).getCharacters().size();
            if (cm.getPlayer().itemQuantity(4001120) < 5 * qty || cm.getPlayer().itemQuantity(4001121) < 5 * qty || cm.getPlayer().itemQuantity(4001122) < 5 * qty) {
                cm.sendOk("大人，如果想要前往海盜船的內部，就需要從附近海盜的身上找到#b#t4001120##k、#b#t4001121##k、#b#t4001122##k各" + 5 * qty + "張，然後統一交給我。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人！所有的海盜象徵已經集齊，可以進入船道通往下一個區域。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "真是太感動了！所有的海盜象徵已經集齊，可以進入船道通往下一個區域"));
            cm.gainItem(4001120, -5 * qty);
            cm.gainItem(4001121, -5 * qty);
            cm.gainItem(4001122, -5 * qty);
            cm.getPlayer().getMap().getReactorByName("treasure1").forceHitReactor(1);
            //cm.getPlayer().getMap().killAllMonsters(true);
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
            cm.dispose();
            break;
        case 925100200:
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
                cm.sendOk("大人，我很擔心我的孫子，我們最好加快一些前進的速度。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，請消滅掉這裏所有的的守衛，如果覺得合適，也可以進入到船艙中，或許有什麼其他發現也不一定。");
            break;
        case 925100201:
            if (cm.getPlayer().getMap().getReactorByName("treasure" + 1).getState() > 1) {
                cm.sendOk("大人，海盜做夢也沒想到，他的#b寶藏#k會被我們拿走。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
                cm.sendOk("大人，蘊藏在这里的海盜王寶箱已經出現，如果從附近區域找到#b鑰匙#k，可以打開箱子，這會讓他很生氣。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，這裡也許蘊藏著海盜王的寶藏哦，如果能消滅掉這些#b桔梗叛徒#k，或許會發現一些什麼。");
            break;
        case 925100202:
            if (cm.getPlayer().getMap().getMonsterById(9300107) != null) {
                cm.sendOk("大人，竊視的海賊王看守著這片區域，如果能消滅掉它，那就太好了。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
                cm.sendOk("大人，這些都是海盜王的心腹，平時都是做一些傷天害理的事，如果覺得合適，請#b消滅#k掉他們。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，這片區域的海盜已經消滅掉了。");
            break;
        case 925100300:
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
                cm.sendOk("大人，越來越擔心我的孫子了，真想快一點看到它。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，我已經可以感覺得到我的孫子的氣息，我們要儘快消滅掉這裏所有的守衛，才能繼續前行。");
            break;
        case 925100301:
            if (cm.getPlayer().getMap().getReactorByName("treasure" + 2).getState() > 1) {
                cm.sendOk("大人，蘊藏在这里的海盜王寶箱已經找到，它一定會非常生氣。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
                cm.sendOk("大人，蘊藏在這裡的海盜王的寶箱已經出現，如果能有#b鑰匙#k，打開箱子，這會讓他非常生氣。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，這裡也蘊藏著海盜王的寶藏，如果還有充分的時間，一定要找到#b寶藏#k。");
            break;
        case 925100302:
            if (cm.getPlayer().getMap().getMonsterById(9300107) != null) {
                cm.sendOk("大人，竊視的海賊王在這裏出現了，我們要儘快消滅掉它。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
                cm.sendOk("大人，這些都是海盜王的心腹，如果覺得合適，請消滅掉他們。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，這片區域的海盜已經消滅掉了，我們儘快離開這裏。");
            break;
        case 925100400:
            for (var i = 1; i < 5; i++)
                if (cm.getPlayer().getMap().getReactorByName("sMob" + i).getState() < 1) {
                    cm.sendOk("大人，我有聽到孫子的叫喊聲，相信他一定在不遠處，現在我們必須從附近怪物身上找到鑰匙，把船艙的門全部關閉，防止更多的#b海盜支援#k。");
                    cm.dispose();
                    return;
                }
            cm.sendOk("大人，進入前面的通道，我們將直接面對海盜王，如果都準備好了，那現在就走吧。");
            break;
        case 925100500:
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
                cm.sendOk("大人，你看到了嗎，我的孫子被海盜王綁了起來，請儘快救出它。");
                cm.dispose();
                return;
            }
            cm.sendOk("大人，太感動了，謝謝你救了我的孫子，我欠你的一份人情。");
            break;
        case 925100700:
            for (var i = 0; i < item.length; i++)
                cm.removeAll(item[i]);
            cm.getPlayer().changeMap(cm.getMap(251010404), cm.getMap(251010404).getPortal(0));
    }
    cm.dispose();
}
