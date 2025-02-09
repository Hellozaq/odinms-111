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
NPC Name: Cloy
Map(s): Victoria Road : Henesys Park (100000200)
Description: Pet Master
 */
var status = -2;
var sel;

function start() {
    status = -2
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == -1) {
            cm.sendNext("你......是在词养我的孩子吗？用生命水的魔法，我成功研究出了给玩偶注入生命的魔法。人们把这样诞生的孩子叫宠物。如果你有和宠物有关的问题，可以尽管问我。");
        } else if (status == 0) {
            cm.sendSimple("你想问什么？#b\r\n#L0#告诉我关于宠物。#l\r\n#L1#怎么养宠物。#l\r\n#L2#宠物也会死吗？#l\r\n#L3#请告诉褐色小猫、黑色小猫的命令语。#l\r\n#L4#请告诉褐色小狗的命令语。#l\r\n#L5#请告诉粉红兔子，白色兔子的命令语。#l\r\n#L6#请告诉小怪猫的命令语。#l\r\n#L7#请告诉水晶圣诞鹿的命令语。#l\r\n#L8#请告诉黑小猪的命令语。#l\r\n#L9#请告诉熊猫的命令语。#l\r\n#L10#请告诉雪犬的命令语。#l\r\n#L11#请告诉恐龙公主、恐龙王子的命令语。#l\r\n#L12#请告诉猴子的命令语。#l\r\n#L13#请告诉火鸡的命令语。#l\r\n#L14#请告诉小白虎的命令语。#l\r\n#L15#请告诉小企企的密令语。#l\r\n#L16#请告诉小金猪的命令语。#l\r\n#L17#请告诉机器人的命令语。#l\r\n#L18#请告诉小白雪人的命令语。#l\r\n#L19#请告诉蝙蝠怪的命令语。#l\r\n#L20#请告诉进化龙的命令语。#l\r\n#L21#请告诉绿/红/蓝龙的命令语。#l\r\n#L22#请告诉黑龙的命令语。#l\r\n#L23#请告诉鬼灵精怪的命令语。#l\r\n#L24#请告诉猪八戒的命令语。#l\r\n#L25#请告诉雪娃娃的命令语。#l\r\n#L27#请告诉我转移宠物亲密度的方法。#l");
        } else if (status == 1) {
            sel = selection;
            if (selection == 0) {
                status = 3;
                cm.sendNext("想对宠物有所了解嘛。很久以前，我再做出的木偶身上用了生命水，透过魔法成功的做出了魔法动物。虽然难以相信，木偶成了有生命的生命体。它们能听懂人类的话，是很乖巧可爱的家伙。");
            } else if (selection == 1) {
                status = 6;
                cm.sendNext("宠物听到命令的时候，会表现出喜欢或不喜欢等多种的反应。如果你想你的宠物很听你的话，你们之间的亲密度要不断上升。如果它反抗的话，亲密度就会下降。你通过双击宠物，可以看到宠物的亲密度、等级、饱满感等。你跟宠物说关心它的话，亲密度和等级会上升。亲密度达到一定的数值宠物就会升级，高等级的宠物可以说人类的话。所以你应该好好的养宠物，虽然不太容易。虽然这些宠物的原形是娃娃，但现在它们都有自己的生命。所以它们也会觉得饿，#b饱满感#k表示它们饥饿的程度，100是最高的。但是饱满感降到一定的值，宠物就会反抗主人说的话，所以你要注意这一点。是啊!宠物不能吃人类的菜。所以我的门下#b科尔#k在射手村市场卖#b宠物食品#k。要是你需要宠物食品，就去射手村吧。宠物没力\r\n气的时候应该给多吃点宠物食品。啊！你很长时间不给它食物的话，它会自己跑回家的。当然你也可以叫他出来喂食，但是这样做对宠物的健康不太好。所以你要注意，每顿饭都要让它们吃。要防止发生这样的事儿！这么说明你明白了吧?");
            } else if (selection == 2) {
                status = 11;
                cm.sendNext("死亡嘛~其实这些宠物不是生命体，所以我也不能确定它们会不会死。它们是用我的魔法和生命水做的，随然外表和一般的动物一样......过一定的时间~对！它们会停止。它们会返回原来娃娃的样子这是因为魔法和生命水的能力消失了。但是这却不是永远的停止，再给它生命水的话，它又会复原的。虽然能够让它复活，但是让它停止也是很可怜的。所以你要真心地喜爱它们。应该每顿都给它们饭吃。不过怎么说，有个听从你的动物不也是一-件很高兴的事吗？");
            } else if (selection == 3) {
                cm.sendNext("#r褐色小猫、黑色小猫#k的指令语旁边的等级意味着能够使用那条\r\n指令的宠物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 4) {
                cm.sendNext("#r褐色小狗#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 5) {
                cm.sendNext("#r粉红兔子，白色兔子#k的指令语旁边的等级意味着能够使用那条\r\n指令的宠物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b抱抱#k (等级 10 ~ 30)\r\n#b睡觉, 困了, 去睡觉#k (等级 20 ~ 30)");
            } else if (selection == 6) {
                cm.sendNext("#r小怪猫#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 7) {
                cm.sendNext("#r水晶圣诞鹿#k的指令语旁边的等级意味着能够使用那条指令的宠\r\n物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b圣诞快乐，圣诞快乐#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 11 ~ 30)\r\n#b寂寞, 孤独#k (等级 11 ~ 30)\r\n#b撒娇#k (等级 11 ~ 30)\r\n#b走#k (等级 21 ~ 30)");
            } else if (selection == 8) {
                cm.sendNext("#r黑小猪#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 9) {
                cm.sendNext("#r熊猫#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 10) {
                cm.sendNext("#r雪犬#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 11) {
                cm.sendNext("#r恐龙公主、恐龙王子#k的指令语旁边的等级意味着能够使用那条\r\n指令的宠物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 12) {
                cm.sendNext("#r猴子#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 13) {
                cm.sendNext("#r火鸡#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 14) {
                cm.sendNext("#r小白虎#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 15) {
                cm.sendNext("#r小企企#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 16) {
                cm.sendNext("#r小金猪#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 17) {
                cm.sendNext("#r机器人#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 18) {
                cm.sendNext("#r小白雪人#k的指令语旁边的等级意味着能够使用那条指令的宠\r\n物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 19) {
                cm.sendNext("#r蝙蝠怪#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 20) {
                cm.sendNext("#r进化龙#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 21) {
                cm.sendNext("#r绿/红/蓝龙#k的指令语旁边的等级意味着能够使用那条指令的宠\r\n物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 22) {
                cm.sendNext("#r黑龙#k的指令语旁边的等级意味着能够使用那条指令的宠物的等\r\n级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 23) {
                cm.sendNext("#r鬼灵精怪#k的指令语旁边的等级意味着能够使用那条指令的宠物\r\n的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 24) {
                cm.sendNext("#r猪八戒#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 25) {
                cm.sendNext("#r雪娃娃#k的指令语旁边的等级意味着能够使用那条指令的宠物的\r\n等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 26) {
                cm.sendNext("#r臭鼬#k的指令语旁边的等级意味着能够使用那条指令的宠物的等级。\r\n#b坐#k (等级 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等级 1 ~ 30)\r\n#b笨蛋, 傻瓜, 讨厌#k (等级 1 ~ 30)\r\n#b爱你#k (等级 1~30)\r\n#b便便#k (等级 1 ~ 30)\r\n#b说, 说吧, 说话#k (等级 10 ~ 30)\r\n#b撒娇#k (等级 10 ~ 30)\r\n#b站, 站起来, 起来#k (等级 20 ~ 30)");
            } else if (selection == 27) {
                status = 14;
                cm.sendNext("为了移动宠物能力值需要魔法卷轴，带着这本书给艾灵森林的妖精玛莉的话，就可以将你真心培训的宠物等级和亲密度移动其他宠物身上去。只给对于宠物如此关心的你而已，免费给你有点困难，所以只要支付#b250,000#k金币的话，就可以\r\n把书让给你，对了，即使有咒文书，如果没有可移动的新宠物，也是没有用的。");
            }
            if (selection > 2 && selection < 27) {
                cm.dispose();
            }
        } else if (status == 2) {
            if (sel == 0) {
                cm.sendNextPrev("可是那生命水只在世界树的根部长出来一点点而已，不能赋予那些孩子太多的时间真可惜啊！不过就算变成木偶也能再赋予它生命，在一起要好好疼它哦。");
            } else if (sel == 1) {
                cm.sendNextPrev("经常和宠物聊天，关心它，亲密度就会提高，宠物的等级也会跟着提高。亲密度提高到某一程度时，宠物就会升级，等级高的话，还会学人说话，要努力抚养，当然不是那么容易吧");
            } else if (sel == 2) {
                cm.sendNextPrev("过一段时间后对了！这些家伙会停掉的。就会恢复到原本木偶的样子。魔法的力量和生命水用光的话，不过并不是永远停掉哦，再给它擦上生命水的话，就能复活哦。");
            } else if (sel == 27) {
                cm.sendYesNo("将减去25万金币，确定要购买吗？");
            }
        } else if (status == 3) {
            if (sel == 0) {
                cm.sendNextPrev("哦，是的，当你给他们特殊的命令时他们会做出反应。你可以骂他们，爱他们。。。这一切都取决于您如何照顾他们。他们害怕离开他们的主人，所以对他们好一点，给他们爱。他们会很快变得悲伤和孤独。。。");
            } else if (sel == 1) {
                cm.sendNextPrev("虽然是木偶，可是这些家伙也有生命，也会觉得肚子饿的。#b饱满度#k是显示肚子饱的程度的，最高是100，降到一定程度的，宠物会不听话等等，变得神经质呢。要多花点心思啊。");

            } else if (sel == 2) {
                cm.sendNextPrev("90天以后，宠物就会死掉，就会恢复到原本木偶的样子。魔法的力量和生命水用光的话，不过并不是永远死掉，再给它使用生命水的话，就能复活哦。");
            } else if (sel == 27) {
                if (cm.getMeso() < 250000 || !cm.canHold(4160011)) {
                    cm.sendOk("请确认是否有足够的金币，或者其他栏是否满了。");
                } else {
                    cm.gainMeso(-250000);
                    cm.gainItem(4160011, 1);
                }
                cm.dispose();
            }
        } else if (status == 4) {
            if (sel != 1) {
                cm.dispose();
            }
            cm.sendNextPrev("对了！宠物不大喜欢吃人类的食物。我的徒弟#b科尔#k在射手村\r\n的市集里卖#b宠物食品#k，如果需要食物就到射手村去。最好先\r\n买好食物，以防宠物失去力气哦。");
        } else if (status == 5) {
            cm.sendNextPrev("哦，如果你长时间不喂宠物，它就会自己回家。不过你可以把它从背包拿出来喂它，所以试着定期喂它，这样它的饱食度就不会降低了，好吗？");
        } else {
            cm.dispose();
        }
    }
}
