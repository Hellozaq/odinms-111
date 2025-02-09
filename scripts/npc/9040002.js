/*
 * This file is part of the OdinMS Maple Story Server
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

/*
 * @Author Lerk
 *
 * Shawn, Victoria Road: Excavation Site<Camp> (101030104)
 *
 * Guild Quest Info
 */

var status;
var selectedOption;

function start() {
    selectedOption = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (mode == 1 && status == 3) {
            status = 0;
        }
        if (status == 0) {
            var prompt = "\r\n#b#L0#圣瑞尼亚是什么东西？#l\r\n#b#L1##t4001024# 吗？#l\r\n#b#L2#家族对抗战？#l\r\n#b#L3#现在好了。#l";
            if (selectedOption == -1) {
                prompt = "我们家族联盟是从很久以前就开始，一直在努力解读古代的遗\r\n物<祖母绿碑>。得到的结果是，我们了解这里沉睡着古代神秘\r\n圣瑞尼亚。而且还了解到传说中的宝石#t4001024#就在圣瑞尼亚的\r\n遗址中。因此，为了寻找#t4001024#，家族联盟开始了家族对抗战\r\n。" + prompt;
            } else {
                prompt = "还有要问的?" + prompt;
            }
            cm.sendSimple(prompt);
        } else if (status == 1) {
            selectedOption = selection;
            if (selectedOption == 0) {
                //cm.sendNext("锡安列是一个文明时代，从过去控制了维多利亚岛的每一个地区。地下城深处的神殿、庙宇和其他古老的建筑，没有人知道是谁在锡安列时代建造的。");
                cm.sendNext("圣瑞尼亚是曾经统治金银岛全境的古代文明国家。在石人寺院\r\n或森林深处的神殿之类的古代建筑物都是圣瑞尼亚的遗址。");
            } else if (selectedOption == 1) {
                cm.sendNext("#t4001024#是传说中的能够使人永远年轻的宝石。听说拥有#t4001024#的人都灭亡了，也许圣瑞尼亚的灭亡也于此有关。");
                status = -1;
            } else if (selectedOption == 2) {
                cm.sendNext("过去曾多次派勘探队到圣瑞尼亚。但是无人归还。所以我们这\r\n次决定展开家族对抗战。我相信你们这些一直在努力增强力量\r\n的家族。");
            } else if (selectedOption == 3) {
                //cm.sendOk("真的？如果你还有什么要问的，请随时跟我说。");
                cm.sendOk("是吗？若有什么问题，请随时提出。");
                cm.dispose();
            } else {
                cm.dispose();
            }
        } else if (status == 2) { //should only be available for options 0 and 2
            if (selectedOption == 0) {
                cm.sendNextPrev("圣瑞尼亚最后的王是锡安列三世，据说他非常聪明而又仁慈。\r\n但是在某一天突然灭亡了，其原因还没有弄清楚。");
            } else if (selectedOption == 2) {
                cm.sendNextPrev("这次公会对抗战的目的是到圣瑞尼亚探险，并找到 鲁碧安。\r\n这个任务并不是靠强大的力量就能完成的。最重要的是要与同\r\n伴合作。");
            } else {
                cm.dispose();
            }
        }
    }
}
