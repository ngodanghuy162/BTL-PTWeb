package com.btlweb.server.Service;

import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.DiemTapKetRepository;
import com.btlweb.server.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    private final StaffRepository staffRepository;

    private final DiemGiaoDichRepository diemGiaoDichRepository;

    private final DiemTapKetRepository diemTapKetRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public StaffService(StaffRepository staffRepository, DiemGiaoDichRepository diemGiaoDichRepository, DiemTapKetRepository diemTapKetRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.staffRepository = staffRepository;
        this.diemGiaoDichRepository = diemGiaoDichRepository;
        this.diemTapKetRepository = diemTapKetRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public List<StaffModel> getAllStaffDTK(long id_tapket) {
        return staffRepository.findStaffByDtkID(id_tapket);
    }

    public ResponseEntity<String> capTaiKhoan(StaffModel staff,String role) {
        try {
            if(role.equals("nvgd")) {
                staff.setRole("NVGD");
                DiemGiaoDichModel gd= diemGiaoDichRepository.findById(staff.getId_work()).orElse(null);
                staff.setWorkPlaceName(gd.getName());
            } else {
                staff.setRole("NVTK");
                DiemTapKetModel dtk = diemTapKetRepository.findById(staff.getId_work()).get();
                staff.setWorkPlaceName(dtk.getName());
            }
            String hashPass =  bCryptPasswordEncoder.encode(staff.getPassword());
            staff.setPassword(hashPass);
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

    public ResponseEntity<String> deleteStaffAcc(String username) {
        try {
          StaffModel staffModel =  staffRepository.findByUsername(username);
          if(staffModel == null) {
              return new ResponseEntity<String>("Khong tim thay tai khoan", HttpStatus.EXPECTATION_FAILED);
          }
          staffRepository.delete(staffModel);
            return new ResponseEntity<String>("Xoa tai khoan NV thanh cong",HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed delete staff acc", HttpStatus.BAD_REQUEST);
    }
}
