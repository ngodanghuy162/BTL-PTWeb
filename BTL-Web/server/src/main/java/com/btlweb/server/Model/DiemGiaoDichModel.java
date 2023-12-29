package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(name = "is_active")
    private boolean is_active;

    @Transient
    private String namedtk;

    @Transient
    private long id_dtk;

    public long getId_dtk() {
        if(diemTapKet != null) {
            return diemTapKet.getId();
        }
        return id_dtk;
    }

    public void setId_dtk(long id_dtk) {
        if(this.diemTapKet != null) {
            this.id_dtk = diemTapKet.getId();
        } else  {
            this.id_dtk = id_dtk;
        }
    }

    public boolean isIs_active() {
        return is_active;
    }

    public String getNamedtk() {
        if(diemTapKet != null) {
            return diemTapKet.getName();
        }
        return namedtk;
    }

    public void setNamedtk(String namedtk) {
        this.namedtk = diemTapKet.getName();
    }

    public DiemGiaoDichModel(String name, String address, DiemTapKetModel diemTapKet) {
        this.name = name;
        this.address = address;
        this.is_active = true;
        this.diemTapKet = diemTapKet;
        this.namedtk = diemTapKet.getName();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isIs_actice() {
        return is_active;
    }

    public void setIs_active(boolean is_actice) {
        this.is_active = is_actice;
    }

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


    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
