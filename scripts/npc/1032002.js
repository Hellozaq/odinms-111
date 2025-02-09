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
/* Francois
Victoria Island: Ellinia (101000000)

Refining NPC: (magicians)
 * Gloves
 * Glove Upgrades
 * Hats
 * Wand
 * Staff
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
        var selStr = "今天你想做什么？#b"
        var options = ["制作手套", "手套合成", "帽子合成", "制作短杖", "制作长杖"];
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }

        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0) { //glove refine
            var selStr = "要是你能收集各种材料，我用魔法做给你手套。你想做什么样的手套？#b";
            var items = ["#t1082019##k - 魔法师 Lv. 15#b", "#t1082020##k - 魔法师 Lv. 20#b", "#t1082026##k - 魔法师 Lv. 25#b", "#t1082051##k - 魔法师 Lv. 30#b", "#t1082054##k - 魔法师 Lv. 35#b", "#t1082062##k - 魔法师 Lv. 40#b",
                "#t1082081##k - 魔法师 Lv. 50#b", "#t1082086##k - 魔法师 Lv. 60#b"];
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
        } else if (selectedType == 1) { //glove upgrade
            var selStr = "嗯...你想合成什么样的手套？#b";
            var items = ["#t1082021##k - 魔法师 Lv. 20#b", "#t1082022##k - 魔法师 Lv. 20#b", "#t1082027##k - 魔法师 Lv. 25#b", "#t1082028##k - 魔法师 Lv. 25#b", "#t1082052##k - 魔法师 Lv. 30#b", "#t1082053##k - 魔法师 Lv. 30#b",
                "#t1082055##k - 魔法师 Lv. 35#b", "#t1082056##k - 魔法师 Lv. 35#b", "#t1082063##k - 魔法师 Lv. 40#b", "#t1082064##k - 魔法师 Lv. 40#b", "#t1082082##k - 魔法师 Lv. 50#b", "#t1082080##k - 魔法师 Lv. 50#b",
                "#t1082087##k - 魔法师 Lv. 60#b", "#t1082088##k - 魔法师 Lv. 60#b"];
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
        } else if (selectedType == 2) { //hat upgrade
            var selStr = "嗯...你想合成什么样的帽子？#b";
            var items = ["#t1002065##k - 魔法师 Lv. 30#b", "#t1002013##k - 魔法师 Lv. 30#b"];
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
        } else if (selectedType == 3) { //wand refine
            var selStr = "要是你能收集各种材料，我用魔法做给你短杖。你想做什么样的短杖？#b";
            var items = ["#t1372005##k - 全职业 Lv. 8#b", "#t1372006##k - 全职业 Lv. 13#b", "#t1372002##k - 全职业 Lv. 18#b", "#t1372004##k - 魔法师 Lv. 23#b", "#t1372003##k - 魔法师 Lv. 28#b",
                "#t1372001##k - 魔法师 Lv. 33#b", "#t1372000##k - 魔法师 Lv. 38#b", "#t1372007##k - 魔法师 Lv. 48#b"];
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
        } else if (selectedType == 4) { //staff refine
            var selStr = "要是你能收集各种材料，我用魔法做给你长杖。你想做什么样的长杖？#b";
            var items = ["#t1382000##k - 魔法师 Lv. 10#b", "#t1382003##k - 魔法师 Lv. 15#b", "#t1382005##k - 魔法师 Lv. 15#b", "#t1382004##k - 魔法师 Lv. 20#b", "#t1382002##k - 魔法师 Lv. 25#b",
                "#t1382001##k - 魔法师 Lv. 45#b"];
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
        }
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;

        if (selectedType == 0) { //glove refine
            var itemSet = [1082019, 1082020, 1082026, 1082051, 1082054, 1082062, 1082081, 1082086];
            var matSet = [4000021, [4000021, 4011001], [4000021, 4011006], [4000021, 4021006, 4021000], [4000021, 4011006, 4011001, 4021000],
                [4000021, 4021000, 4021006, 4003000], [4021000, 4011006, 4000030, 4003000], [4011007, 4011001, 4021007, 4000030, 4003000]];
            var matQtySet = [15, [30, 1], [50, 2], [60, 1, 2], [70, 1, 3, 2], [80, 3, 3, 30], [3, 2, 35, 40], [1, 8, 1, 50, 50]];
            var costSet = [7000, 15000, 20000, 25000, 30000, 40000, 50000, 70000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 1) { //glove upgrade
            var itemSet = [1082021, 1082022, 1082027, 1082028, 1082052, 1082053, 1082055, 1082056, 1082063, 1082064, 1082082, 1082080, 1082087, 1082088];
            var matSet = [[1082020, 4011001], [1082020, 4021001], [1082026, 4021000], [1082026, 4021008], [1082051, 4021005],
                [1082051, 4021008], [1082054, 4021005], [1082054, 4021008], [1082062, 4021002], [1082062, 4021008],
                [1082081, 4021002], [1082081, 4021008], [1082086, 4011004, 4011006], [1082086, 4021008, 4011006]];
            var matQtySet = [[1, 1], [1, 2], [1, 3], [1, 1], [1, 3], [1, 1], [1, 3], [1, 1], [1, 4],
                [1, 2], [1, 5], [1, 3], [1, 3, 5], [1, 2, 3]];
            var costSet = [20000, 25000, 30000, 40000, 35000, 40000, 40000, 45000, 45000, 50000, 55000, 60000, 70000, 80000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 2) { //hat upgrade
            var itemSet = [1002065, 1002013];
            var matSet = [[1002064, 4011001], [1002064, 4011006]];
            var matQtySet = [[1, 3], [1, 3]];
            var costSet = [40000, 50000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 3) { //wand refine
            var itemSet = [1372005, 1372006, 1372002, 1372004, 1372003, 1372001, 1372000, 1372007];
            var matSet = [4003001, [4003001, 4000001], [4011001, 4000009, 4003000], [4011002, 4003002, 4003000], [4011002, 4021002, 4003000],
                [4021006, 4011002, 4011001, 4003000], [4021006, 4021005, 4021007, 4003003, 4003000], [4011006, 4021003, 4021007, 4021002, 4003002, 4003000]];
            var matQtySet = [5, [10, 50], [1, 30, 5], [2, 1, 10], [3, 1, 10], [5, 3, 1, 15], [5, 5, 1, 1, 20], [4, 3, 2, 1, 1, 30]];
            var costSet = [1000, 3000, 5000, 12000, 30000, 60000, 120000, 200000];
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        } else if (selectedType == 4) { //staff refine
            var itemSet = [1382000, 1382003, 1382005, 1382004, 1382002, 1382001];
            var matSet = [4003001, [4021005, 4011001, 4003000], [4021003, 4011001, 4003000], [4003001, 4011001, 4003000],
                [4021006, 4021001, 4011001, 4003000], [4011001, 4021006, 4021001, 4021005, 4003000, 4000010, 4003003]];
            var matQtySet = [5, [1, 1, 5], [1, 1, 5], [50, 1, 10], [2, 1, 1, 15], [8, 5, 5, 5, 30, 50, 1]];
            var costSet = [2000, 2000, 2000, 5000, 12000, 180000];
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
            cm.sendOk("先检查一下你的背包是否有足够的空间。");
            cm.dispose();
            return;
        } else if (cm.getMeso() < cost) {
            cm.sendOk("抱歉，我们都需要钱生活。等你带够了金币再来，好吗？")
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
            cm.sendOk("请确认你是否有需要的材料。");
        } else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i]);
                }
            } else {
                cm.gainItem(mats, -matQty);
            }

            if (cost > 0) {
                cm.gainMeso(-cost);
            }

            cm.gainItem(item, 1);
            cm.sendOk("制作完毕。");
        }
        cm.dispose();
    }
}
