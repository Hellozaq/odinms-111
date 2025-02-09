/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation version 3 as published by
the Free Software Foundation. You may not use, modify or distribute
this program under any other version of the GNU Affero General Public
License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
-- Odin JavaScript --------------------------------------------------------------------------------
Camel Cab - Magatia (GMS Like)
-- Version Info -----------------------------------------------------------------------------------
1.3 - Actually fixed by Alan (SharpAceX)
1.2 - Fixed and recoded by Moogra
1.1 - Shortened by Moogra
1.0 - First Version by Maple4U - who stepped up and coded first version of several Magatia NPCs
---------------------------------------------------------------------------------------------------
 */

var toMagatia = "你想乘坐#b骆驼#k去#b玛加提亚#k，炼金术之城？费用是#b1500金币#k。";
var toAriant = "你想乘坐#b骆驼#k去#b阿里安特#k，尼哈沙漠？费用是#b1500金币#k。";

function start() {
    cm.sendYesNo(cm.getPlayer().getMapId() == 260020000 ? toMagatia : toAriant);
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.getMeso() < 1500) {
            cm.sendNext("我很抱歉，如果你没有足够的钱，恐怕我不能让你骑这个。当你有足够的钱用这个的时候再来吧。");
            cm.dispose();
        } else {
            cm.warp(cm.getPlayer().getMapId() == 260020000 ? 261000000 : 260000000, 0);
            cm.gainMeso(-1500);
            cm.dispose();
        }
    } else if (mode == 0) {
        cm.sendNext("嗯...太忙了，现在不能坐吗？如果你想坐，尽管回来找我。");
    }
    cm.dispose();
}
