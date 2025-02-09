var status;
var num;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.sendOk("这样才对嘛！既然开始，就不要中途放弃，一定要挑战到最后，这才是正确的姿态！快去调查塑料桶，搜集10个#b机器配件#k吧。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            if (cm.getPlayer().getMapId() === 922000000) { // 检查玩家是否在目标地图
                // 创建菜单选项
                cm.sendSimple("事情全部做完了吗？想出去的话，我可以送你出去。你想怎么办？\r\n#L0##b请把我送出去。#k#l");
            } else if (cm.getQuestStatus(3239) === 1) {
                cm.sendNext("好啊。在我让你进去的地方，应该可以找到几个塑料桶。推倒塑料桶，找找里面是不是零件。我也会跟你一起进去，你只要找出10个零件给我就可以了。但是有限制时间，需要尽快行动。那让我们来重新开始吧~！");
            } else {
                cm.sendOk("嗯……最近玩具工厂经常发生零件丢失事件，这可怎么办呢？虽然很想找人来帮忙，但是我想你应该无法在限定时间内解决问题。难道就没有可信的人了吗？");
                cm.dispose();
            }
        }

        if (status == 1) {
            if (selection === 0 && cm.getPlayer().getMapId() === 922000000) { // 如果选择“请把我送出去”
                // 显示确认提示
                num = selection;
                cm.sendYesNo("嗯......好的......我可以送你出去，但是下次再来的话，就得从头开始挑战。怎么样......你想出去吗？");
            } else if (cm.getPlayer().getMapId() === 220020000) {
                cm.warp(922000000, 0); // 传送到返回地图
                // 开始计时任务
                cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(220020000));
                cm.dispose();
            }
        }

        if (status == 2) {
            if (num === 0) { // 如果选择“是”
                cm.warp(922000009, 0); // 传送到目标地图
                cm.dispose();
            }
        }

    }
}
