package com.btlweb.server.Controller;

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

    private DiemTapKetRepository dtkRepository;

    @Autowired
    public DiemTapKetController(DiemTapKetService diemTapKetService) {
        this.dtkService = diemTapKetService;
    }

    @GetMapping
    public List<DiemTapKetModel> diemTapKetList() {
        return dtkService.getAllDtk();
    }


}
