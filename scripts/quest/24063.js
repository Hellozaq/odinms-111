/*
     名字：丹妮卡的呼喚
     地图：櫻花處
     描述：101050000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("精靈遊俠！精靈遊俠！我想見你！嗚嗚～雖然我裝得很坦然，但我一直害怕我們再也不能見面了！");
            break;
        case 1:
            qm.sendNextPrevS("你身體沒事吧，#p1033101#？");
            break;
        case 2:
            qm.sendNextPrev("是的！沒事！就身體而言，我自信比任何精靈都要強壯！雖然沒有自信能像以前那樣使用技能，但是沒有不舒服的地方！");
            break;
        case 3:
            qm.sendNextPrevS("太好了……");
            break;
        case 4:
            qm.sendNextPrev("當然啦！很棒吧！獨自生活在已經歷經數百年時間的世界！那是多麼苦悶的事情啊！嗚哇！");
            break;
        case 5:
            qm.sendNextPrev("抽泣，雖然丹妮卡很想和你一起去，但是我還沒有多少力氣。跟著你的話，會妨礙到你的，現在我想重新修煉。精靈遊俠？要是我在這種情况下妨礙你的話，菲利屋司哥哥一定會罵我的。");
            break;
        case 6:
            qm.sendPrev("我會先留在村子裏，努力恢復力量，我决心不妨礙你的修煉！不過#b你也必須努力修煉，讓其他人快點醒來哦#k！");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(24063).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
