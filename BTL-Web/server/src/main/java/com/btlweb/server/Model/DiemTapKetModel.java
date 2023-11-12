package com.btlweb.server.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name="diemtapket")
public class DiemTapKetModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "province")
    private String province;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_leader_acc",referencedColumnName = "id")
//    @JsonIgnore
//    private AdminModel admin;


    @OneToMany(mappedBy = "diemtapket",fetch = FetchType.LAZY)
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

    public DiemTapKetModel(Long id, String name, String province) {
        this.id = id;
        this.name = name;
        this.province = province;
    }

    public Long getId() {
        return id;
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

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

}
