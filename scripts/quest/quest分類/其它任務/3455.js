/*
     名字：陷入危機的葛雷
     地图：克嵐草原Ⅱ
     描述：221040100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 5) {
                qm.dispose();
                return;
            }
            if (status < 6) {
                qm.sendOk("不想參加是嗎，真是可惜啊，那就再來找我了。");
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
            qm.sendSimple("又，又來了嗎，人類朋友。見到你我雖然很高興，但是現在沒有時間和你談話，有什麼事能不能以後再談呢？\r\n#L0##b(啟動超音波解讀機。)#l");
            break;
        case 1:
            qm.sendSimple("問有關葛雷金剛的事的話，我是無話可說。因為葛雷金剛是元老們管理的所以我一無所知。（口味越來越和人類的口味接近了，不，不只是口味而已，所有的方面都越來越像人類了，真是不好的現象啊。）\r\n#L0##b(超音波解讀機運轉中)#l");
            break;
        case 2:
            qm.sendSimple("我說人類朋友你是怎麼啦？你不會是給地球防禦本部的偽君子效力吧？（就連審美觀也越來越偏向人類的審美觀了。人類中長得最帥的應該是M，不會有錯的。）\r\n#L0##b(超音波解讀機運轉中)#l");
            break;
        case 3:
            qm.sendSimple("葛雷老們一點都沒有要傷害人類的意思。反而想親近人類。你不是也知道的嗎？（這種想法還是放棄吧！這是要是讓葛雷王子知道了，肯定會大發雷霆的！）\r\n#L0##b(超音波解讀機運轉中)#l");
            break;
        case 4:
            qm.sendSimple("對葛雷的控制不要感到害怕。葛雷是站在人類這邊的。引領人類走向偉大之路的存在，那就是葛雷。（比起那個，還是先想想建設性的東西吧。比如葛雷外套清晰，或是宇宙食量乾燥…都快有濕疹了。）\r\n#L0##b(超音波解讀機運轉中)#l");
            break;
        case 5:
            qm.sendAcceptDecline("那…現在有沒有興趣和葛雷合作啊？");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(3455).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
