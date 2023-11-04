package com.btlweb.server.tapket;

import jakarta.persistence.*;

@Entity
@Table
public class DiemTapKetModel {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String name;
    private String province;
    private int id_header_acc;

    // Constructors, getters, and setters

    public DiemTapKetModel() {
    }

    public DiemTapKetModel(int id, String name, String province, int id_header_acc) {
        this.id = id;
        this.name = name;
        this.province = province;
        this.id_header_acc = id_header_acc;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public int getIdHeaderAcc() {
        return id_header_acc;
    }

    public void setIdHeaderAcc(int id_header_acc) {
        this.id_header_acc = id_header_acc;
    }

}
