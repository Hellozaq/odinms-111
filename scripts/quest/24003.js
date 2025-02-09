/*
     名字：和平的音樂
     地图：櫻花處
     描述：910150001
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
            var text = "啟動音樂盒，讓音樂響起來吧。#b"
            for (var i = 0; i < songs.length; i++) {
                text += "\r\n#L" + i + "#" + songs[i][0] + "#l";
            }
            qm.sendNext(text);
            break;
        case 1:
            qm.sendPrev("#b(想起了和村裡冰冷的氣息不相稱的和平的音樂，希望孩子們能做個好夢……)");
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange(songs[selection][1], 6));
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24003).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getShowQuestCompletion(24000));
            qm.dispose();
    }
}

var songs = [
    ["RisingStar", "BgmEvent2.img/risingStar"],
    ["MoonlightShadow", "Bgm01/MoonlightShadow"],
    ["When the morning comes", "BgmJp/WhenTheMorningComes"],
    ["Flying In A Blue Dream", "Bgm06/FlyingInABlueDream"],
    ["Fantasia", "Bgm07/Fantasia"],
    ["FairyTalediffvers", "Bgm09/FairyTalediffvers"],
    ["Minar'sDream", "Bgm13/Minar'sDream"],
    ["ElinForest", "Bgm15/ElinForest"],
    ["TimeTemple", "Bgm16/TimeTemple"],
    ["QueensGarden", "Bgm18/QueensGarden"]
];
