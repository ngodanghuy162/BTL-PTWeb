package com.btlweb.server.Model;

import com.btlweb.server.FormatRequest.CreateOrderFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;
import java.util.Random;

@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@Table(name = "donhang")
public class OrderModel {
    @Id
    @Column(name = "mavandon")
    // Đặt tên cột là "mavandon"
    private String mavandon;

    private String name;

    private String sender;

    private String receiver;

    @Column(name = "cost")
    private long shipCost;

    private boolean canSeeWhenReceive;
    boolean isSenderPayShipment;

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

    private String phoneSender;

    private String phoneReceiver;

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

    private long cod;

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

    public long getCod() {
        return cod;
    }

    public void setCod(long cod) {
        this.cod = cod;
    }


    public OrderModel(CreateOrderFormat createOrderFormat) {
        this.mavandon = generateOrderMavandon();
        this.phoneSender = createOrderFormat.getPhoneSender();
        this.phoneReceiver = createOrderFormat.getPhoneReceiver();
        this.name = createOrderFormat.getName();
        this.sender = createOrderFormat.getSender();
        this.receiver = createOrderFormat.getReceiver();
        this.diaChiGui = createOrderFormat.getDiaChiGui();
        this.diaChiNhan = createOrderFormat.getDiaChiNhan();
        this.weight = createOrderFormat.getWeight();
        this.dateSend = new Date();
        this.shipCost = createOrderFormat.getShipCost();
        this.type = createOrderFormat.getType();
        this.dateReceive = null;
        this.diemGiaoDichGui = null;
        this.isSenderPayShipment = createOrderFormat.isSenderPayShip();
        this.cod = createOrderFormat.getCod();
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

