/*
����:��Ӣ
�؈D:���׌�
����:105100100
 */

importPackage(Packages.tools.packet);

function init() { //���ն��xȡ
    em.setProperty("state", "0");
}

function setup(level, lobbyid) { //�_ʼ�¼����r�g
    em.setProperty("state", "1");
    var eim = em.newInstance("BossBalrog_EASY");

    eim.getMapInstance(105100300).resetFully();
    eim.getMapInstance(105100301).resetFully();

    eim.schedule("BossBalrog", 3 * 1000); //���dָ���r�g
    eim.schedule("releaseLeftClaw", 1 * 60000); //���dָ���r�g

    eim.startEventTimer(40 * 60000);
    return eim;
}

/*
function playerEntry(eim, player) { //�����M�¼��؈D
var map = eim.getMapInstance(105100300);
player.changeMap(map, map.getPortal(0));
}
 */

function playerEntry(eim, player) {
    var map = eim.getMapInstance(105100300);
    player.changeMap(map, map.getPortal(0));
    eim.applyBuff(player, 2022536);
    if (player.haveItem(1302014)) {
        eim.applyBuff(player, 2022537);
    }
}

function BossBalrog(eim) { //ˢ��BOSS������@���O�� �o�������@ʾ���w
    var map = eim.getMapInstance(105100300);
    //var mob1 = em.getMonster(8830007);//��ʵ�����ن�����
    var mob1 = em.getMonster(8830010); //�ن�����

    var mob2 = em.getMonster(8830009); //�ن�����
    var mob3 = em.getMonster(8830013); //�ن�����

    //map.spawnFakeMonsterOnGroundBelow(mob1, new java.awt.Point(412, 258));//ˢ���ٹ֟o�������@ʾ

    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(412, 258));
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(412, 258));
    map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(412, 258));
}

function releaseLeftClaw(eim) { //ָ���r�g�뚢����ጷ���צ
    eim.getMapInstance(105100300).killMonster(8830013);
    eim.schedule("releaseLeftClaw1", 2 * 1000); //���dָ���r�g
}

function releaseLeftClaw1(eim) { //ˢ����צ
    var mob2 = em.getMonster(8830008); //�ن�����
    eim.getMapInstance(105100300).spawnMonsterOnGroundBelow(mob2, new java.awt.Point(412, 258));
}

function releaseLeftClaw2(eim) { //ˢ����������צ
    var mob6 = em.getMonster(8830011); //�ن�����
    eim.getMapInstance(105100300).spawnMonsterOnGroundBelow(mob6, new java.awt.Point(412, 258));
}

function releaserightClaw2(eim) { //ˢ���������צ
    var mob6 = em.getMonster(8830012); //�ن�����
    eim.getMapInstance(105100300).spawnMonsterOnGroundBelow(mob6, new java.awt.Point(412, 258));
}

function scheduledTimeout(eim) { //Ҏ���r�g�Y��
    eim.disposeIfPlayerBelow(100, 105100100);
}

function monsterValue(eim, mobId) { //�������|�l
    if (mobId == 8830009) { //��צ��������
        eim.schedule("releaserightClaw2", 3 * 1000); //���dָ���r�g
    }
    if (mobId == 8830008) { //��צ��������ጷ����w
        eim.getMapInstance(105100300).killMonster(8830010);
        var mob = em.getMonster(8830007); //�ن�����
        eim.getMapInstance(105100300).spawnMonsterOnGroundBelow(mob, new java.awt.Point(412, 258));
        eim.schedule("releaseLeftClaw2", 3 * 1000); //���dָ���r�g
    }
    if (mobId == 8830007) { //���w������
        eim.broadcastPlayerMsg(6, "���_�ű����ˡ�.");
        eim.schedule("spawnSealedBalrog", 10 * 1000); //���dָ���r�g
        eim.startEventTimer(3 * 60000);
        eim.getMapInstance(105100300).broadcastMessage(EtcPacket.showEffect("quest/party/clear"));
        eim.getMapInstance(105100300).broadcastMessage(EtcPacket.playSound("Party1/Clear"));
    }
    return 1;
}

function spawnSealedBalrog(eim) { //���w���������ָ���r�g
    var mob4 = em.getMonster(8830010); //�ن�����
    eim.getMapInstance(105100300).spawnMonsterOnGroundBelow(mob4, new java.awt.Point(412, 258));
}

function playerDisconnected(eim, player) { //����н�ɫ���_�B���|�l
    playerExit(eim, player);
}

function changedMap(eim, chr, mapid) { //���ڴ˵؈D���¼��Y��
    if (mapid != 105100300 && mapid != 105100301) {
        playerExit(eim, chr);
    }
}

function playerExit(eim, player) { //��ɫ�˳��r�|�l
    eim.unregisterPlayer(player);
    player.dispelBuff(2022536);
    player.dispelBuff(2022537);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function allMonstersDead(eim) {
}

//���������|�l�̈́h���@�����ڻ���е��YӍ

function leftParty(eim, player) {
}

//�x�_С�M�|�l

function disbandParty(eim) {
}

//С�M�˳��r�|�l

function playerDead(eim, player) {
}

//��������r�|�l

function playerRevive(eim, player) {
}

//��ҽ�ɫ���r�|�l

function cancelSchedule() {
}

//����¼�
