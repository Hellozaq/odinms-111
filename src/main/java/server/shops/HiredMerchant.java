/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
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
package server.shops;

import java.util.concurrent.ScheduledFuture;

import client.inventory.Item;
import client.inventory.ItemFlag;
import constants.GameConstants;
import client.MapleCharacter;
import client.MapleClient;
import handling.channel.ChannelServer;

import java.awt.Point;
import java.util.LinkedList;
import java.util.List;

import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import server.Timer.EtcTimer;
import server.maps.MapleMapObjectType;
import tools.packet.MaplePacketCreator;
import tools.packet.PlayerShopPacket;

public class HiredMerchant extends AbstractPlayerStore {

    public ScheduledFuture<?> schedule;
    private List<String> blacklist;
    private int storeid;
    private long start;

    public HiredMerchant(MapleCharacter owner, int itemId, String desc, Point pos) {
        super(owner, itemId, (desc), "", 6, pos);
        start = System.currentTimeMillis();
        blacklist = new LinkedList<String>();
        this.schedule = EtcTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                if (getMCOwner() != null && getMCOwner().getPlayerShop() == HiredMerchant.this) {
                    getMCOwner().setPlayerShop(null);
                }
                removeAllVisitors(-1, -1);
                closeShop(true, true);
            }
        }, 1000 * 60 * 60 * 24);
    }

    public byte getShopType() {
        return IMaplePlayerShop.HIRED_MERCHANT;
    }

    public final void setStoreid(final int storeid) {
        this.storeid = storeid;
    }

    public List<MaplePlayerShopItem> searchItem(final int itemSearch) {
        final List<MaplePlayerShopItem> itemz = new LinkedList<MaplePlayerShopItem>();
        for (MaplePlayerShopItem item : items) {
            if (item.item.getItemId() == itemSearch && item.bundles > 0) {
                itemz.add(item);
            }
        }
        return itemz;
    }

    @Override
    public void buy(MapleClient c, int item, short quantity) {
        final MaplePlayerShopItem pItem = items.get(item);
        final Item shopItem = pItem.item;
        final Item newItem = shopItem.copy();
        final short perbundle = newItem.getQuantity();
        final int theQuantity = (pItem.price * quantity);
        newItem.setQuantity((short) (quantity * perbundle));

        short flag = newItem.getFlag();

        if (ItemFlag.KARMA_EQ.check(flag)) {
            newItem.setFlag((short) (flag - ItemFlag.KARMA_EQ.getValue()));
        } else if (ItemFlag.KARMA_USE.check(flag)) {
            newItem.setFlag((short) (flag - ItemFlag.KARMA_USE.getValue()));
        }

        if (MapleInventoryManipulator.checkSpace(c, newItem.getItemId(), newItem.getQuantity(), newItem.getOwner())) {
            final int gainmeso = getMeso() + theQuantity - GameConstants.EntrustedStoreTax(theQuantity);
            if (gainmeso > 0) {
                setMeso(gainmeso);
                pItem.bundles -= quantity; // Number remaining in the store
                MapleInventoryManipulator.addFromDrop(c, newItem, false);
                bought.add(new BoughtItem(newItem.getItemId(), quantity, theQuantity, c.getPlayer().getName()));
                c.getPlayer().gainMeso(-theQuantity, false);
                saveItems();
                MapleCharacter chr = getMCOwnerWorld();
                if (chr != null) {
                    chr.dropMessage(-5, "[고용상인] " + MapleItemInformationProvider.getInstance().getName(newItem.getItemId()) + " (" + perbundle + ")  " + quantity + "개가 판매되었습니다. 고용상인을 확인하세요.");
                }
            } else {
                c.getPlayer().dropMessage(1, "The seller has too many mesos.");
                c.sendPacket(MaplePacketCreator.enableActions());
            }
        } else {
            c.getPlayer().dropMessage(1, "请确认是不是你的\r\n背包的空间不够。");
            c.sendPacket(MaplePacketCreator.enableActions());
        }
    }

    @Override
    public void closeShop(boolean saveItems, boolean remove) {
        if (schedule != null) {
            schedule.cancel(false);
        }
        if (saveItems) {
            saveItems();
            items.clear();
        }
        if (remove) {
            ChannelServer.getInstance(channel).removeMerchant(this);
            getMap().broadcastMessage(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
        }
        getMap().removeMapObject(this);
        schedule = null;
    }

    public int getTimeLeft() {
        return (int) ((System.currentTimeMillis() - start) / 1000);
    }

    public final int getStoreId() {
        return storeid;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.HIRED_MERCHANT;
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        if (isAvailable()) {
            client.sendPacket(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
        }
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        if (isAvailable()) {
            client.sendPacket(PlayerShopPacket.spawnHiredMerchant(this));
        }
    }

    public final boolean isInBlackList(final String bl) {
        return blacklist.contains(bl);
    }

    public final void addBlackList(final String bl) {
        blacklist.add(bl);
    }

    public final void removeBlackList(final String bl) {
        blacklist.remove(bl);
    }

    public final void sendBlackList(final MapleClient c) {
        c.sendPacket(PlayerShopPacket.MerchantBlackListView(blacklist));
    }

    public final void sendVisitor(final MapleClient c) {
        c.sendPacket(PlayerShopPacket.MerchantVisitorView(visitors));
    }
}
