package server.maps;

import java.awt.Point;
import client.MapleCharacter;
import client.MapleClient;
import tools.packet.MaplePacketCreator;

public class MapleKite extends MapleMapObject {

    private final Point pos;
    private final MapleCharacter owner;
    private final String text;
    private final int ft, itemid;
    private int objectId;

    public MapleKite(MapleCharacter owner, Point pos, int ft, String text, int itemid) {
        this.owner = owner;
        this.pos = pos;
        this.text = text;
        this.ft = ft;
        this.itemid = itemid;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.KITE;
    }

    @Override
    public Point getPosition() {
        return pos.getLocation();
    }

    @Override
    public void setPosition(Point position) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        client.sendPacket(MaplePacketCreator.destroyKite(getObjectId(), (byte) 0));
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        client.sendPacket(MaplePacketCreator.spawnKite(getObjectId(), itemid, owner.getName(), text, pos, ft));
    }

    public byte[] makeSpawnData() {
        return MaplePacketCreator.spawnKite(getObjectId(), itemid, owner.getName(), text, pos, ft);
    }

    public byte[] makeDestroyData() {
        return MaplePacketCreator.destroyKite(getObjectId(), (byte) 0);
    }

    @Override
    public int getObjectId() {
        return objectId;
    }

    @Override
    public void setObjectId(int id) {
        this.objectId = id;
    }
}
