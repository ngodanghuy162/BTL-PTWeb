package com.btlweb.server.Model;

import java.util.Date;

import jakarta.persistence.*;
@Entity
@Table(name = "statusDonHang")
public class StatusOrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String purposePlace;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "send_time")
    private Date timeSend;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "receive_time")
    private Date timeReceive;

    private String type;

    private String sendPlace;

    private String receivePlace;

    @ManyToOne
    @JoinColumn(name = "id_donhang")
    private OrderModel donHang;

    private String status;

    // Getters and setters
}