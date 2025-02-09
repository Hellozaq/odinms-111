/*
     名字：休彼德蔓
     地图：玩具城
     描述：220000000
 */

function start() {
    request = cm.getNextCarnivalRequest();
    cm.sendYesNo(request.getChallengeInfo() + "\r\n你想要這些夥伴參與到你的怪物擂台赛來嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
    cm.dispose();
}
