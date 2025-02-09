var dh;
var entry = true;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.sendNext("好吧。也是，这是我的苦恼……跟你没什么关系……好吧，你\r\n走吧。啊……我只能继续郁闷地站岗了。但是，如果你改了主\r\n意，可以随时来找我。");
        cm.dispose();
        return;
    } else if (mode == 0 && status == 3) {
        cm.sendNext("好的。等你准备好了之后再来找我吧。但是最好别拖太长时间\r\n。那个家伙说不定会变成其他样子。不能让他发现我们已经知\r\n道了他的行踪。");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getQuestStatus(3230) == 1) {
        if (status == 0) {
            cm.sendYesNo("嗯……听旁边的#b玩具兵得利巴#k说，你想帮我解决烦恼？嗯......\r\n好吧。这里面藏着非常危险的家伙。因为那个家伙，我现在非\r\n常为难……你能帮我找到那个家伙吗？");
        } else if (status == 1) {
            cm.sendNext("哦~真的非常感谢。你真是位亲切而善良的人。看来玩具兵得\r\n利巴看人的眼光还不错。我来告诉你需要帮我干什么吧。");
        } else if (status == 2) {
            cm.sendNext("不久前通过时间裂缝入侵这里的其他世界的怪物，偷走了玩具\r\n城时间塔的钟摆，并在这扇门后面的房间里变成了娃娃之家。\r\n但是它们看上去全都一模一样，没办法找出那个家伙。");
        } else if (status == 3) {
            cm.sendYesNo("因为找不到那个家伙，现在我们非常头疼。上面的人命令我们\r\n尽快找到他……你能帮我找到那个家伙吗？要找的话，必须进\r\n入房间。");
        } else if (status == 4) {
            cm.sendNext("很好！在我送你去的房间里，有好几个娃娃之家。请你找出其\r\n中一个稍微有点不同的娃娃之家，然后把它打碎。如果正确的\r\n话，在里面应该能找到#b表锤#k。如果错了，就会强制移动到外面\r\n。这一点一定要注意。");
        } else if (status == 5) {
            cm.sendNextPrev("里面还有怪物，受到变成娃娃之家的异次元怪物的力里的影响\r\n，它们变得非常强，几乎不可能打倒。在限定时间内找到#b表锤#k\r\n，交给里面的#b玩具兵马可#k，就可以完成任务。那就拜托你了。");
        } else if (status == 6) {
            if (cm.getMap(922000010).getCharacters().size() < 1) {
                cm.getMap(922000010).resetFully();
                cm.getPlayer().changeMap(cm.getMap(922000010), cm.getMap(922000010).getPortal(0));
                cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(221023200));
                if (cm.haveItem(4031094)) {
                    cm.gainItem(4031094, -1);
                }
                cm.dispose();
                return;
            }
            cm.sendNext("天啊…好像已经有人进房间内，正在寻找一个形状不同的木偶\r\n呀。不好意思，这里面每次只能进一个。请你以后再来吧。");
        }
    } else if (cm.getQuestStatus(3230) == 2) {
        cm.sendNext("多亏了你，我们找回了珍贵的#b表锤#k，并且击败了其他世界的\r\n怪物。还好现在没有发现更多的怪物。谢谢你特地过来帮助\r\n我们。你问我为什么一脸忧郁的表情？这个嘛……我本来就\r\n是这个样子的。");
//此处原版开头，多亏了你之前需要增加角色名。但由于换行问题，暂取消掉了。
        cm.dispose();
    } else {
        cm.sendOk("我们是守卫这个房间的玩具士兵，我们不会让任何人进去。至\r\n于为什么不让进去，里面有什么东西，我不能告诉你。如果没\r\n什么事的话，我还得继续站岗。你快走吧。");
        cm.dispose();
    }
}
