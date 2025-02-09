/*
     名字：提酷
     地图：開始之森林1
     描述：130030000
 */

function start() {
    var chat = "有的基本知識你必須要瞭解，你想要知道那些？#b";
    chat += "\r\n#L1#小地圖介紹";
    chat += "\r\n#L2#如何打開任務視窗";
    chat += "\r\n#L3#如何打開道具欄";
    chat += "\r\n#L4#如何攻擊";
    chat += "\r\n#L5#如何撿道具";
    chat += "\r\n#L6#如何穿裝備";
    chat += "\r\n#L7#技能視窗";
    chat += "\r\n#L8#如何把技能放到快捷鍵上";
    chat += "\r\n#L9#如何打破箱子";
    chat += "\r\n#L10#如何坐椅子";
    chat += "\r\n#L11#如何查看世界地圖";
    chat += "\r\n#L12#開啟任務自動提示窗";
    chat += "\r\n#L13#角色的能力點是？";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(selection));
    cm.dispose();
}
