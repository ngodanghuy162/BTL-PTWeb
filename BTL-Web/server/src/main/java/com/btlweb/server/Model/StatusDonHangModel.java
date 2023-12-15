package com.btlweb.server.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;

@Entity
@Table(name = "statusdonhang")
public class StatusDonHangModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "send_time")
    private Date timeSend;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "receive_time")
    private Date timeReceive;

    private String type;

    private int id_sendPlace;

    private int id_receivePlace;

    @Transient
    private String mavandonNotCol;

    @ManyToOne
    @JoinColumn(name = "mavandon")
    @JsonIgnore
    private OrderModel donhangchinh;

    public StatusDonHangModel() {
    }
    public StatusDonHangModel(long id, Date timeSend, Date timeReceive, String type, int id_sendPlace, int id_receivePlace, OrderModel donhangchinh, String status) {
        this.id = id;
        this.timeSend = timeSend;
        this.timeReceive = timeReceive;
        this.type = type;
        this.id_sendPlace = id_sendPlace;
        this.id_receivePlace = id_receivePlace;
        this.donhangchinh = donhangchinh;
        this.status = status;
    }

    public StatusDonHangModel(Date timeSend, Date timeReceive, String type, int id_sendPlace, int id_receivePlace, String status) {
        this.timeSend = timeSend;
        this.timeReceive = timeReceive;
        this.type = type;
        this.id_sendPlace = id_sendPlace;
        this.id_receivePlace = id_receivePlace;
        this.status = status;
    }

    public StatusDonHangModel(String type, int id_sendPlace, int id_receivePlace, String status) {
        this.timeSend = new Date();
        this.timeReceive = null;
        this.type = type;
        this.id_sendPlace = id_sendPlace;
        this.id_receivePlace = id_receivePlace;
        this.status = status;
    }


    public String getMavandonNotCol() {
        if(donhangchinh != null) {
            return donhangchinh.getMaVanDon();
        }
        return mavandonNotCol;
    }

    public void setMavandonNotCol(String mavandonNotCol) {
        if(donhangchinh != null) {
            this.mavandonNotCol =  donhangchinh.getMaVanDon();
        } else {
            this.mavandonNotCol = mavandonNotCol;
        }
    }

    public int getId_sendPlace() {
        return id_sendPlace;
    }

    public void setId_sendPlace(int id_sendPlace) {
        this.id_sendPlace = id_sendPlace;
    }

    public int getId_receivePlace() {
        return id_receivePlace;
    }

    public void setId_receivePlace(int id_receivePlace) {
        this.id_receivePlace = id_receivePlace;
    }


    public OrderModel getDonhangchinh() {
        return donhangchinh;
    }

    public void setDonhangchinh(OrderModel donhangchinh) {
        this.donhangchinh = donhangchinh;
    }

    private String status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Date getTimeSend() {
        return timeSend;
    }

    public void setTimeSend(Date timeSend) {
        this.timeSend = timeSend;
    }

    public Date getTimeReceive() {
        return timeReceive;
    }

    public void setTimeReceive(Date timeReceive) {
        this.timeReceive = timeReceive;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getId_SendPlace() {
        return id_sendPlace;
    }

    public void setSendPlace(int sendPlace) {
        this.id_sendPlace = sendPlace;
    }

    public int getId_ReceivePlace() {
        return id_receivePlace;
    }

    public void setReceivePlace(int receivePlace) {
        this.id_receivePlace = receivePlace;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
// Getters and setters
}