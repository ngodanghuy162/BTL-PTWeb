package com.btlweb.server.tapket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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
