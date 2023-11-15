package com.btlweb.server.Controller;

import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Repository.DiemTapKetRepository;
import com.btlweb.server.Service.DiemTapKetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path="/tapket")
public class DiemTapKetController {
    private  final DiemTapKetService dtkService;


    @Autowired
    public DiemTapKetController(DiemTapKetService diemTapKetService) {
        this.dtkService = diemTapKetService;
    }

    //lay tk diem tk
    @GetMapping(path = "/all")
    public List<DiemTapKetModel> diemTapKetList() {
        return dtkService.getAllDtk();
    }

    //lay tat ca diem giao dich bang id tket
    @GetMapping("/allgiaodich/{id}")
    public List<DiemGiaoDichModel> diemGiaoDich(@PathVariable long id) {
        return dtkService.getAllDgd(id);
    }

}
