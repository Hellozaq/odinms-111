/*
     名字：斐勒
     地图：可疑的實驗室
     描述：931000010
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
            if (status == 5) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getMap().getId() == 931000011) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInfoQuest(23007).indexOf("vel00=1") == -1) {
        switch (status) {
            case 0:
                cm.sendNext("不可以再靠近了…！");
                break;
            case 1:
                cm.sendNextPrev("怎麼會來這裡，這裡是禁止出入的地方。");
                break;
            case 2:
                cm.sendNextPrevS("#b你是誰？");
                break;
            case 3:
                cm.sendNextPrev("我…我在這裡，往上看。");
                break;
            case 4:
                cm.getPlayer().updateInfoQuest(23007, cm.getPlayer().getInfoQuest(23007) + ";vel00=1");
                cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/Resistance/ClickVel"));
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getInfoQuest(23007).indexOf("vel01=1") == -1) {
        switch (status) {
            case 0:
                cm.sendNext("我是…傑利麥勒博士的實驗者，我叫作斐勒…雖然不知道你怎麼跑進來的，快點出去，要是被博士發現的話，就完蛋了！");
                break;
            case 1:
                cm.sendNextPrevS("#b實驗者？你到底在說什麼啊，這裡到底是什麼地方，你為什麼要進去裡面啊？");
                break;
            case 2:
                cm.sendNextPrev("你不知道傑利麥勒？傑利麥勒博士…黑色翅膀的瘋狂科學家！這裡是傑利麥勒的研究室，傑利麥勒在這裡做人體實驗…");
                break;
            case 3:
                cm.sendNextPrevS("#b人體…實驗？");
                break;
            case 4:
                cm.sendNextPrev("對，人體實驗，你如果被抓到，說不定也會變成實驗品！快逃跑！");
                break;
            case 5:
                cm.sendNextPrevS("#b什麼？逃、逃跑…？但是你…！");
                break;
            case 6:
                cm.sendNextPrev("…噓！小聲一點！傑利麥勒博士來了。");
                break;
            case 7:
                cm.dispose();
                cm.getPlayer().updateInfoQuest(23007, cm.getPlayer().getInfoQuest(23007) + ";vel01=1");
                cm.getPlayer().changeMap(cm.getMap(931000011), cm.getMap(931000011).getPortal(0));
                return;
        }
    }
    if (cm.getPlayer().getInfoQuest(23007).indexOf("vel01=1") != -1) {
        switch (status) {
            case 0:
                cm.sendNext("好險…傑利麥勒好像有事出去了…快，就趁現在，你快點走吧。");
                break;
            case 1:
                cm.sendNextPrevS("#b我一個人逃走嗎？那你呢？");
                break;
            case 2:
                cm.sendNextPrev("我沒有辦法逃走，傑利麥勒博士記得自己實驗過的所有東西，只要少一個，馬上就會發現的…所以你快走吧。");
                break;
            case 3:
                cm.sendNextPrevS("#b不可以！你也跟我一起走！");
                break;
            case 4:
                cm.sendNextPrev("就說不可能了，更何況我…被關在這裡面，想要逃也逃不了…謝謝你為我擔心，好久沒有人這麼關心我了，快，快去吧。");
                break;
            case 5:
                cm.sendYesNo("#b(斐勒把眼睛閉了起來，就像放棄了一切，該怎麼辦？)");
                break;
            case 6:
                cm.dispose();
                cm.gainExp(60);
                cm.getPlayer().changeMap(cm.getMap(931000013), cm.getMap(931000013).getPortal(0));
        }
    }
}
