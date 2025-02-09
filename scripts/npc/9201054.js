/*
     名字：莉塔 羅莉絲
     地图：新葉城-市區中心
     描述：600000000
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
            if (status < 4) {
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
            cm.sendSimple("你好啊，鄰居，近來可好？\r\n#L0##b我聽說有人找到了通往幻影森林深處的路！#l\r\n#L1#你能給我講講守護者的城堡嗎？#l");
            break;
        case 1:
            if (selection < 1) {
                cm.sendSimple("是啊，我還對此有點不爽呢。我也知道史林姆市長有自己的理由去探索克拉奇亞，但是作為城裡的警長，我必須為公民的安全負責！我已經接到多起報告，說有人在林中走失了。\r\n#L0##b你有沒有什麼線索？#l");
            }
            if (selection > 0) {
                cm.sendOk("嗯，約翰和我說他兄弟回來了。呃，準確的說，是回到了這片大陸……我肯定那個混蛋會不會在進入荒野尋找城堡之前在這座城市停留。嗯，無論如何，如果你想瞭解這件事的詳情，那我建議你去找約翰聊聊，當然，如果你能找到#b#p9201051##k，那和他聊更好。");
                cm.dispose();
            }
            break;
        case 2:
            cm.sendSimple("你是說除了林中那些幽靈和樹怪麼？嗯……是有人說過森林裏某個地方有個類似強盜營地的地方。雖然我不願魯莽地做出任何結論，但是除非我親眼所見，否則我不排除對他們的懷疑。\r\n#L0##b林中有什麼需要防備的麼？#l");
            break;
        case 3:
            cm.sendSimple("人們都知道這片森林道路詭異難尋，據說裡面的樹木自身會移動，會等你走過之後擋住你的來路。比如你向某個方向走，轉了兩次方向，結果卻發現回到了原點。光這些就可以讓普通人走失了！\r\n#L0##b繼續說……#l");
            break;
        case 4:
            cm.sendPrev("另外，林中還有一些自然界本身就有的危險…比如充滿劇毒泥沼的沼澤之類。如果你要進去，那一定要帶上一些#b萬能藥#k或者解毒劑之類的東西。此外回城卷軸也是必備物品，萬一你迷路了呢。如果你一定要去，一定要小心謹慎，步步為營。");
            break;
        case 5:
            cm.dispose();
    }
}
