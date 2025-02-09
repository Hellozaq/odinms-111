/*
     名字：美洲豹馴化
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 6) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("對於狂豹獵人來說，騎寵是必需的。成為狂豹獵人之後，你會學會名叫捕獲的技能。用那個技能可以馴養和騎乘美洲豹。");
            break;
        case 1:
            qm.sendNextPrev("仔細查看技能窗，應該可以找到捕獲技能。先通過攻擊使美洲豹的血量降到50%以下，然後使用捕獲技能，就可以活捉美洲豹了。活捉之後，使用美洲豹騎乘，就可以騎乘美洲豹了。怎麼樣，簡單吧？");
            break;
        case 2:
            qm.sendNextPrev("在哪裡可以找到美洲豹？我前面的怪醫會把你帶到牠們所在的地方的。");
            break;
        case 3:
            qm.sendNextPrevS("你好，怪醫？請告訴我應該到哪裡去。");
            break;
        case 4:
            qm.sendNextPrev("嗯，你是新的狂豹獵人嗎？還是個小孩子。", 2151008);
            break;
        case 5:
            qm.sendNextPrevS("我雖然還很弱，但為了成為一名堂堂正正的末日反抗軍，我一定會努力的。在哪裡才能找到美洲豹呢？");
            break;
        case 6:
            qm.sendYesNo("精神狀態很不錯嘛。我把你送去見見我的兄弟們吧。今後你如果想去找牠們，可以來找我。", 2151008);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(23015).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(931000500), qm.getMap(931000500).getPortal(1));
            qm.dispose();
    }
}
