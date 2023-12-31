package com.btlweb.server.Controller;

import com.btlweb.server.Model.*;
import com.btlweb.server.Repository.OrderRepository;
import com.btlweb.server.Repository.StatusOrderRepository;
import com.btlweb.server.Service.OrderService;
import com.btlweb.server.Service.StatusOrderService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public List<OrderModel> getAllOrders() {
        return orderService.getAllOrders();
    }

    //thong ke cac don hang bang trang thai
    //nvien thong ke
    @GetMapping("/thongkeorder/dgd")
    public List<OrderModel> getAllOrderByStatus(@RequestParam(name = "iddgd") long iddgd,@RequestParam(name = "status") String status) {
        return orderService.getAllOrderByStatus(iddgd,status);
    }


    //thong ke hang den cac dtk. type la hanggui  hoac nhan(truong dtk,ldao)
    //thong ke dua vao status order
    @GetMapping("/thongkestatusOrder/dtk")
    public List<StatusDonHangModel> getAllOrdersDtkByType(@RequestParam(name = "id_dtk") long id_dtk,@RequestParam(name = "type") String type) {
        return orderService.getAllOrdersDtkByType(id_dtk,type);
    }

    //thong ke hang den cac dgd.type la hanggui  hoac nhan (truong dgd,truong dtk)
    //thong ke dua vao status order
    @GetMapping("/thongkestatusOrder/dgd")
    public List<StatusDonHangModel> getAllOrdersDgdByType(@RequestParam(name = "id_dgd") long id_dgd,@RequestParam(name = "type") String type) {
        return orderService.getAllOrdersDgdByType(id_dgd,type);
    }

    //tao don hang gui di
    //staff co the tủy cap
    @PostMapping("createstatus/{mavandon}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createOrderStatus(@RequestBody StatusDonHangModel statusOrder, @PathVariable(required = false) String mavandon) {
       if(mavandon != null) {
           return orderService.createOrderStatus(statusOrder,mavandon);
       } else {
           return orderService.createOrderStatus(statusOrder,"No");
       }
    }

    //create order, xac nhan don hang nguoi gui
    @PostMapping("createorder")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> acceptAndCreateOrder(@RequestBody CreateOrderFormat createOrderFormat) {
        return orderService.createOrder(createOrderFormat);
    }

    //xac nhan don hang tai dtk
    //nvien staff co the truy cap
    @PutMapping("/xacnhandtk")
    public ResponseEntity<String> xacNhanStatusOrder(
            @RequestParam("id_tapket") long idTapKet,
            @RequestParam("mavandon") String maVanDon,
            @RequestBody UpdateStatusOrderFormat updateStatusOrderFormat) {
        return orderService.xacnhanStatusOrder(idTapKet,maVanDon,updateStatusOrderFormat);
    }

}
