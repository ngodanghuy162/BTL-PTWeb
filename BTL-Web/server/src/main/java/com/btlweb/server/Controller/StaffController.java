package com.btlweb.server.Controller;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @GetMapping("/qlnvtk/{id_tapket}")
    public List<StaffModel> getAllStaffDTK(@PathVariable(name = "id_tapket") long id_tapket) {
        return staffService.getAllStaffDTK(id_tapket);
    }

    // xem ds nhan vien diem tap ket
    @GetMapping("/qlnvgd/{id_work}")
    public List<StaffModel> getAllStaffDGD(@PathVariable(name = "id_work") long id_work) {
        return staffService.getAllStaffDGD(id_work);
    }


    //cap tk cho nvien giao dich
    @PostMapping("/captaikhoangiaodichvien/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addStaffGdgAcount(@RequestBody StaffModel staff,@PathVariable(required = false) Long id) {
        if(id != null) {
            return staffService.capTaiKhoan(staff,id);
        }
         else
             return staffService.capTaiKhoan(staff,-1L);
    }
}
