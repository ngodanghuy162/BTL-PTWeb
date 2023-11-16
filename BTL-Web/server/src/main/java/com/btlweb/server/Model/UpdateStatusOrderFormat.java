package com.btlweb.server.Model;

import java.util.Date;

public class UpdateStatusOrderFormat {
    private Date timeReceive;
    private String status;

    public Date getTimeReceive() {
        return timeReceive;
    }

    public void setTimeReceive(Date timeReceive) {
        this.timeReceive = timeReceive;
    }

    public UpdateStatusOrderFormat(Date timeReceive, String status) {
        this.timeReceive = timeReceive;
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
