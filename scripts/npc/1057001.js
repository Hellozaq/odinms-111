function action(mode, type, selection) {
/*
    if (cm.getPlayer().getLevel() < 20) { // 如果玩家等级小于20
        if (cm.getPlayer().getSubcategory() != 1) { // 如果玩家的子类别不等于1（即未选择双刀）
            cm.sendOk("你必须在角色选择时选择双刀客才能与我对话。");
        } else {
            cm.sendOk("你必须在2级和9级时接受任务才能与我对话。");
        }
    } else { // 如果玩家等级大于或等于20
        cm.sendOk("哼......有什么事情吗？");
    }
*/
    cm.sendOk("哼......有什么事情吗？");
    cm.safeDispose(); // 安全地处理对话结束
}
