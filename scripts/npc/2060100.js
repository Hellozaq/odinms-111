function start() {
    if (cm.getQuestStatus(6301) == 1) {
        if (cm.haveItem(4000175)) {
            cm.gainItem(4000175, -1);
            if (cm.getParty() == null) {
                cm.warp(923000000)
            } else {
                cm.warpParty(923000000)
            }
        } else {
            cm.sendOk("要进入次元空间，你必须拥有一个皮亚奴斯模型。可以通过击败皮亚奴斯获得。");
        }
    } else {
        cm.sendOk("次元空间？你是从哪儿听说的这种事？");
    }
    cm.dispose();
}
