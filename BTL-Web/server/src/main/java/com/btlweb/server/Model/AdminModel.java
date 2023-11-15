package com.btlweb.server.Model;

import jakarta.persistence.*;


@Entity
@Table(name = "admin")
public class AdminModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int id_role;
    private String name;

    private String username;

    private String password;

    private String role;

    public AdminModel() {
        // Hàm tạo không tham số mặc định
    }

    public AdminModel(long id, int id_role, String name, String username, String password, String role) {
        this.id = id;
        this.id_role = id_role;
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

    public void setId_role(int id_role) {
        this.id_role = id_role;
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

    public int getId_role() {
        return id_role;
    }


}