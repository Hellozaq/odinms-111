/*
     名字：翅膀使者
     地图：危險的發電所
     描述：931040010
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("叮咚！正是曾帶領過黑魔法師軍隊的軍團長——殺人鯨！猜對了我就要給你鼓掌~啪啪啪~");
            break;
        case 1:
            qm.sendNextPrevS("你居然還活著！");
            break;
        case 2:
            qm.sendNextPrev("嗯，當然還活著。你們不也活著嗎，我怎麼可能會死呢？我可想你了~所以我就使了一點小小的把戲，怎麼樣？");
            break;
        case 3:
            qm.sendNextPrevS("我說呢，黑色翅膀對我一無所知，還那麼盯著我不放……原來是這個原因啊，是你在盯著我。");
            break;
        case 4:
            qm.sendNextPrev("嗯，我的孩子們也想和你打招呼，所以就讓你們認識認識了。當然，還有個傻子還是自己跑出去的~");
            break;
        case 5:
            qm.sendNextPrevS("你的…孩子？");
            break;
        case 6:
            qm.sendNextPrev("嗯，你來的時候沒看見嗎？應該看到不少了啊，剛才不是還給你引路來著嗎？");
            break;
        case 7:
            qm.sendNextPrevS("難道…是你把黑色翅膀……！");
            break;
        case 8:
            qm.sendNextPrev("是我創造出了他們，一個人待著實在是很無聊啊。");
            break;
        case 9:
            qm.sendNextPrevS("黑魔法師已經被封印了！可你居然還操纵黑色翅膀這種組織來進行活動，你還在覬覦楓之谷世界嗎？");
            break;
        case 10:
            qm.sendNextPrev("是的……黑魔法師大人確實被封印了，但馬上也要……呵呵呵，好玩的事情還是留作秘密吧？");
            break;
        case 11:
            qm.sendNextPrev("那麼，廢話就到此為止！現在我們來玩玩吧！我一直都很想和你玩玩呢。");
            break;
        case 12:
            qm.removeNpc(qm.getPlayer().getMap().getId(), 1033230);
            Packages.server.quest.MapleQuest.getInstance(24091).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300435), new java.awt.Point(716, 5));
            qm.dispose();
    }
}
