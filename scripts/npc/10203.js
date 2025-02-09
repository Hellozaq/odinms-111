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
var status = -1;

function start() {
    cm.sendNext("飞侠是讲究运气，敏捷性和力量的职业。可以在战场上使用奇\r\n袭或藏身等特殊招数。操纵拥有强大机动力和回避率的飞侠，\r\n体验其中的乐趣吧。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0) {
            cm.sendNext("你想体验一下飞侠职业的话，请再来找我吧。");
        }
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("怎么样，想要体验一下飞侠吗？");
    } else if (status == 1) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020400, 0);
        cm.dispose();
    }
}
