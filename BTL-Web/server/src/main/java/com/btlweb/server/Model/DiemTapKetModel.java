package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name="diemtapket")
public class DiemTapKetModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    public DiemTapKetModel(long id, String name, String address, boolean is_active, List<DiemGiaoDichModel> diemGiaoDichModelList) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.is_active = is_active;
        this.diemGiaoDichModelList = diemGiaoDichModelList;
    }

    @Column(name = "is_active")
    private boolean is_active;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_leader_acc",referencedColumnName = "id")
//    @JsonIgnore
//    private AdminModel admin;


    @OneToMany(mappedBy = "diemTapKet",fetch = FetchType.LAZY)
    //JsonManagedReference
    @JsonManagedReference
    private List<DiemGiaoDichModel> diemGiaoDichModelList;

    public List<DiemGiaoDichModel> getDiemGiaoDichModelList() {
        return diemGiaoDichModelList;
    }

    public void setDiemGiaoDichModelList(List<DiemGiaoDichModel> diemGiaoDichModelList) {
        this.diemGiaoDichModelList = diemGiaoDichModelList;
    }

    public DiemTapKetModel() {
    }

    public DiemTapKetModel(long id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
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


}
