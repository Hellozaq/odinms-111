var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("看来你是个懂得珍惜生命的人。别再来烦我，快走吧。");
            cm.dispose();
            return;
        }
        status--;
    }
/*
    if (cm.getPlayer().getLevel() < 50) {
        cm.sendOk("看来你是个懂得珍惜生命的人。别再来烦我，快走吧。");
        cm.dispose();
        return;
    }
*/
    if (status == 0) {
        cm.sendYesNo("什么？你想挑战蝙蝠怪的封印？像你这样的小毛孩去挑战的话\r\n，很可能会丢掉性命…… 不过和我倒是没什么关系。一共需要\r\n#b10000金币#k的手续费，你应该有吧？");
    } else if (status == 1) {
        cm.sendNext("好，你可别怨我。到了之后，你去找我的徒弟#b无影#k，就可以参\r\n加远征队。");
    } else if (status == 2) {
        if (cm.getPlayer().getMeso() < 10000) {
            cm.sendOk("你拥有的金币不足。连那些钱都没有，还想挑战！快从我眼前\r\n消失。");
            cm.dispose();
            return;
        }
        cm.warp(105100100);
        cm.gainMeso(-10000);
        cm.dispose();
    }
}
