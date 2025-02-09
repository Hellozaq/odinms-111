/*
     名字：波斯貓
     地图：昭和村
     描述：801000000
 */

var questions = new Array("下麵哪個物品不是貍貓所掉出的？", "古代神社中，寫有『香菇』的地方有幾處？", "古代神社的販賣物品裏，那樣是提升攻擊力的？", "下列物品中，那個物品是存在的東西？", "那個物品不存在？", "在昭和鎮蔬菜店老闆叫什麼名字？", "這些物品那個是存在的東西？", "昭和村賣魚的鋪子外面寫著哪幾個字？", "哪種道具的說明有錯誤？", "哪樣不是古代神社的元泰賣的拉麵？", "昭和電影院門前的NPC是誰？")
var answers = new Array(new Array("貍貓柴火", "獨角獅的硬角", "紅色的磚"), new Array("6", "5", "4"), new Array("章魚燒", "福建面", "麵粉"), new Array("烏鴉屎", "黃色雨傘", "駱駝蛋"), new Array("凍凍魚", "寒冰破魔槍", "蒼蠅拍"), new Array("薩米", "卡米", "由美"), new Array("雲狐的牙齒", "花束", "雲狐尾巴"), new Array("商榮繁盛", "全場一折", "歡迎光臨"), new Array("竹矛-戰士唯一的武器", "橡皮榔頭-單手劍", "龍背刃-雙手劍"), new Array("蛋炒麵", "日本炒麵", "蘑菇特製拉麵"), new Array("武大郎", "櫻桃小丸子", "繪裏香"));
var correctAnswer = new Array(1, 1, 0, 1, 2, 2, 2, 0, 0, 2, 2);

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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(8012)).getStatus() != 1 || cm.getPlayer().itemQuantity(4031064)) {
                cm.sendOk("喵喵喵~!");
                cm.dispose();
                return;
            }
            cm.sendYesNo("事先再說明一下，如果你準備回答我的問題，必須要準備好300個炸雞。");
            break;
        case 1:
            if (cm.getPlayer().itemQuantity(2020001) < 300) {
                cm.sendOk("什麼？不！如果你想要珠子的話，至少需要先弄300個炸雞，我只是一只動物，不會像你一樣慷慨。");
                cm.dispose();
                return;
            }
            cm.gainItem(2020001, -300)
            cm.sendNext("幹得好！現在是時候讓我問你一些問題了，我相信你會意識到這一點，記住，如果你錯了，那就結束了，你所付出的一切必須從頭再來！");
            break;
        default:
            if (status > 2)
                if (selection != correctAnswer.pop()) {
                    cm.sendNext("喵~，反正所有人類犯錯誤！如果你想再來回答一次，那就給我帶300個炸雞。")
                    cm.dispose();
                    return;
                }
            questionNum = Math.floor(Math.random() * questions.length);
            if (questionNum != (questions.length - 1)) {
                var temp;
                temp = questions[questionNum];
                questions[questionNum] = questions[questions.length - 1];
                questions[questions.length - 1] = temp;
                temp = answers[questionNum];
                answers[questionNum] = answers[questions.length - 1];
                answers[questions.length - 1] = temp;
                temp = correctAnswer[questionNum];
                correctAnswer[questionNum] = correctAnswer[questions.length - 1];
                correctAnswer[questions.length - 1] = temp;
            }
            var question = questions.pop();
            var answer = answers.pop();
            var prompt = "問題" + (status - 1) + ":\t" + question;
            for (var i = 0; i < answer.length; i++)
                prompt += "\r\n#L" + i + "##b" + answer[i] + "#l";
            cm.sendSimple(prompt);
            break;
        case 7:
            if (selection != correctAnswer.pop()) {
                cm.sendOk("喵~，你這個錯誤犯得很好，如果你想再來回答一次，那就給我帶300個炸雞。");
                cm.dispose();
                return;
            }
            cm.sendNext("喵~，你回答了所有的問題，雖然我可能不喜歡人類，但是我不想破壞一個承諾，所以，這是#v4031064##t4031064#。");
            break;
        case 8:
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4031064, 1);
            cm.sendOk("我們的生意結束了，非常感謝你，你現在可以走了。");
            cm.dispose();
    }
}
