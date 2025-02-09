package handling.login.handler;

import client.MapleClient;
import database.DatabaseConnection;
import handling.login.LoginWorker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import tools.data.input.SeekableLittleEndianAccessor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import tools.data.LittleEndianAccessor;

public class AcceptToSHandler {

    private static final Logger log = LoggerFactory.getLogger(AcceptToSHandler.class);

    public boolean validateState(MapleClient c) {
        return true;
    }

    public void TOS(LittleEndianAccessor slea, MapleClient c) throws SQLException {
        boolean acceptedToS = slea.readByte() != 0;
        if (!acceptedToS) {
            return; // Client will close itself
        }

        c.loginAttempt = 0;
        acceptTos(c);
        LoginWorker.registerClient(c);
    }

    public void acceptTos(MapleClient c) {
        try (Connection conn = DatabaseConnection.getConnection()) {
            final String acceptTosStatement = "UPDATE accounts SET tos = 1 WHERE id = ?";
            PreparedStatement ps = conn.prepareStatement(acceptTosStatement);
            ps.setInt(1, c.getAccID());
            ps.executeUpdate();
        } catch (Exception e) {
            log.error("Failed to accept tos for accId " + c.getAccID(), e);
        }
    }
}
