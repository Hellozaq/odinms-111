/*
     名字：威德琳
     地图：訓練房入口
     描述：310010010
 */

function start() {
    cm.getPlayer().getStat().heal(cm.getPlayer());
    cm.sendOk("如果在執行任務時受傷，我會為你治療。");
    cm.dispose();
}
