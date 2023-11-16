package com.btlweb.server.Controller;

import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/qltk")
public class AdminController {
    private  final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    //lay tat ca tk admin
    @GetMapping("/dtk/all")
    public List<AdminModel> getAllAdminDtk() {
        return adminService.getAllAdminDtk();
    }


    //lay tk admid dgd bang iddgd
    @GetMapping("/dgd/{id}")
    public AdminModel getAdminDgd(@PathVariable long id ) {
        return adminService.getAdminDgd(id);
    }

    //lay tk admid dtk bang id dtk
    @GetMapping("/dtk/{id}")
    public AdminModel getAdminDtk(@PathVariable long id) {
        return adminService.getAdminDtk(id);
    }

}
