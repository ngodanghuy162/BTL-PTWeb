package com.btlweb.server.Controller;

import com.btlweb.server.FormatRequest.UpdateAdminAccountFormat;
import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path="/admin")
public class AdminController {
    private  final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    //lay tat ca tk admin cac diem tapket
    @GetMapping("/admintk/all")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<List<AdminModel>> getAllAdminDtk() {
        List<AdminModel> adminModels = adminService.getAllAdminDtk();
        return new ResponseEntity<>(adminModels, HttpStatus.OK);
    }

    // Lay tk admid dgd bang id_gd
    @GetMapping("/admingd")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<AdminModel> getAdminDgd(@RequestParam(name = "idgd") long idgd) {
        AdminModel adminModel = adminService.getAdminDgd(idgd);
        return new ResponseEntity<>(adminModel, HttpStatus.OK);
    }

    // Lay tk admid dtk bang id dtk
    @GetMapping("/admintk")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<AdminModel> getAdminDtk(@RequestParam(name = "idtk") long idtk) {
        AdminModel adminModel = adminService.getAdminDtk(idtk);
        return new ResponseEntity<>(adminModel, HttpStatus.OK);
    }

    //lay tat ca tk admin gaio dich bang id diem tapket
    @GetMapping("/admingd/all")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<List<AdminModel>> getAdminGDOffDTK(@RequestParam long idtk) {
        List<AdminModel> adminModels = adminService.getAllAdminGDByDTK(idtk);
        if(adminModels.size() ==0) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>(adminModels, HttpStatus.OK);
    }

//    @GetMapping("/dtk/dgd")
//    @PreAuthorize("hasAuthority('LEADER')")
//    public ResponseEntity<List<AdminModel>> getAllAdminInDtk(@RequestParam long idtk) {
//        List<AdminModel> adminModels = adminService.getAllAdminGDByDTK(idtk);
//        if(adminModels.size() ==0) {
//            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
//        }
//        return new ResponseEntity<>(adminModels, HttpStatus.OK);
//    }

    //lay thong tin tk cua admin
    @GetMapping("/getinfo")
    @PreAuthorize("hasAuthority('LEADER') OR hasAuthority('ADMINTK') OR hasAuthority('ADMINGD')")
    public ResponseEntity<AdminModel> getInfoAdminAcc(@RequestParam(name = "username") String username) {
        AdminModel adminModel = adminService.getAdminByUsername(username);
        if(adminModel != null) {
            return new ResponseEntity<>(adminModel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }


    //cap tk
    @PostMapping("/captk")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<String> AddAdmin(AdminModel adminModel) {
        return adminService.addAdmin(adminModel);
    }


    //delete admin acount by username( /delete/username)
    @DeleteMapping("/delete")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<String> deleteAdmin(@PathVariable(name = "username") String username) {
        return adminService.deleteAdmin(username);
    }

    //update admin acount by username( /update/username)
    @PutMapping("/update")
    @PreAuthorize("hasAuthority('LEADER')")
    public ResponseEntity<String> updateAdAccount(@PathVariable(name = "username") String username, @RequestBody UpdateAdminAccountFormat format) {
        return adminService.updateAdAccount(username,format);
    }
}
