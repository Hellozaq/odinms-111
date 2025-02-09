/*
	名字:	邱翁
	地圖:	海盜船境地
	描述:	251010404
*/

function start() {
    var chat = "#e<組隊任務：海盜船>#n \r\n\r\n我是侍奉桔梗之王雨揚的僕人。看到藥草田裡的桔梗們了嗎？現在都變成了殘暴的怪物正在攻擊無辜的人們。可是那並不是我們桔梗們的本意。這都是因為邪惡的老海盜。\r\n\r\n Number of players: 2~6 \r\n Level range: 70~119 \r\n Time limit: 20minutes\r\n#b";
    chat += "\r\n#L0#進入任務地圖";
    chat += "\r\n#L1#我想知道更多細節";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("如果妳想執行這項任務，請告訴妳的組長與我談話。");
                cm.dispose();
                return;
            }
            var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 70~119 \r\n\r\n";
            var chenhui = 0;
            var party = cm.getPlayer().getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if (party.get(i).getLevel() < 70 || party.get(i).getLevel() > 119 || party.get(i).getMapid() != 251010404 || party.size() < 2) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Pirate");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.dispose();
                return;
            }
            cm.sendOk("海盜船任務任務正在執行中，請嘗試其它頻道。");
            break;
        case 1:
            cm.sendOk("老海盜劫持了桔梗們的大王雨揚，肆意的使喚著我們。我們桔梗因為得顧及雨揚的生命安全，所以不得不屈服於它的命令。拜託你一定要把雨揚從邪惡的老海盜手裡救出來啊。唯有那樣，才能為我們桔梗和靈藥幻境找回和平。老海盜和雨揚所乘坐的海盜船馬上就要出發了！趕快搭上最東邊的船吧！");
    }
    cm.dispose();
}