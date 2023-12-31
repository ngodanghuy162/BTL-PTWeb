package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Entity
@Table(name = "donhang")
public class OrderModel {
    @Id
    @Column(name = "mavandon")
    // Đặt tên cột là "mavandon"
    private String mavandon;

    private String name;

    private String sender;

    private String receiver;

    @ManyToOne
    @JoinColumn(name = "id_diemgdgui")
    @JsonIgnore
    private DiemGiaoDichModel diemGiaoDichGui;

    public DiemGiaoDichModel getDiemGiaoDichGui() {
        return diemGiaoDichGui;
    }

    public void setDiemGiaoDichGui(DiemGiaoDichModel diemGiaoDichGui) {
        this.diemGiaoDichGui = diemGiaoDichGui;
    }



    public OrderModel() {
    }



    private String diaChiGui;

    private String diaChiNhan;

    private Float weight;

    private String status;

    private String type;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_send")
    private Date dateSend;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_receive")
    private Date dateReceive;


    @OneToMany(mappedBy = "donhangchinh")
    @JsonManagedReference
    private List<StatusDonHangModel> statusDonHangModelList;

    private long cost;

    public String getMaVanDon() {
        return mavandon;
    }

    public void setId(String id) {
        this.mavandon = mavandon;
    }

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



    public DiemGiaoDichModel getdiemGiaoDichGui() {
        return diemGiaoDichGui;
    }

    public void setdiemGiaoDichGui(DiemGiaoDichModel diemGiaoDichGui) {
        this.diemGiaoDichGui = diemGiaoDichGui;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public Date getDateReceive() {
        return dateReceive;
    }

    public void setDateReceive(Date dateReceive) {
        this.dateReceive = dateReceive;
    }

    public long getCost() {
        return cost;
    }

    public void setCost(long cost) {
        this.cost = cost;
    }



    public OrderModel(String name, String sender, String receiver, DiemGiaoDichModel diemGiaoDichGui, String diaChiGui, String diaChiNhan, Float weight, String status, String type, Date dateSend, Date dateReceive, List<StatusDonHangModel> statusDonHang, long cost) {
        this.mavandon = generateOrderMavandon();
        this.name = name;
        this.sender = sender;
        this.receiver = receiver;
        this.diemGiaoDichGui = diemGiaoDichGui;
        this.diaChiGui = diaChiGui;
        this.diaChiNhan = diaChiNhan;
        this.weight = weight;
        this.status = status;
        this.type = type;
        this.dateSend = dateSend;
        this.dateReceive = dateReceive;
        this.statusDonHangModelList = statusDonHang;
        this.cost = cost;
    }

    public OrderModel(String name, String sender, String receiver, String diaChiGui, String diaChiNhan, Float weight, String type, Date dateSend, long cost) {
        this.mavandon = generateOrderMavandon();
        this.name = name;
        this.sender = sender;
        this.receiver = receiver;
        this.diaChiGui = diaChiGui;
        this.diaChiNhan = diaChiNhan;
        this.weight = weight;
        this.type = type;
        this.dateSend = dateSend;
        this.cost = cost;
    }

    public OrderModel(CreateOrderFormat createOrderFormat) {
        this.mavandon = generateOrderMavandon();
        this.name = createOrderFormat.getName();
        this.sender = createOrderFormat.getSender();
        this.receiver = createOrderFormat.getReceiver();
        this.diaChiGui = createOrderFormat.getDiaChiGui();
        this.diaChiNhan = createOrderFormat.getDiaChiNhan();
        this.weight = createOrderFormat.getWeight();
        this.type = createOrderFormat.getType();
        this.dateSend = createOrderFormat.getDateSend();
        this.cost = createOrderFormat.getCost();
        this.dateReceive = null;
        this.diemGiaoDichGui = null;
    }

    private String generateOrderMavandon() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder randomString = new StringBuilder();

        Random random = new Random();
        for (int i = 0; i < 4; i++) {
            int index = random.nextInt(characters.length());
            char randomChar = characters.charAt(index);
            randomString.append(randomChar);
        }
        long timestamp = System.currentTimeMillis();
        randomString.append(timestamp);
        return randomString.toString();
    }

}

