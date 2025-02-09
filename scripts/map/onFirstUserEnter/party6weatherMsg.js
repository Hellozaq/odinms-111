/*
     名字：毒霧森林
     地图：毒霧森林
     描述：930000000
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 930000000: //毒霧森林
            ms.getPlayer().getMap().startMapEffect("你可以通过中央的传送点过去。我现在就给你施变身魔法。", 5120023);
            break;
        case 930000010: //初入森林
            ms.getPlayer().getMap().startMapEffect("请你确认好自己的外貌，不要搞混了！", 5120023);
            break;
        case 930000100: //初入森林
            ms.getPlayer().getMap().startMapEffect("除掉所有的怪物！", 5120023);
            break;
        case 930000200: //變質的森林
            ms.getPlayer().getMap().startMapEffect("在中央水坑处消灭怪物，利用水坑渗出的稀释的毒汁清除荆棘草！", 5120023);
            break;
        case 930000300: //濃霧森林
            ms.getPlayer().getMap().startMapEffect("大家都去哪了？快通过传送点到这里来！", 5120023);
            break;
        case 930000400: //中毒的森林
            ms.getPlayer().getMap().startMapEffect("从我这里拿到净化之珠后，捕捉怪物，然后由队长把20个怪物之珠带给我！", 5120023);
            break;
        case 930000500: //森林空地
            ms.getPlayer().getMap().startMapEffect("打开怪人桌子前的箱子，把紫色魔力石带回来！", 5120023);
            break;
        case 930000600: //劇毒森林
            ms.getPlayer().getMap().startMapEffect("把紫色魔力石放在怪人的祭坛上！", 5120023);
            break;
        default:
    }
    ms.dispose();
}
