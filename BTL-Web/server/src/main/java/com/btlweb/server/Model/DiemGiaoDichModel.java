package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Table(name = "diemgiaodich")
public class DiemGiaoDichModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "district")
    private String district;

    public Long getId() {
        return id;
    }

    public DiemGiaoDichModel(Long id, String name, String district, DiemTapKetModel diemTapKet) {
        this.id = id;
        this.name = name;
        this.district = district;
        this.diemTapKet = diemTapKet;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public DiemTapKetModel getDiemTapKet() {
        return diemTapKet;
    }

    public void setDiemTapKet(DiemTapKetModel diemTapKet) {
        this.diemTapKet = diemTapKet;
    }

    @JoinColumn(name = "id_tapket")
    @ManyToOne
    @JsonBackReference
    private DiemTapKetModel diemTapKet;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_leader_acc",referencedColumnName = "id")
//    @JsonIgnore
//    private AdminModel admin;

}
