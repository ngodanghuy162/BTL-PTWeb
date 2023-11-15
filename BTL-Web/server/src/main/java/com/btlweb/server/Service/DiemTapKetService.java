package com.btlweb.server.Service;
import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.DiemTapKetRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
