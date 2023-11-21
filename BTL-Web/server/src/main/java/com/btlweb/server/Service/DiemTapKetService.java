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
public class DiemTapKetService {
    private final DiemTapKetRepository diemTapKetRepository;


    private final DiemGiaoDichRepository diemGiaoDichRepository;
    @Autowired
    public DiemTapKetService(DiemTapKetRepository diemTapKetRepository,DiemGiaoDichRepository diemGiaoDichRepository) {
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
}

