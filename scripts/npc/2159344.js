/*
     名字：J
     地图：治療室
     描述：931050030
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.sendNextS("嗯……", 3);
            break;
        case 1:
            cm.sendNextS("這裡……是陌生的房間。不是剛才的地方了，哦……呃……全身都很疼。)", 3);
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 600));
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.sendNextS("(看了一下，雖然是個陌生的地方，但好像是治療室……這是什麼地方？我怎麼會在這裡？)", 3);
            break;
        case 4:
            cm.sendNextS("(先來整理一下情況。)", 3);
            break;
        case 5:
            cm.sendNextS("(黑魔法師違背了和我的約定，破壞了媽媽德米安生活的艾納斯大陸南部地區。故鄉只剩下一片廢墟……到底為什麼……)", 3);
            break;
        case 6:
            cm.sendNextS("(吊墜！吊墜到哪里去了？)", 3);
            break;
        case 7:
            cm.sendNextS("(是在戰鬥的時候弄丟了嗎？和家人有關的東西一個都沒有留下……呃……)", 3);
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 600));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.sendNextS("(為了向黑魔法師復仇而來到時間神殿的時候……中途派出了莫斯提馬。如果他還在那裡的話，一定被其他軍團長殺死了……雖然有阿卡伊農的妨礙，但是很快就擊敗了他……他那時好像說英雄們來了？)", 3);
            break;
        case 10:
            cm.sendNextS("(黑魔法師果然很強。還以為只要拼了命，一定可以給他造成一點傷害呢……最後只是打破了他的保護魔法，碰到了一點衣角而已……雖然一開始就沒有期待能把他殺掉……)", 3);
            break;
        case 11:
            cm.sendNextS("(但是我為什麼還活著呢……？背叛黑魔法師的部下，應該沒理由能活下來啊……中間有其他人的介入嗎？難道是那些英雄……？)", 3);
            break;
        case 12:
            cm.sendNextS("(啊……頭好疼。光是推測好像什麼都不能確定……我連這是什麼地方都不知道。在全部被毀掉的楓之谷世界竟然有這種地方，真讓人吃驚。而且那些東西……看上去很陌生。)", 3);
            break;
        case 13:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 600));
            break;
        case 14:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.sendNextS("(先檢查一下自己的狀態吧……雖然不知道怎麼回事，但是要想應對目前的情況，必須要有力量……還剩下多少精氣呢？)", 3);
            break;
        case 15:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/13", 1000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 16:
            cm.sendNextS("(……該死！精氣幾乎沒有了……！看看縮小的精氣盾，就知道自己的身體狀態怎麼樣了。幾乎所有能力都消失了。沒有受任何傷，竟然會變得這麼弱……這到底是怎麼回事？)", 3);
            break;
        case 17:
            cm.sendNextS("(變得這麼弱，要是遇到敵人的話，該怎麼辦呢？那個戴著帽子的男人……雖然好像不是敵人，但不知道是什麼人……)", 3);
            break;
        case 18:
            cm.sendNextS("(呼……要想恢復力量，看來得花上一段時間了。光這樣待著也沒用……不如去活動一下吧。)", 3);
            break;
        case 19:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3000));
            break;
        case 20:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 21:
            cm.sendNextS("(好像聽到了什麼聲音……)", 3);
            break;
        case 22:
            cm.sendNextS("在發電廠看到好像是能量傳送裝置的東西和一個蛋連接在一起之後，我打算回來，因為至少他們不會再吸收埃德爾斯坦的能量了。但是就在那時候，那個人打碎了蛋，沖出來把黑色翅膀全部幹掉了。", 1);
            break;
        case 23:
            cm.sendNextS("老實說，J，要不是你說的話，我根本不會相信這種荒唐的事。黑色翅膀到底在幹什麼呢？而且那個人……背上長著翅膀，好像不是普通人。", 5, 2159315);
            break;
        case 24:
            cm.sendNextS("(……是在說我嗎？)", 3);
            break;
        case 25:
            cm.sendNextS("那個人用的技能我還是第一次看到。非常強……老實說，如果不是因為他力量變弱，可以壓制住他，我是不會把他帶回來的。也許會很危險。", 1);
            break;
        case 26:
            cm.sendNextS("難道是實驗體……？斐勒不也是這樣嗎？誰也不知道黑色翅膀在礦山深處做什麼實驗。如果是瘋子科學家傑利麥勒製造出來的實驗體，那他也是受害者。", 5, 2159312);
            break;
        case 27:
            cm.sendNextS("可惡的傑利麥勒……我一定要把他幹掉！", 5, 2159314);
            break;
        case 28:
            cm.sendNextS("她差不多也該醒來了。應該去看一看。", 1);
            break;
        case 29:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 30:
            cm.spawnNPCRequestController(2159344, -600, -20, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 30));
            break;
        case 31:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getNPCDirectionEffect(2159344, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 32:
            cm.sendNextS("起來啦。身體還好嗎？你的臉色還是很不好……", 1);
            break;
        case 33:
            cm.sendNextS("……是你救了我嗎？", 3);
            break;
        case 34:
            cm.sendNextS("我總不能把倒下的人留在黑色翅膀那裡吧？從情況來看，我們之間的利害關係好像是一致的。你好像有很多話要說……跟我們一起走吧。", 1);
            break;
        case 35:
            cm.sendNextS("(審問……？收買……？還不知道。至少比剛醒來時看到的那群叫黑色翅膀的傢伙要好……)好的。", 3);
            break;
        case 36:
            cm.dispose();
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159344));
            cm.getPlayer().changeMap(cm.getMap(931050010), cm.getMap(931050010).getPortal(0));
    }
}
