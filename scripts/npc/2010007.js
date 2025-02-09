var status = -1;
var isGuilded;
var sel;

function start() {
    if (cm.getPlayerStat("GID") > 0) {
        isGuilded = true;
    } else {
        isGuilded = false;
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (isGuilded == true) {
        guilded(mode, type, selection);
    } else {
        nonGuild(mode, type, selection);
    }
}

function guilded(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        if (status == 1 && sel == 1) {
            cm.sendNext("明智的选择。艰难成长起来的家族，怎么能说删就删了呢……");
            cm.dispose();
            return;
        } else if (status == 2) {
            if (sel == 0) {
                cm.sendNext("手续费负担很重吗？只要花一点时间，GP很快就能搜集到。别太担心。好了，请你以后再来找我吧。");
            } else if (sel == 2) {
                cm.sendNext("听到是培训，就害怕了吗？没有你想象的那么可怕。如果你改变了注意，就再来找我。");
            }
            cm.dispose();
            return;
        }
        selection = sel;
        status--;
    }

    if (status == 0) {
        cm.sendSimple("有什么可以帮你的吗？\r\n#b#L0#我想要增加家族人数#l\r\n#L1#我想要解散家族#l\r\n#L2#我想要更改家族管理员#l\r\n#L3#我想了解有关家族系统的详细说明#l");
    } else if (status == 1) {
        sel = selection; // 在这里设置 sel 的值

        if (sel == 2) {
            cm.sendNext("当家族管理员压力太大了吗？那就在家族成员列表中选择委任对象，并点击鼠标右键。然后再点击委任家族管理员按钮\r\n，就能将家族管理员职务委任给其他人。但只有对方在线的状态下才能委任。");
            cm.dispose();
        }
        if (sel == 3) {
            cm.sendNext("你想了解更多有关家族的内容？如果是那样的话，家族负责人蕾雅会为你介绍的。");
            cm.dispose();
        } else {
            if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
                cm.sendOk("你不是公会的公会长！！这是只有公会的公会长才可以决定的工作。");
                cm.dispose();
            } else {
                if (sel == 0) {
                    cm.sendNext("你是想增加家族人数吗？嗯，看来你的家族成长了不少～你也知道，要想增加家族人数，必须在家族本部重新登记。当然，使用金币作为手续费。此外，家族成员最多可以增加到200个。");
                } else if (sel == 1) {
                    cm.sendYesNo("你真的要解散家族吗？哎呀……哎呀……解散之后，你的家族就会被永久删除。很多家族特权也会一起消失。你真的要\r\n解散吗？");
                }
            }
        }
    } else if (status == 2) {
        if (sel == 0) {
            //cm.sendYesNo("当前的家族最大人数是#b" + cm.getGuildCapacity() + "名#k，扩增#b10名#k所需的手续费为#bGP 10000#k。怎顺便说下，你的家族当前拥有GP （）的GP。怎么样？你能扩增家族人数吗？");
            cm.sendYesNo("增加#b5名#k家族人数所需的手续费是#b500000金币#k。怎么样？你能\r\n扩增家族人数吗？");
        } else if (sel == 1) {
            cm.disbandGuild();
            //cm.sendYesNo("我再问你一次。你真的想放弃所有家族特权，解散家族吗？");
            cm.dispose();
        } else if (sel == 2) {
            cm.sendYesNo("怎么样？你想抽点时间，接受家族集中培训吗？\r\n#r(点击接受时，移动到听取说明的场所。)#k");
        }
    } else if (status == 3) {
        if (sel == 0) {
            //cm.sendNext("增加家族人数所需的GP好像不够。GP可以在家族窗口中确认。我再说一遍，增加家族人数所需要的手续费是#bGP 1万#k。");
            cm.increaseGuildCapacity(false); //true為 25,000 GP添加人數
            cm.dispose();
        } else if (sel == 2) {
            cm.dispose();
        }
    }
}

function nonGuild(mode, type, selection) {
    if (mode == 0 && status == 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        if (status == 2 && sel == 2) {
            cm.sendNext("你觉得还不是时候吗？如果你想创建家族，可以再来找我。");
            cm.dispose();
        } else if (status == 3 && sel == 3) {
            cm.sendNext("听到是培训，就害怕了吗？没有你想象的那么可怕。如果你改变了注意，就再来找我。");
            cm.dispose();
        }
        selection = sel;
        status--;
    }

    if (status == 0) {
        cm.sendNext("你……是因为对家族感兴趣，才会来找我的吗？");
    } else if (status == 1) {
        cm.sendSimple("你想知道什么？说吧。\r\n\r\n#b#L0#请介绍一下什么是家族#l\r\n#L1#如何才能创建家族？#l\r\n#L2#我想创建家族#l\r\n#L3#我想听听有关家族系统的详细说明#l");
    } else if (status == 2) {
        sel = selection;
        if (sel == 0) {
            cm.sendNext("家族……你可以把它理解成一个小的组织。是拥有相同理想的人为了同一个目的而聚集在一起成立的组织。但是家族是经过家族总部的正式登记，是经过认可的组织。");
        } else if (sel == 1) {
            cm.sendNext("等级至少必须达到10级，才能创建家族。");
        } else if (sel == 2) {
            cm.sendYesNo("哦！你是来创建家族的吗……要想创建家族，需要500万金币。我相信你应该准备好了。好的～你想创建家族吗？");
        } else if (sel == 3) {
            cm.sendNext("你想了解更多有关家族的内容？如果是那样的话，家族负责人蕾雅会为你介绍的。");
        }
    } else if (status == 3) {
        if (sel == 0) {
            cm.sendNextPrev("通过家族活动，可以获得很多优惠。比如，可以获得家族技能，以及家族专用物品。");
        } else if (sel == 1) {
            cm.sendNextPrev("此外还需要500万金币......这是创建家族必需的手续费。");
        } else if (sel == 2) {
            if (cm.getPlayerStat("LVL") < 100) {
                cm.sendNext("喂，你的等级还太低，好像还没办法成为家族管理员。要想创建家族，至少必须达到100级。等你升到100级之后，再重新尝试吧。");
                cm.dispose();
            } else if (cm.getMeso() < 5000000) {
                cm.sendNext("哎呀，手续费好像不够。你带够钱了吗？请再确认一下。要想创建家族，手续费是必须的。");
                cm.dispose();
            } else {
                cm.sendNext("请输入家族名称。");
            }
        } else if (sel == 3) {
            cm.sendYesNo("怎么样？你想抽点时间，接受家族集中培训吗？\r\n#r(点击接受时，移动到听取说明的场所。)#k");
        }
    } else if (status == 4) {
        if (sel == 0) {
            cm.dispose();
        } else if (sel == 1) {
            cm.sendNextPrev("好了……如果你想注册家族，就来找我吧～\r\n啊！当然，如果你已经加入了其他家族，那就不行了！！");
        } else if (sel == 2) {
            cm.genericGuildMessage(1);
            cm.dispose();
        } else if (sel == 3) {
            cm.dispose();
        }
    } else if (status == 5) {
        if (sel == 1) {
            cm.dispose();
        }
    }
}
