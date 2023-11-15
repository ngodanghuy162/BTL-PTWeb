package com.btlweb.server.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
@Entity
@Table(name = "statusorder")
public class StatusOrderModel {
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
    private String mavandon;

    public StatusOrderModel() {
    }

    @ManyToOne
    @JoinColumn(name = "mavandon")
    @JsonBackReference
    private OrderModel order;

    public StatusOrderModel(long id, Date timeSend, Date timeReceive, String type, int id_sendPlace, int id_receivePlace, OrderModel order, String status) {
        this.id = id;
        this.timeSend = timeSend;
        this.timeReceive = timeReceive;
        this.type = type;
        this.id_sendPlace = id_sendPlace;
        this.id_receivePlace = id_receivePlace;
        this.order = order;
        this.status = status;
    }

    public StatusOrderModel(long id, Date timeSend, Date timeReceive, String type, int id_sendPlace, int id_receivePlace, String mavandon, OrderModel order, String status) {
        this.id = id;
        this.timeSend = timeSend;
        this.timeReceive = timeReceive;
        this.type = type;
        this.id_sendPlace = id_sendPlace;
        this.id_receivePlace = id_receivePlace;
        this.mavandon = mavandon;
        this.order = order;
        this.status = status;
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

    public String getMavandon() {
        if(this.order != null) {
            return order.getMaVanDon();
        }
        return mavandon;
    }

    public void setMavandon(String mavandon) {
        if(order != null) {
            this.mavandon = order.getMaVanDon();
        } else {
            this.mavandon = mavandon;
        }
    }

    public OrderModel getOrder() {
        return order;
    }

    public void setOrder(OrderModel order) {
        this.order = order;
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

    public OrderModel getorder() {
        return order;
    }

    public void setorder(OrderModel order) {
        this.order = order;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
// Getters and setters
}