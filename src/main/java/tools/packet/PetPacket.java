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
package tools.packet;

import client.inventory.Item;
import java.util.List;
import client.inventory.MaplePet;
import client.MapleStat;
import client.MapleCharacter;
import constants.GameConstants;
import handling.SendPacketOpcode;
import server.movement.LifeMovementFragment;
import tools.data.MaplePacketLittleEndianWriter;

public class PetPacket {

    public static final byte[] updatePet(final MaplePet pet, final Item item, final boolean active) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.INVENTORY_OPERATION.getValue());
        mplew.write(0);
        mplew.write(2);
        mplew.write(0);
        mplew.write(3);
        mplew.write(5);
        mplew.writeShort(pet.getInventoryPosition());
        mplew.write(0);
        mplew.write(5);
        mplew.writeShort(pet.getInventoryPosition());
        mplew.write(3);
        mplew.writeInt(pet.getPetItemId());
        mplew.write(1);
        mplew.writeLong(pet.getUniqueId());
        PacketHelper.addPetItemInfo(mplew, item, pet, active);
        return mplew.getPacket();
    }

    public static final byte[] showPet(final MapleCharacter chr, final MaplePet pet, final boolean remove, final boolean hunger) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SPAWN_PET.getValue());
        mplew.writeInt(chr.getId());
        mplew.write(chr.getPetIndex(pet));
        if (remove) {
            mplew.write(0);
            mplew.write(hunger ? 1 : 0);
        } else {
            addPetInfo(mplew, pet, true);
        }

        return mplew.getPacket();
    }

    public static void addPetInfo(final MaplePacketLittleEndianWriter mplew, MaplePet pet, boolean showpet) {
        mplew.write(1);
        if (showpet) {
            mplew.write(0);
        }
        mplew.writeInt(pet.getPetItemId());
        mplew.writeMapleAsciiString(pet.getName());
        mplew.writeLong(pet.getUniqueId());
        mplew.writeShort(pet.getPos().x);
        mplew.writeShort(pet.getPos().y - 20);
        mplew.write(pet.getStance());
        mplew.writeInt(pet.getFh());
    }

    public static final byte[] removePet(final int cid, final int index) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SPAWN_PET.getValue());
        mplew.writeInt(cid);
        mplew.write(index);
        mplew.writeShort(0);

        return mplew.getPacket();
    }

    public static final byte[] movePet(final int cid, final int pid, final byte slot, final List<LifeMovementFragment> moves) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.MOVE_PET.getValue());
        mplew.writeInt(cid);
        mplew.write(slot);
        mplew.writeLong(pid);
        PacketHelper.serializeMovementList(mplew, moves);

        return mplew.getPacket();
    }

    public static final byte[] petChat(final int cid, final int un, final String text, final byte slot) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.PET_CHAT.getValue());
        mplew.writeInt(cid);
        mplew.write(slot);
        mplew.write(un);
        mplew.write(0);
        mplew.writeMapleAsciiString(text);
        mplew.write(0); //hasQuoteRing

        return mplew.getPacket();
    }

    public static final byte[] commandResponse(final int cid, final byte command, final byte slot, final boolean success, final boolean food) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.PET_COMMAND.getValue());
        mplew.writeInt(cid);
        mplew.write(slot);
        mplew.write(command == 1 ? 1 : 0);
        mplew.write(command);
        mplew.write(command == 1 ? 0 : (success ? 1 : 0));
        mplew.write(0);

        return mplew.getPacket();
    }

    public static final byte[] showPetLevelUp(final MapleCharacter chr, final byte index) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SHOW_FOREIGN_EFFECT.getValue());
        mplew.writeInt(chr.getId());
        mplew.write(6);
        mplew.write(0);
        mplew.writeInt(index);

        return mplew.getPacket();
    }

    public static final byte[] showPetUpdate(MapleCharacter chr, MaplePet pet) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.PET_UPDATE.getValue());
        mplew.writeInt(chr.getId());
        mplew.writeInt(chr.getPetIndex(pet));
        mplew.writeLong(pet.getUniqueId());
        String exception = pet.getException(chr.getClient());
        if (exception != null) {
            mplew.writeShort(exception.length());
            mplew.writeMapleAsciiString(exception);
        } else {
            mplew.writeShort(0);
        }

        return mplew.getPacket();
    }

    public static final byte[] loadExceptionList(final int cid, final int petId, final String data) {
        final tools.data.output.MaplePacketLittleEndianWriter mplew = new tools.data.output.MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.PET_EXCEPTION_LIST.getValue());
        mplew.writeInt(cid);
        mplew.write(0); // lets make it 0, 0 = only boss pet
        mplew.writeLong(petId);
        final String[] ii = data.split(",");
        if (data.isEmpty()) {
            mplew.write(0);
            return mplew.getPacket();
        }
        mplew.write(ii.length > 10 ? 10 : ii.length);
        int i = 0;
        for (final String ids : ii) {
            i++;
            if (i > 10) {
                break;
            }
            mplew.writeInt(Integer.parseInt(ids));
        }

        return mplew.getPacket();
    }


    public static final byte[] petStatUpdate(final MapleCharacter chr) {
        final MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.UPDATE_STATS.getValue());
        mplew.write(0);
        if (GameConstants.GMS) {
            mplew.writeLong(MapleStat.PET.getValue());
        } else {
            mplew.writeInt((int) MapleStat.PET.getValue());
        }


        byte count = 0;
        for (final MaplePet pet : chr.getPets()) {
            if (pet.getSummoned()) {
                mplew.writeLong(pet.getUniqueId());
                count++;
            }
        }
        while (count < 3) {
            mplew.writeZeroBytes(8);
            count++;
        }
        mplew.write(0);
        mplew.writeShort(0);

        return mplew.getPacket();
    }
}
