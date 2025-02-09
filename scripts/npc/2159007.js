/*
     名字：斐勒
     地图：可疑的實驗室
     描述：931000013
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getMap().getId() == 931000011 || cm.getPlayer().getMap().getId() == 931000030) {
        cm.dispose();
        return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1) {
        switch (status) {
            case 0:
                cm.sendNext("…哦，哦？怎麼搞的？剛剛那個震動的關係，把玻璃震碎了？破掉了？");
                break;
            case 1:
                cm.sendNextPrevS("#b哈，現在沒東西阻擋你了吧？那麼我們走吧！");
                break;
            case 2:
                cm.sendNext("但、但是…");
                break;
            case 3:
                cm.sendNextPrevS("#b難道你想一直在這裡？");
                break;
            case 4:
                cm.sendNextPrev("當然不是啊，我不想呆在實驗室裏！");
                break;
            case 5:
                cm.sendNextPrevS("#b那就一起走吧！快點！");
                break;
            case 6:
                cm.getPlayer().changeMap(cm.getMap(931000020), cm.getMap(931000020).getPortal(1));
                cm.getPlayer().updateInfoQuest(23007, cm.getPlayer().getInfoQuest(23007) + ";vel01=2");
                cm.dispose();
                return;
        }
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1) {
        switch (status) {
            case 0:
                cm.sendNext("已、已經好久沒有走出實驗室了…這是哪裡啊？");
                break;
            case 1:
                cm.sendNextPrevS("#b去我們的村莊，趁那黑色翅膀追上來前，我們快點逃跑吧！");
                break;
            case 2:
                cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
                cm.dispose();
        }
    }
}
