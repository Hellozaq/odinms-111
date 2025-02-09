/*
     名字：音樂盒
     地图：櫻花處
     描述：101050000
 */

var songs = [["RisingStar", "BgmEvent2.img/risingStar"], ["MoonlightShadow", "Bgm01/MoonlightShadow"], ["When the morning comes", "BgmJp/WhenTheMorningComes"], ["Flying In A Blue Dream", "Bgm06/FlyingInABlueDream"], ["Fantasia", "Bgm07/Fantasia"], ["FairyTalediffvers", "Bgm09/FairyTalediffvers"], ["Minar'sDream", "Bgm13/Minar'sDream"], ["ElinForest", "Bgm15/ElinForest"], ["TimeTemple", "Bgm16/TimeTemple"], ["QueensGarden", "Bgm18/QueensGarden"]];

function start() {
    var chat = "一種美麗的花形音樂盒，可以播放各種音樂。#b";
    for (var i = 0; i < songs.length; i++)
        chat += "\r\n#L" + i + "#" + songs[i][0] + "#l";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24101)).getStatus() == 1)
            Packages.server.quest.MapleQuest.getInstance(24103).forceStart(cm.getPlayer(), 0, 1);
        cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange(songs[selection][1], 6));
    }
    cm.dispose();
}
