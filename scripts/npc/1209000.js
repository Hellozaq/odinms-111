var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
        if (mode == 1) {
            status++;
        } else {
            if (status > 0) {
                status--; // 只有在状态大于0时才能减少
            } else {
                cm.dispose(); // 如果在初始状态，直接关闭对话窗口
                return;
            }
        }

        if (status == 0) {
            cm.sendNext("现在才醒？战神！伤口还好吧？......什么？现在的状况？");
        } else if (status == 1) {
            cm.sendNextPrev("避难准备都做好了，所有的人都上了方舟。避难船飞行的时候\r\n就只有听天由命了，没啥可担心的。准备得差不多就该向金银\r\n岛出发了。");
        } else if (status == 2) {
            cm.sendNextPrev("战神的同伴们？他们……已经去找黑魔法师了。在我们避难的\r\n时候，他们打算阻止黑腐法师的进攻……什么？你也要去找黑\r\n魔法师？不行！你伤得太重，跟我们一起吧！");
        } else if (status == 3) {
            cm.forceStartQuest(21002, "1");
            // Ahh, Oh No. The kid is missing
            cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
            cm.dispose();
        }
    } else {
        if (mode == 1) {
            status++;
        } else {
            if (status > 0) {
                status--; // 只有在状态大于0时才能减少
            } else {
                cm.dispose(); // 如果在初始状态，直接关闭对话窗口
                return;
            }
        }

        if (status == 0) {
            cm.sendSimple("情况紧急。你想了解哪些情况？ \r #b#L0#黑魔法师？#l \r #b#L1#避难准备？#l \r #b#L2#同伴们？#l");
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    cm.sendNext("据说黑魔法师已经追到附近哦。因为黑魔法师手下的那些龙，\r\n我们无法通过森林。所以才修建了这个方舟，战神。现在只有\r\n飞去金银岛避难了……");
                    break;
                case 1:
                    cm.sendNext("避难准备已经做得差不多了。该上方舟的人都已经上船了。再\r\n等几个人，就能启航去金银岛了。避难船在空中飞行的这段时\r\n间，对于来自空中的攻击几乎没有防御能力，所以只能听天由\r\n命了......已经没有剩余的人守护圣地了......");
                    break;
                case 2:
                    cm.sendOk("你的同伴们......他们已经去找黑魔法师了。在我们避难的时候\r\n，他们打算阻止黑魔法师的进攻......你受伤太重，所以没带你\r\n去。你还是跟我们一起避难吧，战神！");
                    break;
            }
            cm.safeDispose(); // 正常结束对话
        }
    }
}
