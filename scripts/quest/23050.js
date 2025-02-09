/*
     名字：黑色翅膀的新武器
     地图：陷阱！實驗室監獄
     描述：931000311
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23050)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23050).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你成功地破壞掉了黑色翅膀的新武器！哈哈哈哈！你果然是個了不起的傢夥！我說過我的眼睛絕不會錯！沒有什麼比弓箭手的眼睛更亮的了！我就知道你一定可以做到！末日反抗軍中有你這樣的人，我感到很自豪！");
            break;
        case 1:
            qm.sendPrevS("要是可以的話，我很想向傑利麥勒炫耀一下……不過要是他帶著手下來的話，逃走的時候可能會很麻煩。我們趕緊回到地下本部去吧。我馬上使用地下本部基地返回卷軸！好了，一……二……三！", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23050).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(310010000), qm.getMap(310010000).getPortal(0));
            qm.dispose();
    }
}
