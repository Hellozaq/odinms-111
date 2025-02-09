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

/* Author: Xterminator
NPC Name: 		Trainer Frod
Map(s): 		Victoria Road : Pet-Walking Road (100000202)
Description: 		Pet Trainer
 */

function start() {
    if (cm.haveItem(4031035)) {
        cm.sendNext("哎哟~那是我哥哥的信吧！他又怪我不工作贪玩了吧？嗯？啊\r\n~你按我哥说的，一路上带着宠物一起上来的吗？好！你这么\r\n辛苦的上来了，我给你提高你跟宠物之间的亲密度.");
    } else {
        cm.sendOk("我哥哥在下面似乎有事找我，你能帮忙带个话吗？");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        if (cm.getPlayer().getPet(0) == null) {
            cm.sendNextPrev("嗯？！你的宠物在哪儿？这是为宠物准备的障碍！你没有宠物\r\n为什么来这儿？快回去吧！");
        } else {
            cm.gainItem(4031035, -1);
            //cm.getPlayer().getPet(0).gainClosenessFullness(cm.getPlayer(),2, 0, 0);
            cm.gainClosenessAll(2);
            cm.sendNextPrev("怎么样？是不是觉得宠物和你更亲密了！");
        }
        cm.dispose();
    }
}
