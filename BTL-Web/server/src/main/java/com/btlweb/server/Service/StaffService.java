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

    public ResponseEntity<String> capTaiKhoan(StaffModel staff,Long id) {
        try {
            if(id != -1L) {
                staff.setId_work(id);
            }
            staff.setRole("NVGD");
            staffRepository.saveAndFlush(staff);
            return new ResponseEntity<String>("Them tai khoan thanh cong",HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add new staff acc", HttpStatus.BAD_REQUEST);
    }

    public List<StaffModel> getAllStaffDGD(long id_work) {
        return staffRepository.findStaffByDgdID(id_work);
    }
}
