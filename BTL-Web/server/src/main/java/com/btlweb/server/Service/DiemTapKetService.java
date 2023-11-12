package com.btlweb.server.Service;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Repository.DiemTapKetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DiemTapKetService {
    private final DiemTapKetRepository diemTapKetRepository;
    @Autowired
    public DiemTapKetService(DiemTapKetRepository diemTapKetRepository) {
        this.diemTapKetRepository = diemTapKetRepository;
    }

    public List<DiemTapKetModel> getAllDtk() {
        return diemTapKetRepository.findAll();
    }
}
