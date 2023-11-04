package com.btlweb.server.tapket;

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


//    @DeleteMapping(path = "{studentID}")
//    public void deleteStd(@PathVariable("studentID") Long id) {
//        dtkService.deleteStd(id);
//    }
//
//    @PutMapping(path = "{studentID}")
//    public void updateStd(@PathVariable("studentID") Long id,
//                          @RequestParam(required = false) String name,
//                          @RequestParam(required = false) String email,
//                          @RequestParam(required = false) String date) {
//        dtkService.updateStd(id,name,email,date);
//    }
}
