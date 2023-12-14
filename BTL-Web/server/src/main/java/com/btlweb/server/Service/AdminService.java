package com.btlweb.server.Service;

import com.btlweb.server.FormatRequest.UpdateAdminAccountFormat;
import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Repository.AdminRepository;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.DiemTapKetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AdminService {
    private final DiemTapKetRepository diemTapKetRepository;

    private final DiemGiaoDichRepository diemGiaoDichRepository;

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(DiemTapKetRepository diemTapKetRepository, DiemGiaoDichRepository diemGiaoDichRepository, AdminRepository adminRepository) {
        this.diemTapKetRepository = diemTapKetRepository;
        this.diemGiaoDichRepository = diemGiaoDichRepository;
        this.adminRepository = adminRepository;
    }


    public List<AdminModel> getAllAdminDtk() {
        String role ="ADMINTK";
        return adminRepository.findAllAdminDtkByRole(role);
    }

    public List<AdminModel> getAllAdminDgd() {
        String role ="ADMINGD";
        return adminRepository.findAllAdminDgdByRole(role);
    }

    public AdminModel getAdminDgd(long id) {
        return adminRepository.findAdminByIdAndRole(id,"ADMINGD");
    }

    public AdminModel getAdminDtk(long id) {
        return adminRepository.findAdminByIdAndRole(id,"ADMINTK");
    }

    public List<AdminModel> getAllAdminGDByDTK(long idtk) {
        String role ="ADMINGD";
        List<DiemGiaoDichModel> list = diemGiaoDichRepository.findAllByDiemTapKetId(idtk);
        List<AdminModel> rs = new ArrayList<>();
        for(int i = 0; i < list.size(); i++) {
            rs.add(adminRepository.findById_workplace(list.get(i).getId()));
        }
        return rs;
    }

    public ResponseEntity<String> addAdmin(AdminModel adminModel) {
        try {
            adminRepository.save(adminModel);
            return new ResponseEntity<String>("Cap TK Thanh Cong", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>("Failed add new Diem tap ket", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> deleteAdmin(String username) {
        try {
            AdminModel adminM = adminRepository.findByUsername(username);
            adminRepository.delete(adminM);
            return new ResponseEntity<>("Xoa TK Thanh Cong", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed delete", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> updateAdAccount(String username, UpdateAdminAccountFormat format) {
        try {
            AdminModel adminM = adminRepository.findByUsername(username);
            if(!format.getName().isEmpty()) {
                adminM.setName(format.getName());
            }
            if(!format.getUsername().isEmpty()) {
                adminM.setUsername(format.getUsername());
            }
            if(!format.getPassword().isEmpty()) {
                adminM.setPassword(format.getPassword());
            }
            adminRepository.saveAndFlush(adminM);
            return new ResponseEntity<>("Update OK", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed Update", HttpStatus.BAD_REQUEST);
        }
    }

    public AdminModel getAdminByUsername(String username) {
        return adminRepository.findByUsername(username);
    }
}
