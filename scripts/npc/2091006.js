/*
	名字:	武公下戰帖
	地圖:	桃花仙境寺院
	描述:	250000100
*/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 1) {
                cm.dispose();
                return;
            }
            if (status < 2) { //神秘去洗，官方可能错别字。应该是神秘气息
                cm.sendNext("#b（赶紧将手从公告上放了下来,  围绕着我的神秘去洗也消失不\r\n见了.  ）#k");
                cm.dispose();
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
            cm.sendSimple("#e<公告>#n\r\n有意挑战武陵道场的勇敢年轻人们请到武陵道场来.  -武公-\r\n\r\n#L0##b尝试挑战武陵道场.#l\r\n#L1#再仔细阅读公告.#l");
            break;
        case 1:
            if (selection < 1)
                cm.sendYesNo("#b（刚一碰触公告,  就有一股神秘的气息开始包裹住了我.  ）#k\r\n\r\n要就此前往武陵道场吗?");
            if (selection > 0) {
                cm.sendOk("#e<公告：去挑战吧！>#n\r\n我是武陵道场的主人武公,  很久以前为了成为仙人,  我便开始\r\n在武陵进行修炼,  现在我的内功已经达到了一定境界,  武陵道\r\n场的主人是个懦弱无能的人,  所以从今天起,  武陵道场就由我\r\n来接手.  最强大的人便有资格获得武陵道场.\r\n如果有人想要接受我的教诲,  欢迎随时挑战!  就算是有人想要\r\n向我挑战也无妨,  我会让你彻底地感受到自己的懦弱的.");
            }
            select = selection;
            break;
        case 2:
            if (select < 1) {
                cm.getPlayer().changeMap(cm.getMap(925020000), cm.getMap(925020000).getPortal(4));
            }
/*
            if (select > 0) {
                cm.sendPrev("如果有任何人想找我切磋，隨時來挑戰就行了，我會讓你瞭解自己的弱點。你可以獨自挑戰我，但是如果你沒有那個勇氣，你也可以叫上朋友一起來挑戰我。");
            }
*/
            cm.dispose();
    }
}