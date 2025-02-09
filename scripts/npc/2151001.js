/*
     名字：赫力泰
     地图：秘密廣場
     描述：310010000
 */

function start() {
    cm.sendSimple("……我口才也不怎麼好……！\r\n#L0##b請向我說明煉獄巫師的職業#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk("煉獄巫師是使用長杖系武器的反抗軍，擁有強大的攻擊範圍大且華麗的技能，能夠在短時間內制服怪物。");
    cm.dispose();
}
