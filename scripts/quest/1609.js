/*
     名字：[十字獵人]史菲魯納的邀請
     地图：奇怪的通道
     描述：931050410
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("不感興趣嗎？聽說禮物很豐厚，如果我不是很忙的話，我也會過去看看。");
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendAcceptDecline("最近有聽說嗎？住在天空之城雲彩公園Ⅳ的史菲魯納邀請楓之谷的旅行者到自己家裡做客。她準備了各式各樣的禮物，對於像你這樣的冒險家來說，可以從六條岔道乘坐飛行船到達天空之城，你不認為應該去找#b#p2032001##k看看嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1609).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
