/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* Ali
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * Zakum Quest NPC Exit
 */

function start() {
    cm.sendNext("你们终于完成了第一阶段任务！好。。。我把你送到有#b阿杜\r\n比斯#k的地方。但是，你不能拿着在这里得到的所有特殊道具\r\n出去。那么再见！");
}

function action(mode, type, selection) {
    cm.warp(211042300, 0);
    cm.removeAll(4001015);
    cm.removeAll(4001016);
    cm.removeAll(4001018);
    cm.dispose();
}
