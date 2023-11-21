package com.btlweb.server.Controller;

import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Repository.DiemTapKetRepository;
import com.btlweb.server.Service.DiemTapKetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    //them diem tap ket
    @PostMapping("/adddtk")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addDtk(@RequestBody DiemTapKetModel dtk) {
        return dtkService.AddDtk(dtk);
    }

    //tao diem giao dich ung vvoi diem tap ket id
    @PostMapping("/adddgd/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addDtk(@RequestBody DiemGiaoDichModel giaoDichModel,@PathVariable(required = false) long id) {
        return dtkService.AddDgd(giaoDichModel,id);
    }
}
