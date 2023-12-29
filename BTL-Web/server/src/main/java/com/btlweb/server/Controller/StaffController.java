package com.btlweb.server.Controller;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
public class StaffController {
   private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    // xem ds nhan vien diem tap ket
    @GetMapping("/qlnvtk")
    @PreAuthorize("hasAuthority('LEADER') or hasAuthority('ADMINTK')")
    public List<StaffModel> getAllStaffDTK(@RequestParam(name = "idwork") long id_work) {
        return staffService.getAllStaffDTK(id_work);
    }

    //LAY THONG TIN TK
    @GetMapping("/getinfo")
    @PreAuthorize("hasAuthority('NVGD') or hasAuthority('NVTK')")
    public StaffModel getAccInfo(@RequestParam(name = "username") String username) {
        return staffService.getStaffInfo(username);
    }

    // xem ds nhan vien diem GD
    @GetMapping("/qlnvgd")
    @PreAuthorize("hasAuthority('LEADER') or hasAuthority('ADMINGD')")
    public List<StaffModel> getAllStaffDGD(@RequestParam(name = "idwork") long id_work) {
        return staffService.getAllStaffDGD(id_work);
    }


    //cap tk cho nvien
    @PostMapping("/captknv/{role}")
    @PreAuthorize("hasAuthority('ADMINGD') or hasAuthority('ADMINTK')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addStaffAcc(@PathVariable(name = "role")String role, @RequestBody StaffModel staff) {
        return staffService.capTaiKhoan(staff, role);
    }

    @DeleteMapping("/delete/{username}")
    @PreAuthorize("hasAuthority('ADMINGD') or hasAuthority('ADMINTK')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> deleteStaff(@PathVariable(name = "username") String username) {
        return staffService.deleteStaffAcc(username);
    }

}
