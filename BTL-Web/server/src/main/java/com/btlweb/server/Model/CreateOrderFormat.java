package com.btlweb.server.Model;

import java.util.Date;

public class CreateOrderFormat {
    private String name;
    private String sender;
    private String receiver;
    private long id_diemgiaodichtao;
    private String diaChiGui;
    private String diaChiNhan;
    private Float weight;
    private String type;
    private Date dateSend;
    private long cost;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public long getId_diemgiaodichtao() {
        return id_diemgiaodichtao;
    }

    public void setId_diemgiaodichtao(long id_diemgiaodichtao) {
        this.id_diemgiaodichtao = id_diemgiaodichtao;
    }

    public String getDiaChiGui() {
        return diaChiGui;
    }

    public void setDiaChiGui(String diaChiGui) {
        this.diaChiGui = diaChiGui;
    }

    public String getDiaChiNhan() {
        return diaChiNhan;
    }

    public void setDiaChiNhan(String diaChiNhan) {
        this.diaChiNhan = diaChiNhan;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getDateSend() {
        return dateSend;
    }

    public void setDateSend(Date dateSend) {
        this.dateSend = dateSend;
    }

    public long getCost() {
        return cost;
    }

    public void setCost(long cost) {
        this.cost = cost;
    }

    public CreateOrderFormat(String name, String sender, String receiver, long id_diemgiaodichtao, String diaChiGui, String diaChiNhan, Float weight, String type, Date dateSend, long cost) {
        this.name = name;
        this.sender = sender;
        this.receiver = receiver;
        this.id_diemgiaodichtao = id_diemgiaodichtao;
        this.diaChiGui = diaChiGui;
        this.diaChiNhan = diaChiNhan;
        this.weight = weight;
        this.type = type;
        this.dateSend = dateSend;
        this.cost = cost;
    }
}
