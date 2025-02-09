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
importPackage(Packages.server.maps);

status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0 && status == 4)
            status -= 2;
        else {
            cm.dispose();
            return;
        }
    }
    if (cm.getPlayer().getMapId() == 800000000) {
        if (status == 0)
            cm.sendSimple("旅行怎么样？你喜欢吗？#b\r\n#L0#是的，我旅行完了。我能回到#m" + cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR) + "#吗？\r\n#L1#不，我想继续探索这个地方。");
        else if (status == 1) {
            if (selection == 0) {
                cm.sendNext("好的，我带你回到之前的地方。如果你想再去旅行，请告诉我！");
            } else if (selection == 1) {
                cm.sendOk("好的。如果你改变主意，请告诉我。");
                cm.dispose();
            }
        } else if (status == 2) {
            var map = cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR);
            if (map == undefined)
                map = 104000000;
            cm.warp(map, parseInt(Math.random() * 5));
            cm.dispose();
        }
    } else {
        if (status == 0)
            cm.sendNext("为了从繁忙的日常中解脱，去享受一趟旅游怎么样？不仅可以\r\n体验新颖的异国文化，还能学到不少东西的机会！我们冒险岛\r\n旅游公司为您准备了，丰富有趣的#b世界旅游#k套餐。谁说环游世\r\n界很贵？请放一万个心。我们的#b冒险岛世界旅游套餐#k只需要#b30\r\n00金币#k就可以享受全过程。");
        else if (status == 1)
            cm.sendSimple("我们目前为您提供这个旅行愉快的地方：#b日本古代神社#k。我会\r\n在那里为你当导游。请放心，目的地的数量会随着时间的推移\r\n而增加。现在，你想去古代神社吗？#b\r\n#L0#日本古代神社");
            //else if (status == 2)
        //cm.sendNext("Would you like to travel to #bMushroom Shrine of Japan#k? If you desire to feel the essence of Japan, there's nothing like visiting the Shrine, a Japanese cultural melting pot. Mushroom Shrine is a mythical place that serves the incomparable Mushroom God from ancient times.");
        else if (status == 2) {
            if (cm.getMeso() < 3000) {
                cm.sendNext("你没有足够的金币去旅行。");
                cm.dispose();
                return;
            }
            cm.sendNextPrev("现在，让我们去往#b古代神社#k，一个神话般的地方游览一番。在\r\n这个旅游地我都会为大家提供满意热诚的服务。那么请准备好\r\n，我们出发去。");
        } else if (status == 3) {
            cm.gainMeso(-3000);
            cm.getPlayer().saveLocation(SavedLocationType.WORLDTOUR);
            cm.warp(800000000);
            cm.dispose();
        }
    }
}
