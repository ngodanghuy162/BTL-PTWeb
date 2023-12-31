package com.btlweb.server.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "staff")
public class StaffModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String username;
    private String password;
    private String phoneNumber;
    private String workPlace;
    private boolean is_tapket;
    private long id_work;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workPlace) {
        this.workPlace = workPlace;
    }

    public boolean isIs_tapket() {
        return is_tapket;
    }

    public void setIs_tapket(boolean is_tapket) {
        this.is_tapket = is_tapket;
    }

    public long getId_work() {
        return id_work;
    }

    public void setId_work(long id_work) {
        this.id_work = id_work;
    }

    public StaffModel() {
    }

    public StaffModel(long id, String name, String username, String password, String phoneNumber, String workPlace, boolean is_tapket, long id_work) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.workPlace = workPlace;
        this.is_tapket = is_tapket;
        this.id_work = id_work;
    }
}
