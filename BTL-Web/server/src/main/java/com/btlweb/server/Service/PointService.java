package com.btlweb.server.Service;
import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.DiemTapKetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PointService {
    private final DiemTapKetRepository diemTapKetRepository;


    private final DiemGiaoDichRepository diemGiaoDichRepository;
    @Autowired
    public PointService(DiemTapKetRepository diemTapKetRepository, DiemGiaoDichRepository diemGiaoDichRepository) {
        this.diemTapKetRepository = diemTapKetRepository;
        this.diemGiaoDichRepository = diemGiaoDichRepository;
    }

    public List<DiemTapKetModel> getAllDtk() {
        return diemTapKetRepository.findAll();
    }

    public List<DiemGiaoDichModel> getAllDgd(long idTapket) {
        return diemGiaoDichRepository.findAllByDiemTapKetId(idTapket);
    }

    public ResponseEntity<String> AddDtk(DiemTapKetModel dtk) {
        try {
            diemTapKetRepository.saveAndFlush(dtk);
            return new ResponseEntity<String>("Them diem tap ket thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add new Diem tap ket", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> AddDgd(DiemGiaoDichModel giaoDichModel, long id) {
        try {
            DiemTapKetModel dtk = diemTapKetRepository.findById(id).orElse(null);
            if(dtk != null) {
                giaoDichModel.setDiemTapKet(dtk);
            }
            diemGiaoDichRepository.saveAndFlush(giaoDichModel);
            return new ResponseEntity<String>("Them diem giao dich thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add giao dich", HttpStatus.BAD_REQUEST);
    }

    public DiemGiaoDichModel getDgdById(long id) {
        return diemGiaoDichRepository.findById(id).orElse(null);
    }

    public DiemTapKetModel getDtkById(long id) {
        return diemTapKetRepository.findById(id).get();
    }

    public ResponseEntity<String> updateDtk(String address, String name, long id) {
        try {
            DiemTapKetModel dtk = diemTapKetRepository.findById(id).orElse(null);
            if(dtk == null) {
                new ResponseEntity<String>("Failed to find", HttpStatus.BAD_REQUEST);
            }
            dtk.setAddress(address);
            dtk.setName(name);
            diemTapKetRepository.saveAndFlush(dtk);
            return new ResponseEntity<String>("Success", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add giao dich", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> changeStatusDtk(boolean is_active, long id) {
        try {
            DiemTapKetModel dtk = diemTapKetRepository.findById(id).orElse(null);
            if(dtk == null) {
                new ResponseEntity<String>("Failed to find", HttpStatus.BAD_REQUEST);
            }
            dtk.setIs_active(is_active);
            diemTapKetRepository.saveAndFlush(dtk);
            return new ResponseEntity<String>("Success", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add giao dich", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> deleteDtk(long id) {
        try {
            DiemTapKetModel dtk = diemTapKetRepository.findById(id).orElse(null);
            if(dtk != null) {
                diemTapKetRepository.delete(dtk);
                new ResponseEntity<String>("Success", HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<String>("Failed", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed delete giao dich", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> updateDgd(String address, String name, long id) {
        try {
            DiemGiaoDichModel dgd = diemGiaoDichRepository.findById(id).orElse(null);
            if(dgd == null) {
                new ResponseEntity<String>("Failed to find", HttpStatus.BAD_REQUEST);
            }
            dgd.setAddress(address);
            dgd.setName(name);
            diemGiaoDichRepository.saveAndFlush(dgd);
            return new ResponseEntity<String>("Success", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed update giao dich", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> changeStatusDgd(boolean is_active, long id) {
        try {
            DiemGiaoDichModel dgd = diemGiaoDichRepository.findById(id).orElse(null);
            if(dgd == null) {
                new ResponseEntity<String>("Failed to find", HttpStatus.BAD_REQUEST);
            }
            dgd.setIs_active(is_active);
            diemGiaoDichRepository.saveAndFlush(dgd);
            return new ResponseEntity<String>("Success", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed update giao dich", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> deleteDgd(long id) {
        try {
            DiemGiaoDichModel giaoDichModel = diemGiaoDichRepository.findById(id).orElse(null);
            if(giaoDichModel != null) {
                diemGiaoDichRepository.delete(giaoDichModel);
                new ResponseEntity<String>("Success", HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<String>("Failed", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed add giao dich", HttpStatus.BAD_REQUEST);
    }
}

