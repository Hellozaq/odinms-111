/*
     名字：墮落城市探訪調查：內拉
     地图：墮落城市
     描述：103000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 8) {
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
            qm.sendSimple("嗯？我好像見過你，你到墮落城市來有什麼事嗎？你想成為盜賊嗎？\r\n#L0##b詢問有沒有見到一個身上帶藥味的人。#l");
            break;
        case 1:
            qm.sendSimple("藥味？嗯，有人會在身上帶著藥草嗎？大家不都帶藥水嗎？你為什麼要找他，想買藥草嗎？\r\n#L0##b說明#p1061005#的事情。#l");
            break;
        case 2:
            qm.sendSimple("嗯……是偷藥草的人啊，怪不得你會那樣問我……嗯？等等等等等等！你認為小偷是墮落城市的嗎？\r\n#L0##b墮落城市不是小偷的村莊嗎？#l");
            break;
        case 3:
            qm.sendSimple("我們不是小偷！我們是盜賊的村莊！啊，氣死了！你把我們墮落城市的盜賊當成什麼了？當然，盜賊們確實有點卑鄙、有點無恥、有點下流、有點陰險！但是我們絕不會威脅到別人的生計，絕不會去偷東西！\r\n#L0##b真的嗎？#l");
            break;
        case 4:
            qm.sendSimple("那當然！我知道人們一直都對我們有誤會，但沒想到會聽到這種話……我是在墮落城市出生並長大的人，決不能忍受這種侮辱！罪犯絕不可能是墮落城市的人！絕對！\r\n#L0##b是，是嗎？ 那小偷會在哪裡呢？#l");
            break;
        case 5:
            qm.sendSimple("我也不知道！不過，他居然敢嫁禍給墮落城市，這點我絕不能原諒，那個小偷！我要親自找出那個偷走薩比特拉瑪的藥草的小偷！幫墮落城市洗清冤屈，重拾名譽！你明白了嗎？我來親自找出那個小偷！\r\n#L0##b需要一起調查嗎？#l");
            break;
        case 6:
            qm.sendSimple("從現在開始，我會對那個小偷進行調查，你乖乖在這裡等著。調查結果出來後，我會聯系你的，我一定會把小偷抓住！\r\n#L0##b那我需要做什麼？#l");
            break;
        case 7:
            qm.sendAcceptDecline("恩？！你問在調查的期間你做什麼？你就好好練級！目標就定在大概#b45級#k左右，怎麼樣？");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(22536).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
