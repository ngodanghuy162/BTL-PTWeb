package com.btlweb.server.Service;

import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    private  final StaffRepository staffRepository;

    @Autowired
    public StaffService(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    public List<StaffModel> getAllStaffDTK(long id_tapket) {
        return staffRepository.findStaffByDtkID(id_tapket);
    }

    public ResponseEntity<String> capTaiKhoan(StaffModel staff,String role) {
        try {
            if(role.equals("nvgd")) {
                staff.setRole("NVGD");
            } else {
                staff.setRole("NVTK");
            }
            staffRepository.saveAndFlush(staff);
            return new ResponseEntity<String>("Them tai khoan NV thanh cong",HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add new staff acc", HttpStatus.BAD_REQUEST);
    }

    public List<StaffModel> getAllStaffDGD(long id_work) {
        return staffRepository.findStaffByDgdID(id_work);
    }

    public StaffModel getStaffInfo(String username) {
        return staffRepository.findByUsername(username);
    }
}
