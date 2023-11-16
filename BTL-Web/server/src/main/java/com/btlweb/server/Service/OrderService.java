package com.btlweb.server.Service;

import com.btlweb.server.Model.OrderModel;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Model.StatusOrderModel;
import com.btlweb.server.Model.UpdateStatusOrderFormat;
import com.btlweb.server.Repository.OrderRepository;
import com.btlweb.server.Repository.StatusOrderRepository;
import jakarta.persistence.Transient;
import jakarta.transaction.Transactional;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final StatusOrderRepository statusOrderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, StatusOrderRepository statusOrderRepository) {
        this.orderRepository = orderRepository;
        this.statusOrderRepository = statusOrderRepository;
    }

    public List<OrderModel> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<StatusOrderModel> getAllOrdersDgdByType(long id, String type) {

        if (type.equals("hangnhan")) {
            return statusOrderRepository.findAllOrderDgdReceiveByTypeAndId(id);
        } else {
           return statusOrderRepository.findAllOrderDgdSendByTypeAndId(id);
        }

    }

    public List<StatusOrderModel> getAllOrdersDtkByType(long id,String status) {
        if(status.equals("hanggui")) {
            return statusOrderRepository.findAllOrderDtkSendByTypeAndId(id);
        } else
        return statusOrderRepository.findAllOrderDtkReceiveByTypeAndId(id);
    }

    public OrderModel getOrderByMaVanDon(String mavandon) {
        return orderRepository.findByMavandon(mavandon);
    }

    @Transactional
    public ResponseEntity<String> xacnhanStatusOrder(long idTapKet, String maVanDon, UpdateStatusOrderFormat updateStatusOrderFormat) {
        try {
            StatusOrderModel updateStatus = statusOrderRepository.findByIdReceivePlaceAndMaVanDon(idTapKet,maVanDon);
            updateStatus.setTimeReceive(updateStatusOrderFormat.getTimeReceive());
            updateStatus.setStatus(updateStatus.getStatus());
            statusOrderRepository.save(updateStatus);
            return new ResponseEntity<String>("Xac nhan don hang " + updateStatus.getMavandon() + " thanh cong" , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> createOrderStatus(StatusOrderModel statusOrder, String mavandon) {
        try {
            OrderModel order = orderRepository.findByMavandon(mavandon);
            statusOrder.setOrder(order);
            statusOrder.setMavandon(order.getMaVanDon());
            statusOrderRepository.save(statusOrder);
            return new ResponseEntity<String>("Tao don hang van chuyen thanh cong cho don hang co ma van don"  + order.getMaVanDon() , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public List<OrderModel> getAllOrderByStatus(long iddgd, String status) {
        try {
            return orderRepository.findAllByStatusAndIdReceive(iddgd,status);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Transactional
    public ResponseEntity<String> createOrder(OrderModel orderModel) {
        try {
            orderRepository.saveAndFlush(orderModel);
            return new ResponseEntity<String>("Tao don hang cho khach hang thanh cong,don hang co ma van don"  + orderModel.getMaVanDon() , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<String>("Xac nhan don hang khach hang that bai", HttpStatus.BAD_REQUEST);
    }
}
