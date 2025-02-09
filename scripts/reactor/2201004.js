/*
     名字： 玩具城
     地图： 動力室
          描述：220080001
 */

function act() {
    rm.mapMessage(5, "用时间裂缝碎片填补了玩具城动力室的时间裂缝。");
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(8500000, -410, -400);
    rm.getMap(220080000).setReactorState();
}
