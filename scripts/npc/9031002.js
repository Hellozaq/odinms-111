var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var selStr = "好吧，你想要从我采矿达人#b诺布#k这里得到点什么？\r\n";
        if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
            selStr += "#L2##b提升#e采矿#n等级。#l\r\n#L3#采矿技术初始化。#k#l\r\n#L4##b兑换母矿碎片。#k#l";
        } else {
            selStr += "#L0##b听取有关#e采矿#n的说明。#l\r\n#L1#学习#e采矿#n。#k#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        sel = selection;
        if (sel == 0) {
            //status = -1;
            cm.sendNext("采矿是一种采集野外各处矿石的技术，将这些采集回来的原石\r\n放入蒙斯出售的模具中加以冶炼，就能变成装备、饰品和炼金\r\n术等所需的材料。");
            cm.dispose();
        } else if (sel == 1) {
            /*if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
                cm.sendOk("你已经学会采药啦。我建议你最好学习#b装备制作#k或者#b饰品制作#k。你觉得怎么样？");
                cm.dispose();
                return;
            }*/
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk("小毛孩！你还不够强，还不能学习专业技术。#b至少必须达到30级2转以上，龙神必须3转以上，暗影双刀必须2转+以上#k，才能学习专业技术。等达到条件之后再来找我吧。");
/*
            } else if (cm.getProfessions() >= 3) {
                cm.sendNext("嗯，你好像已经学习了3种专业技术。真想学习的话，就必须先放弃一种技术。");
*/
            } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
                cm.sendNext("你已经学些过#e采矿#n，难道还想学？");
            } else {
                cm.sendOk("好了，我已经把采矿的基本知识传授给你了。熟练度积满后提\r\n升至下一等级，就可以学习新的内容。等你积满熟练度后，再\r\n来找我吧。");
                cm.teachSkill(92010000, 0x1000000, 10);
            }
            cm.dispose();
        } else if (sel == 2) {
            cm.sendNext("熟练度还没满啊。等熟练度满了之后，你再来找我。");
            cm.dispose();
        } else if (sel == 3) {
            if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
                cm.sendOk("你学习了装备制作，现在无法初始化。真想初始化的话，就得先对装备制作或饰品制作进行初始化。");
                cm.dispose();
            } else if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
                cm.sendOk("你学习了饰品制作，现在无法初始化。真想初始化的话，就得先对装备制作或饰品制作进行初始化。");
                cm.dispose();
            } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
                status = 3;
                cm.sendYesNo("你想放弃#e采矿#n？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？");
            }
        } else if (sel == 4) {
            if (!cm.haveItem(4011010, 100)) {
                cm.sendOk("#b100个母矿碎片#k可以交换#i2028067##b1个诺布的矿物袋#k，再拿点母矿\r\n碎片来吧。");
            } else if (!cm.canHold(2028067, 1)) {
                cm.sendOk("背包空间不足。");
            } else {
                cm.sendOk("兑换成功.");
                cm.gainItem(2028067, 1);
                cm.gainItem(4011010, -100);
            }
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendOk("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
        cm.dispose();
    } else if (status == 4) {
        if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
            cm.sendOk("采矿技术已经初始化。如果想重新学习，请再来找我。");
            cm.teachSkill(92010000, 0, 0);
            if (cm.isQuestActive(3197)) {
                cm.forfeitQuest(3197);
            }
            if (cm.isQuestActive(3198)) {
                cm.forfeitQuest(3198);
            }
        } else {
            cm.sendNext("没有学习#e采矿#n初始化失败。");
        }
        cm.dispose();
    }
}
