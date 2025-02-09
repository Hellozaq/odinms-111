/*
     名字：尋找鑰匙
     地图：亞泰爾營地
     描述：300000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 2 || status > 4) {
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
            qm.sendSimple("…啊，你是狂狼勇士？！還活著啊？！也是哦！戰士的驕傲，最強的矛的大人，你不會那麼容易被黑魔法師打敗的！\r\n#L0##b(…被打敗了。)#l");
            break;
        case 1:
            qm.sendSimple("有什麼事情嗎？你也是為了建設新的村莊而來的嗎？那種容易的事情是不是應該交給別人，你做適合你的事情就可以了？\r\n#L0##b來拿#t4032325#的。#l");
            break;
        case 2:
            qm.sendNextPrev("啊…是#t4032325#嗎？稍等一下，放在哪裡去了…");
            break;
        case 3:
            qm.sendNextPrev("……真不好意思，狂狼勇士。真不知道該怎麼跟你說才好。明明剛才是放在這裡的……似乎是和其它鑰匙一起不見了。全都是我的錯。粗心大意地給弄丟了！");
            break;
        case 4:
            qm.sendNextPrev("不過不用擔心！鑰匙肯定在附近野猿人肥肥們的身上！只要教訓教訓那些傢夥，把鑰匙找回來就行！保管庫的鑰匙是10把鑰匙中的一個，必須把#b10把鑰匙#k全都找回來確認！");
            break;
        case 5:
            qm.sendAcceptDecline("要現在過去野猿人肥肥們出現的地方嗎？請讓大家見識一下最強戰士的您的能力吧……");
            break;
        case 6:
            if (qm.getMap(930010001).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21752).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(930010001).resetFully();
                qm.getPlayer().changeMap(qm.getMap(930010001), qm.getMap(930010001).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(300000000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險的石山目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
