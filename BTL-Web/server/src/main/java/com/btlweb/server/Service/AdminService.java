package com.btlweb.server.Service;

import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Repository.AdminRepository;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.DiemTapKetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        String role ="truongdtk";
        return adminRepository.findAllAdminDtkByRole(role);
    }

    public List<AdminModel> getAllAdminDgd() {
        String role ="truongdgd";
        return adminRepository.findAllAdminDgdByRole(role);
    }

    public AdminModel getAdminDgd(long id) {
        return adminRepository.findAdminByIdAndRole(id,"truongdgd");
    }

    public AdminModel getAdminDtk(long id) {
        return adminRepository.findAdminByIdAndRole(id,"truongdtk");
    }
}
