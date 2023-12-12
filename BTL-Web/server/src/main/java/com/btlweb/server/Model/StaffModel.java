package com.btlweb.server.Model;

import com.btlweb.server.Security.Role;
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

    private String workPlaceName;

    private String role;
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

    public String getWorkPlaceName() {
        return workPlaceName;
    }

    public void setWorkPlaceName(String workPlace) {
        this.workPlaceName = workPlace;
    }

    public long getId_work() {
        return id_work;
    }

    public void setId_work(long id_work) {
        this.id_work = id_work;
    }

    public StaffModel() {
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public StaffModel(String name, String username, String password, String phoneNumber, String workPlaceName, String role, long id_work) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.workPlaceName = workPlaceName;
        this.role = role;
        this.id_work = id_work;
    }
}
