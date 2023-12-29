package com.btlweb.server.Controller;

import com.btlweb.server.FormatRequest.CreateOrderFormat;
import com.btlweb.server.Model.*;
import com.btlweb.server.Service.OrderService;
import com.btlweb.server.Service.StatusOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/order")
public class OrderController {
    private final StatusOrderService statusOrderService;
    private final OrderService orderService;

    @Autowired
    public OrderController(StatusOrderService statusOrderService, OrderService orderService) {
        this.statusOrderService = statusOrderService;
        this.orderService = orderService;
    }

    //tra cuu don hang
    @GetMapping("/tracuu")
    public OrderModel getOrderByMaVanDon(@RequestParam(name = "mavandon") String mavandon) {
        return orderService.getOrderByMaVanDon(mavandon);
    }


    //thong ke tat ca cac don hang (ldao moi dc vao)
    @GetMapping("/thongkeorder/all")
    @PreAuthorize("hasAuthority('LEADER')")
    public List<OrderModel> getAllOrders() {
        return orderService.getAllOrders();
    }

    //thong ke cac don hang TAI DIEM GIAO DICH bang trang thai (hang ma gui tai diem giao dich)
    //nvien thong ke
    @GetMapping("/thongkeorder/dgd")
    @PreAuthorize("hasAuthority('NVGD') or hasAuthority('ADMINGD')")
    public List<OrderModel> getAllOrderByStatus(@RequestParam(name = "iddgd") long iddgd,@RequestParam(name = "status") int type) {
        return orderService.getAllOrderByStatus(iddgd,type);
    }


    //thong ke hang den cac dtk. type la hanggui  hoac hangnhan(truong dtk,nvtk,ldao)
    //thong ke dua vao status order
    @GetMapping("/thongkestatusorder/dtk")
    @PreAuthorize("hasAuthority('NVTK') or hasAuthority('ADMINTK') or hasAuthority('LEADER')")
    public List<StatusDonHangModel> getAllOrdersDtkByType(@RequestParam(name = "iddtk") long id_dtk,@RequestParam(name = "type") String type) {
        return orderService.getAllOrdersDtkByType(id_dtk,type);
    }

    //thong ke hang den cac dgd.type la hanggui  hoac nhan (truong dgd,truong dtk)
    //thong ke dua vao status order
    @GetMapping("/thongkestatusorder/dgd")
    @PreAuthorize("hasAuthority('NVGD') or hasAuthority('ADMINGD') or hasAuthority('ADMINTK')")
    public List<StatusDonHangModel> getAllOrdersDgdByType(@RequestParam(name = "iddgd") long id_dgd,@RequestParam(name = "type") String type) {
        return orderService.getAllOrdersDgdByType(id_dgd,type);
    }

    //lay tat ca don hang den 1 diem tap ket tu cac diem giao dich gui den
    @GetMapping("/allstatustotkfromdgd/{idtk}")
    @PreAuthorize("hasAuthority('NVTK') or hasAuthority('ADMINTK')")
    public List<StatusDonHangModel> getAllOrdersToDtkFromDgd(@PathVariable long idtk) {
        return orderService.getAllOrdersToDtkFromDgd(idtk);
    }

    //lay tat ca don hang den 1 diem tap ket tu cac diem tapket gui den
    @GetMapping("/allstatustotkfromdtk/{idtk}")
    @PreAuthorize("hasAuthority('NVTK') or hasAuthority('ADMINTK')")
    public List<StatusDonHangModel> getAllOrdersToDtkFromDtk(@PathVariable long idtk) {
        return orderService.getAllOrdersToDtkFromDtk(idtk);
    }

    //lay tat ca don hang den 1 diem giao dich tu cac diem tap ket gui den
    @GetMapping("/allstatustogdfromdtk/{idgd}")
    @PreAuthorize("hasAuthority('NVGD') or hasAuthority('ADMINGD') or hasAuthority('ADMINTK')")
    public List<StatusDonHangModel> getAllOrdersToDgdFromDtk(@PathVariable long idgd) {
        return orderService.getAllOrdersToDgdFromDtk(idgd);
    }


    //tao don hang gui di
    //staff co the tủy cap
    @PostMapping("/createstatus/{mavandon}")
    @PreAuthorize("hasAuthority('NVTK') or hasAuthority('NVGD')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createStatusOrderModel(@RequestBody StatusDonHangModel statusOrder, @PathVariable(required = true) String mavandon) {
       if(mavandon != null) {
           return orderService.createStatusOrderModel(statusOrder,mavandon);
       } else {
           return orderService.createStatusOrderModel(statusOrder,"No");
       }
    }

    //cap nhat trang thai order ( don hang to)
    @PutMapping("/updateorder/{mavandon}")
    @PreAuthorize("hasAuthority('NVTK') or hasAuthority('NVGD')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> updateOrderStatus(@RequestBody String status,@PathVariable(required = true) String mavandon) {
            return orderService.updateOrderStatus(status,mavandon);
    }

    //create order, xac nhan don hang nguoi gui
    @PostMapping("/createorder")
    @PreAuthorize("hasAuthority('NVGD')")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> acceptAndCreateOrder(@RequestBody CreateOrderFormat createOrderFormat) {
        return orderService.createOrder(createOrderFormat);
    }

    //xac nhan don hang tai dtk
    //nvien staff co the truy cap
    @PutMapping("/xacnhandtk")
    @PreAuthorize("hasAuthority('NVTK')")
    public ResponseEntity<String> cfOrderDtk(
            @RequestParam("idtk") long idTapKet,
            @RequestParam("mavandon") String maVanDon) {
        return orderService.cfStatusOrderInDtk(idTapKet,maVanDon);
    }

    //xac nhan don hang tai dtk
    @PutMapping("/xacnhandgd")
    @PreAuthorize("hasAuthority('NVGD')")
    public ResponseEntity<String> cfOrderDgd(
            @RequestParam("idgd") long idgd,
            @RequestParam("mavandon") String maVanDon) {
        return orderService.cfStatusOrderInDgd(idgd,maVanDon);
    }

}
