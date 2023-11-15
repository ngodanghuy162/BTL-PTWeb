package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

@Table(name = "diemgiaodich")
@Entity
public class DiemGiaoDichModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "district")
    private String district;

    @JoinColumn(name = "id_tapket")
    @ManyToOne
    //@JsonBackReference
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private DiemTapKetModel diemTapKet;

    public long getId() {
        return id;
    }

    public DiemGiaoDichModel(long id, String name, String district, DiemTapKetModel diemTapKet) {
        this.id = id;
        this.name = name;
        this.district = district;
        this.diemTapKet = diemTapKet;
    }

    public void setId(long id) {
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

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_leader_acc",referencedColumnName = "id")
//    @JsonIgnore
//    private AdminModel admin;

}
