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
 * @author Moogra
 */
function enter(pi) {
    var mapid = pi.getPlayer().getMapId();
    //pi.playPortalSound();
    pi.playPortalSE()
    var map = (mapid - 270010000) / 100;
    //pi.getPlayer().dropMessage(5, map + " " + pi.getQuestStatus(3534));
    if (map < 5 && pi.getQuestStatus(3500 + map)) {
        pi.warp(mapid + 10, "out00");
    } else if (map == 5 && pi.getQuestStatus(3502 + map)) {
        pi.warp(270020000, "out00");
    } else if (map > 100 && map < 105 && pi.getQuestStatus(3407 + map)) {
        pi.warp(mapid + 10, "out00");
    } else if (map == 105 && pi.getQuestStatus(3514)) {
        pi.warp(270030000, "out00");
    } else if (map > 200 && map < 205 && pi.getQuestStatus(3314 + map)) {
        pi.warp(mapid + 10, "out00");
    } else if (map == 205 && pi.getQuestStatus(3519)) {
        pi.warp(270040000, "out00");
    } else if (map == 300 && (pi.haveItem(4032002) || pi.getQuestStatus(3522))) {
        pi.warp(270040100, "out00");
    } else {
        if (map > 200) {
            pi.playerMessage(5, "未经许可的人不得违抗神殿的意志，你被传送到了燃烧的过去。");
            pi.warp(270030000, "in00");
        } else if (map > 100) {
            pi.playerMessage(5, "未经许可的人不得违抗神殿的意志，你被传送到了冻结的过去。");
            pi.warp(270020000, "in00");
        } else {
            pi.playerMessage(5, "未经许可的人不得违抗神殿的意志，你被传送到了神录的过去。");
            pi.warp(270010000, "in00");
        }
    }
    return true;
}
