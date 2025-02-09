/*
     名字：不合身的馬鞍
     地图：動物園
     描述：230000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendSimple("主人……呃……\r\n#L0##b怎麼了？哪裡不舒服嗎？#l");
            break;
        case 1:
            qm.sendSimple("呃，我……呃呃呃……喘不過氣來……\r\n#L0##b喘不過氣來？為什麼？是生長出現了異常嗎？#l");
            break;
        case 2:
            qm.sendSimple("不，不是的，呃呃呃……\r\n#L0##b那是什麼？快告訴我！#l");
            break;
        case 3:
            qm.sendSimple("馬鞍太緊了！\r\n#L0##b……嗯？#l");
            break;
        case 4:
            qm.sendSimple("呃呃，翅膀都動不了了！這個馬鞍太小了！和我的身體不配！這個樣子的話，你是沒辦法騎的！\r\n#L0##b是，是嗎？那怎麼辦？#l");
            break;
        case 5:
            qm.sendAcceptDecline("需要新的馬鞍~主人，請你到之前為你製作馬鞍的坎特那裡去，讓他幫你製作新的馬鞍。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(22406).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
