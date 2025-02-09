/*
     名字：寵物訓練師尼爾
     地图：玩具城寵物散步路
     描述：220000006
 */

var close = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function start() {
    if (!cm.getPlayer().itemQuantity(4031128)) {
        cm.sendOk("儘管哥哥在管理寵物障礙設備...但是由於和哥哥離得太遠，所以總是想偷懶...呵呵...看樣子呵呵看不見，所以還可以再玩一會~");
        cm.dispose();
        return;
    }
    cm.sendNext("呀...那不是我哥的信件嘛，這次是不是嘮叨我不幹活、偷懶的內容啊...啊？啊哈~你是聽我哥的話，一邊訓練寵物，一邊來到這裡的嗎？好耶！來得不容易，我就給你提高和寵物的親密度吧！\r\n\r\n#fUI/UIWindow.img/QuestIcon/9/0# #v3994120#");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getPet(0) == null) {
            cm.sendOk("哦...你不是和寵物一起來的呀？這是為了寵物設置的障礙物，連寵物都沒有，你來這裡幹什麼，趕緊回去吧~！");
            cm.dispose();
            return;
        }
        cm.gainItem(4031128, -1);
        cm.gainClosenessAll(close[parseInt(Math.random() * close.length)]);
        cm.sendOk("感覺怎麼樣，你不覺得你和你的寵物關係更親密了嗎？如果你有時間，請繼續在這條障礙道上訓練你的寵物……當然，事先要得到我哥哥的許可。");
    }
    cm.dispose();
}
