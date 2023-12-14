package com.btlweb.server.Controller;

import com.btlweb.server.Model.DiemGiaoDichModel;
import com.btlweb.server.Model.DiemTapKetModel;
import com.btlweb.server.Service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping(path="/point")
public class PointController {
    private  final PointService pointService;

    @Autowired
    public PointController(PointService pointService) {
        this.pointService = pointService;
    }

    //lay tat ca diem tk
    @GetMapping(path = "/tapket/all")
    public List<DiemTapKetModel> getAllDtk() {
        return pointService.getAllDtk();
    }

    //lay tat ca diem giao dich bang id tket
    @GetMapping("/allgiaodich")
    public List<DiemGiaoDichModel> getAllDgdByIdTk(@RequestParam(name = "idtk") long id) {
        return pointService.getAllDgd(id);
    }

    @GetMapping("/giaodich")
    public ResponseEntity<DiemGiaoDichModel> getDgdById(@RequestParam(name = "idgd") long id) {
        DiemGiaoDichModel diemGiaoDichModel = pointService.getDgdById(id);
        if(diemGiaoDichModel == null) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(diemGiaoDichModel, HttpStatus.OK);

    }

    //them diem tap ket
    @PostMapping("/adddtk")
    @PreAuthorize("hasAuthority('LEADER')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addDtk(@RequestBody DiemTapKetModel dtk) {
        return pointService.AddDtk(dtk);
    }


    //tao diem giao dich ung vvoi diem tap ket id
    @PostMapping("/adddgd/{id}")
    @PreAuthorize("hasAuthority('LEADER')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addDtk(@RequestBody DiemGiaoDichModel giaoDichModel,@PathVariable(required = true) long id) {
        return pointService.AddDgd(giaoDichModel,id);
    }

}
