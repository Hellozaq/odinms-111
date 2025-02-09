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
    cm.sendNext("海盗以出色的敏捷性或力里为基础，向敌人发射百发百中的子\r\n弹，或是使用瞬间压制敌人的体术。火枪手则快速发射子弹，\r\n给敌人施以猛烈攻击，且能够使用多种召唤术。拳手拥有强大\r\n的格斗技能，以及使用水龙技能的体术。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0) {
            cm.sendNext("你想体验一下海盗职业的话，请再来找我吧。");
        }
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("怎么样，想要体验一下海盗吗？");
    } else if (status == 1) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020500, 0);
        cm.dispose();
    }
}
