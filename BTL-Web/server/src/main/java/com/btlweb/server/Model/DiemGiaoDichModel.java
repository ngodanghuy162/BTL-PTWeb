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

    @Column(name = "address")
    private String address;

    @JoinColumn(name = "id_tapket")
    @ManyToOne
    //@JsonBackReference
    @JsonBackReference
    private DiemTapKetModel diemTapKet;

    public DiemGiaoDichModel() {
    }

    public long getId() {
        return id;
    }

    public DiemGiaoDichModel(long id, String name, String address, DiemTapKetModel diemTapKet) {
        this.id = id;
        this.name = name;
        this.address = address;
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

    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
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
