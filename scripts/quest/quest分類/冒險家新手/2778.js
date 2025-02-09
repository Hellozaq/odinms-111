/*
     名字：易德的發明物品
     地图：魔法森林
     描述：101000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendAcceptDecline("我可以告訴你關於玩偶的事情，但這是很重要的資訊，我不能白白告訴你。如果你能幫我一個忙，我就告訴你。就算你罵我也沒關係，但是這些玩偶不是我做的，雖然有點關係。怎麼樣，你願意接受嗎？");
            break;
        case 1:
            var em = qm.getEventManager("Protectflyingpigs");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(qm.getPlayer());
                qm.forceStartQuest();
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "飛格米格雷斯的群落地目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
