package com.btlweb.server.Model;

import jakarta.persistence.Table;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Table(name = "donhang")
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String sender;

    private String receiver;

    @Id
    @Column(name = "ma_van_don")
    private String maVanDon;

    @ManyToOne
    @JoinColumn(name = "id_diemgdgui")
    private DiemGiaoDichModel diemGiaoDichnGui;

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

    private Long cost;

    @OneToMany
    List<StatusOrderModel> statusOrderModelList;

    // Getters and setters
}

