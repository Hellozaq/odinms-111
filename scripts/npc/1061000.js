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
/* Chrishrama
Dungeon: Sleepywood (105040300)

Refining NPC:
 * Shoes - All classes, 25 (20 for magicians)-60
 */

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;

function start() {
    //cm.getPlayer().setCS(true);
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }
    if (status == 0 && mode == 1) {
        var selStr = "你好，我住在这里，但不要低估我。我帮你做一双新鞋怎么样？#b"
        var options = ["制作战士鞋子", "制作弓箭手鞋子", "制作法师鞋子", "制作飞侠鞋子"];
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        var selStr;
        var shoes;
        if (selectedType == 0) { //warrior shoe
            selStr = "你想要做什么鞋子？#b";
            shoes = ["银战斗鞋#k - 战士 Lv. 25#b", "金战斗鞋#k - 战士 Lv. 25#b", "黑战斗鞋#k - 战士 Lv. 25#b",
                "绿斗士鞋#k - 战士 Lv. 30#b", "蓝斗士鞋#k - 战士 Lv. 30#b", "银斗士鞋#k - 战士 Lv. 30#b", "红斗士鞋#k - 战士 Lv. 30#b",
                "铁头皮鞋#k - 战士 Lv. 35#b", "蓝铁头鞋#k - 战士 Lv. 35#b", "黑铁头鞋#k - 战士 Lv. 35#b",
                "黄金月长靴#k - 战士 Lv. 40#b", "紫金月鞋#k - 战士 Lv. 40#b", "蓝金月鞋#k - 战士 Lv. 40#b",
                "祖母绿将军靴#k - 战士 Lv. 50#b", "锂矿蓝将军靴#k - 战士 Lv. 50#b", "紫矿将军靴#k - 战士 Lv. 50#b", "黄金将军靴#k - 战士 Lv. 50#b",
                "蓝十字鞋#k - 战士 Lv. 60#b", "紫十字鞋#k - 战士 Lv. 60#b", "红十字鞋#k - 战士 Lv. 60#b"];

        } else if (selectedType == 1) { //bowman shoe
            selStr = "你想要做什么鞋子？#b";
            shoes = ["#t1072027##k - 弓箭手 Lv. 25#b", "#t1072034##k - 弓箭手 Lv. 25#b", "#t1072069##k - 弓箭手 Lv. 25#b",
                "#t1072079##k - 弓箭手 Lv. 30#b", "#t1072102##k - 弓箭手 Lv. 30#b", "#t1072081##k - 弓箭手 Lv. 30#b", "#t1072082##k - 弓箭手 Lv. 30#b", "#t1072083##k  - 弓箭手 Lv. 30#b",
                "#t1072101##k - 弓箭手 Lv. 35#b", "#t1072102##k - 弓箭手 Lv. 35#b", "#t1072103##k - 弓箭手 Lv. 35#b",
                "#t1072118##k - 弓箭手 Lv. 40#b", "#t1072119##k - 弓箭手 Lv. 40#b", "#t1072120##k - 弓箭手 Lv. 40#b", "#t1072121##k - 弓箭手 Lv. 40#b",
                "#t1072122##k - 弓箭手 Lv. 50#b", "#t1072123##k - 弓箭手 Lv. 50#b", "#t1072124##k - 弓箭手 Lv. 50#b", "#t1072125##k - 弓箭手 Lv. 50#b",
                "#t1072144##k - 弓箭手 Lv. 60#b", "#t1072145##k - 弓箭手 Lv. 60#b", "#t1072146##k - 弓箭手 Lv. 60#b"];
        } else if (selectedType == 2) { //magician shoe
            selStr = "你想要做什么鞋子？#b";
            shoes = ["#t1072019##k - 法师 Lv. 20#b", "#t1072020##k - 法师 Lv. 20#b", "#t1072021##k - 法师 Lv. 20#b",
                "#t1072072##k - 法师 Lv. 25#b", "#t1072073##k - 法师 Lv. 25#b", "#t1072074##k - 法师 Lv. 25#b",
                "#t1072075##k - 法师 Lv. 30#b", "#t1072076##k - 法师 Lv. 30#b", "#t1072077##k - 法师 Lv. 30#b", "#t1072078##k - 法师 Lv. 30#b",
                "#t1072089##k - 法师 Lv. 35#b", "#t1072090##k - 法师 Lv. 35#b", "#t1072091##k - 法师 Lv. 35#b",
                "#t1072114##k - 法师 Lv. 40#b", "#t1072115##k - 法师 Lv. 40#b", "#t1072116##k - 法师 Lv. 40#b", "#t1072117##k - 法师 Lv. 40#b",
                "#t1072140##k - 法师 Lv. 50#b", "#t1072141##k - 法师 Lv. 50#b", "#t1072142##k - 法师 Lv. 50#b", "#t1072143##k - 法师 Lv. 50#b",
                "#t1072136##k - 法师 Lv. 60#b", "#t1072137##k - 法师 Lv. 60#b", "#t1072138##k - 法师 Lv. 60#b", "#t1072139##k - 法师 Lv. 60#b"];
        } else if (selectedType == 3) { //thief shoe
            selStr = "你想要做什么鞋子？#b";
            shoes = ["#t1072084##k - 飞侠 Lv. 25#b", "#t1072085##k - 飞侠 Lv. 25#b", "#t1072086##k - 飞侠 Lv. 25#b", "#t1072087##k - 飞侠 Lv. 25#b",
                "#t1072032##k - 飞侠 Lv. 30#b", "#t1072033##k - 飞侠 Lv. 30#b", "#t1072035##k - 飞侠 Lv. 30#b", "#t1072036##k - 飞侠 Lv. 30#b",
                "#t1072104##k - 飞侠 Lv. 35#b", "#t1072105##k - 飞侠 Lv. 35#b", "#t1072106##k - 飞侠 Lv. 35#b",
                "#t1072107##k - 飞侠 Lv. 40#b", "#t1072108##k - 飞侠 Lv. 40#b", "#t1072109##k - 飞侠 Lv. 40#b", "#t1072110##k - 飞侠 Lv. 40#b",
                "#t1072128##k - 飞侠 Lv. 50#b", "#t1072130##k - 飞侠 Lv. 50#b", "#t1072129##k - 飞侠 Lv. 50#b", "#t1072131##k - 飞侠 Lv. 50#b",
                "#t1072150##k - 飞侠 Lv. 60#b", "#t1072151##k - 飞侠 Lv. 60#b", "#t1072152##k - 飞侠 Lv. 60#b"];
        }
        for (var i = 0; i < shoes.length; i++) {
            selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 0) { //warrior shoe
            var itemSet = [1072051, 1072053, 1072052, 1072003, 1072039, 1072040, 1072041, 1072002, 1072112, 1072113, 1072000, 1072126, 1072127, 1072132, 1072133, 1072134, 1072135, 1072147, 1072148, 1072149];
            var matSet = [[4011004, 4011001, 4000021, 4003000], [4011006, 4011001, 4000021, 4003000], [4021008, 4011001, 4000021, 4003000], [4021003, 4011001, 4000021, 4003000], [4011002, 4011001, 4000021, 4003000],
                [4011004, 4011001, 4000021, 4003000], [4021000, 4011001, 4000021, 4003000], [4011001, 4021004, 4000021, 4000030, 4003000], [4011002, 4021004, 4000021, 4000030, 4003000], [4021008, 4021004, 4000021, 4000030, 4003000],
                [4011003, 4000021, 4000030, 4003000, 4000033], [4011005, 4021007, 4000030, 4003000, 4000042], [4011002, 4021007, 4000030, 4003000, 4000041], [4021008, 4011001, 4021003, 4000030, 4003000],
                [4021008, 4011001, 4011002, 4000030, 4003000], [4021008, 4011001, 4011005, 4000030, 4003000], [4021008, 4011001, 4011006, 4000030, 4003000], [4021008, 4011007, 4021005, 4000030, 4003000],
                [4021008, 4011007, 4011005, 4000030, 4003000], [4021008, 4011007, 4021000, 4000030, 4003000]];
            var matQtySet = [[2, 1, 15, 10], [2, 1, 15, 10], [1, 2, 20, 10], [4, 2, 45, 15], [4, 2, 45, 15], [4, 2, 45, 15], [4, 2, 45, 15], [3, 1, 30, 20, 25], [3, 1, 30, 20, 25], [2, 1, 30, 20, 25],
                [4, 100, 40, 30, 100], [4, 1, 40, 30, 250], [4, 1, 40, 30, 120], [1, 3, 6, 65, 45], [1, 3, 6, 65, 45], [1, 3, 6, 65, 45], [1, 3, 6, 65, 45], [1, 1, 8, 80, 55], [1, 1, 8, 80, 55], [1, 1, 8, 80, 55]];
            var costSet = [10000, 10000, 12000, 20000, 20000, 20000, 20000, 22000, 22000, 25000, 38000, 38000, 38000, 50000, 50000, 50000, 50000, 60000, 60000, 60000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //bowman shoe
            var itemSet = [1072027, 1072034, 1072069, 1072079, 1072080, 1072081, 1072082, 1072083, 1072101, 1072102, 1072103, 1072118, 1072119, 1072120, 1072121, 1072122, 1072123, 1072124, 1072125, 1072144, 1072145, 1072146];
            var matSet = [[4000021, 4011000, 4003000], [4000021, 4021003, 4003000], [4000021, 4021000, 4003000], [4000021, 4021000, 4003000], [4000021, 4021005, 4003000], [4000021, 4021003, 4003000],
                [4000021, 4021004, 4003000], [4000021, 4021006, 4003000], [4021002, 4021006, 4000030, 4000021, 4003000], [4021003, 4021006, 4000030, 4000021, 4003000], [4021000, 4021006, 4000030, 4000021, 4003000],
                [4021000, 4003000, 4000030, 4000024], [4021006, 4003000, 4000030, 4000027], [4011003, 4003000, 4000030, 4000044], [4021002, 4003000, 4000030, 4000009], [4011001, 4021006, 4021008, 4000030, 4003000, 4000033],
                [4011001, 4021006, 4021008, 4000030, 4003000, 4000032], [4011001, 4021006, 4021008, 4000030, 4003000, 4000041], [4011001, 4021006, 4021008, 4000030, 4003000, 4000042], [4011006, 4021000, 4021007, 4000030, 4003000],
                [4011006, 4021005, 4021007, 4000030, 4003000], [4011006, 4021003, 4021007, 4000030, 4003000]];
            var matQtySet = [[35, 3, 10], [35, 1, 10], [35, 1, 10], [50, 2, 15], [50, 2, 15], [50, 2, 15], [50, 2, 15], [50, 2, 15],
                [3, 1, 15, 30, 20], [3, 1, 15, 30, 20], [3, 1, 15, 30, 20], [4, 30, 45, 20], [4, 30, 45, 20], [5, 30, 45, 40], [5, 30, 45, 120],
                [3, 3, 1, 60, 35, 80], [3, 3, 1, 60, 35, 150], [3, 3, 1, 60, 35, 100], [3, 3, 1, 60, 35, 250], [5, 8, 1, 75, 50], [5, 8, 1, 75, 50], [5, 8, 1, 75, 50]];
            var costSet = [9000, 9000, 9000, 19000, 19000, 19000, 19000, 19000, 19000, 20000, 20000, 20000, 32000, 32000, 40000, 40000, 50000, 50000, 50000, 50000, 60000, 60000, 60000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //magician shoe
            var itemSet = [1072019, 1072020, 1072021, 1072072, 1072073, 1072074, 1072075, 1072076, 1072077, 1072078, 1072089, 1072090, 1072091, 1072114, 1072115, 1072116, 1072117, 1072140, 1072141, 1072142, 1072143, 1072136, 1072137, 1072138, 1072139];
            var matSet = [[4021005, 4000021, 4003000], [4021001, 4000021, 4003000], [4021000, 4000021, 4003000], [4011004, 4000021, 4003000], [4021006, 4000021, 4003000], [4021004, 4000021, 4003000],
                [4021000, 4000021, 4003000], [4021002, 4000021, 4003000], [4011004, 4000021, 4003000], [4021008, 4000021, 4003000], [4021001, 4021006, 4000021, 4000030, 4003000], [4021000, 4021006, 4000021, 4000030, 4003000],
                [4021008, 4021006, 4000021, 4000030, 4003000], [4021000, 4000030, 4000043, 4003000], [4021005, 4000030, 4000037, 4003000], [4011006, 4021007, 4000030, 4000027, 4003000], [4021008, 4021007, 4000030, 4000014, 4003000],
                [4021009, 4011006, 4021000, 4000030, 4003000], [4021009, 4011006, 4021005, 4000030, 4003000], [4021009, 4011006, 4021001, 4000030, 4003000], [4021009, 4011006, 4021003, 4000030, 4003000],
                [4021009, 4011006, 4011005, 4000030, 4003000], [4021009, 4011006, 4021003, 4000030, 4003000], [4021009, 4011006, 4011003, 4000030, 4003000], [4021009, 4011006, 4021002, 4000030, 4003000]];
            var matQtySet = [[1, 30, 5], [1, 30, 5], [1, 30, 5], [1, 35, 10], [1, 35, 10], [1, 35, 10], [2, 50, 15], [2, 50, 15], [2, 50, 15],
                [1, 50, 15], [3, 1, 30, 15, 20], [3, 1, 30, 15, 20], [2, 1, 40, 25, 20], [4, 40, 35, 25], [4, 40, 70, 25], [2, 1, 40, 20, 25], [2, 1, 40, 30, 30],
                [1, 3, 3, 60, 40], [1, 3, 3, 60, 40], [1, 3, 3, 60, 40], [1, 3, 3, 60, 40], [1, 4, 5, 70, 50], [1, 4, 5, 70, 50], [1, 4, 5, 70, 50], [1, 4, 5, 70, 50]];
            var costSet = [3000, 3000, 3000, 8000, 8000, 8000, 18000, 18000, 18000, 18000, 20000, 20000, 22000, 30000, 30000, 35000, 40000, 50000, 50000, 50000, 50000, 60000, 60000, 60000, 60000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 3) { //thief shoe
            var itemSet = [1072084, 1072085, 1072086, 1072087, 1072032, 1072033, 1072035, 1072036, 1072104, 1072105, 1072106, 1072107, 1072108, 1072109, 1072110, 1072128, 1072130, 1072129, 1072131, 1072150, 1072151, 1072152];
            var matSet = [[4021005, 4000021, 4003000], [4021000, 4000021, 4003000], [4021003, 4000021, 4003000], [4021004, 4000021, 4003000], [4011000, 4000021, 4003000], [4011001, 4000021, 4003000], [4011004, 4000021, 4003000], [4011006, 4000021, 4003000], [4021000, 4021004, 4000021, 4000030, 4003000], [4021003, 4021004, 4000021, 4000030, 4003000], [4021002, 4021004, 4000021, 4000030, 4003000], [4021000, 4000030, 4000033, 4003000], [4021003, 4000030, 4000032, 4003000], [4021006, 4000030, 4000040, 4003000], [4021005, 4000030, 4000037, 4003000], [4011007, 4021005, 4000030, 4000037, 4003000], [4011007, 4021000, 4000030, 4000043, 4003000], [4011007, 4021003, 4000030, 4000045, 4003000], [4011007, 4021001, 4000030, 4000036, 4003000], [4021008, 4011007, 4021005, 4000030, 4003000], [4021008, 4011007, 4011005, 4000030, 4003000], [4021008, 4011007, 4021000, 4000030, 4003000]];
            var matQtySet = [[1, 35, 10], [1, 35, 10], [1, 35, 10], [1, 35, 10], [3, 50, 15], [3, 50, 15], [2, 50, 15], [2, 50, 15], [3, 1, 30, 15, 20], [3, 1, 30, 15, 20], [3, 1, 30, 15, 20],
                [5, 45, 50, 30], [4, 45, 30, 30], [4, 45, 3, 30], [4, 45, 70, 30], [2, 3, 50, 200, 35], [2, 3, 50, 150, 35], [2, 3, 50, 80, 35], [2, 3, 50, 80, 35], [1, 1, 8, 75, 50], [1, 1, 5, 75, 50], [1, 1, 1, 75, 50]];
            var costSet = [9000, 9000, 9000, 9000, 19000, 19000, 19000, 21000, 20000, 20000, 20000, 40000, 32000, 35000, 35000, 50000, 50000, 50000, 50000, 60000, 60000, 60000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }
        var prompt = "制作前请确认你是否准备好了以下材料。#b";
        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                prompt += "\r\n#i" + mats[i] + "# " + matQty[i] + " #t" + mats[i] + "#";
            }
        } else {
            prompt += "\r\n#i" + mats + "# " + matQty + " #t" + mats + "#";
        }
        if (cost > 0) {
            prompt += "\r\n#i4031138# " + cost + " 金币";
        }
        cm.sendYesNo(prompt);
    } else if (status == 3 && mode == 1) {
        var complete = true;

        if (!cm.canHold(item, 1)) {
            cm.sendOk("首先检查一下你的背包是否有空位。");
            cm.dispose();
            return;
        } else if (cm.getMeso() < cost) {
            cm.sendOk("我只接受金币。");
            cm.dispose();
            return;
        } else {
            if (mats instanceof Array) {
                for (var i = 0; complete && i < mats.length; i++) {
                    if (!cm.haveItem(mats[i], matQty[i])) {
                        complete = false;
                    }
                }
            } else if (!cm.haveItem(mats, matQty)) {
                complete = false;
            }
        }
        if (!complete) {
            cm.sendOk("很抱歉由于你的材料不足，所以我不想帮你做了。");
        } else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i]);
                }
            } else {
                cm.gainItem(mats, -matQty);
            }
            cm.gainMeso(-cost);
            cm.gainItem(item, 1);
            cm.sendOk("好了，鞋子准备好了。小心别绊倒了！");
        }
        cm.dispose();
    }
}
