package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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

    @Column(name = "province")
    private String province;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_leader_acc",referencedColumnName = "id")
//    @JsonIgnore
//    private AdminModel admin;


    @OneToMany(mappedBy = "diemTapKet",fetch = FetchType.LAZY)
    //JsonManagedReference
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private List<DiemGiaoDichModel> diemGiaoDichModelList;

    public List<DiemGiaoDichModel> getDiemGiaoDichModelList() {
        return diemGiaoDichModelList;
    }

    public void setDiemGiaoDichModelList(List<DiemGiaoDichModel> diemGiaoDichModelList) {
        this.diemGiaoDichModelList = diemGiaoDichModelList;
    }

    public DiemTapKetModel() {
    }

    public DiemTapKetModel(long id, String name, String province) {
        this.id = id;
        this.name = name;
        this.province = province;
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

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

}
