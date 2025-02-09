/*
     名字：密碼認證
     地图：閒人勿入
     描述：261020401
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
                qm.sendOk("快點，快點，如果你不那麼聰明就把#b紙和筆#k拿出來。");
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
            qm.sendNext("哦！你終於來了！我很高興你能及時來，我有萬能鑰匙給你打開#b秘密通道#k！哈哈哈！這不是很神奇嗎？說得太棒了！");
            break;
        case 1:
            qm.sendAcceptDecline("好吧，這把鑰匙密碼很長很複雜，我需要你把它背得很好，我不會再說了，所以你最好把它寫在什麼地方，你準備好了嗎？");
            break;
        case 2:
            pass = generateString();
            qm.sendNext("把密碼輸入到秘密通道的門裡，你就可以在通道裏自由走動了，明白了嗎？\r\n\r\n密碼：#b" + pass + "#k");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3360).forceStart(qm.getPlayer(), qm.getNpc(), pass);
            qm.dispose();
    }
}

function generateString() {
    var thestring = "";
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rnum;
    for (var i = 0; i < 10; i++) {
        rnum = Math.floor(Math.random() * chars.length);
        thestring += chars.substring(rnum, rnum + 1);
    }
    return thestring;
}
