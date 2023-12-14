package com.btlweb.server.Model;

import jakarta.persistence.*;


@Entity
@Table(name = "admin")
public class AdminModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    //id_role is id work place: gtk,dgd
    private int id_workplace;
    private String name;

    private String username;

    private String password;

    private String role;

    public AdminModel() {
    }

    public AdminModel(long id, int id_workplace, String name, String username, String password, String role) {
        this.id = id;
        this.id_workplace = id_workplace;
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setId_workplace(int id_workplace) {
        this.id_workplace = id_workplace;
    }


    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public int getId_workplace() {
        return id_workplace;
    }


}