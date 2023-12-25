package com.btlweb.server.Service;

import com.btlweb.server.FormatRequest.CreateOrderFormat;
import com.btlweb.server.Model.OrderModel;
import com.btlweb.server.Model.StatusDonHangModel;
import com.btlweb.server.Repository.DiemGiaoDichRepository;
import com.btlweb.server.Repository.OrderRepository;
import com.btlweb.server.Repository.StatusOrderRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final StatusOrderRepository statusOrderRepository;
    @Autowired
    private DiemGiaoDichRepository diemGiaoDichRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, StatusOrderRepository statusOrderRepository) {
        this.orderRepository = orderRepository;
        this.statusOrderRepository = statusOrderRepository;
    }

    public List<OrderModel> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<StatusDonHangModel> getAllOrdersDgdByType(long id, String type) {
        if (type.equals("hangnhan")) {
            return statusOrderRepository.findAllOrderDgdReceiveByTypeAndId(id);
        } else {
           return statusOrderRepository.findAllOrderDgdSendByTypeAndId(id);
        }

    }

    public List<StatusDonHangModel> getAllOrdersDtkByType(long id,String status) {
        if(status.equals("hanggui")) {
            return statusOrderRepository.findAllOrderDtkSendByTypeAndId(id);
        }
        return statusOrderRepository.findAllOrderDtkReceiveByTypeAndId(id);
    }

    public OrderModel getOrderByMaVanDon(String mavandon) {
        return orderRepository.findByMavandon(mavandon);
    }

    @Transactional
    public ResponseEntity<String> cfStatusOrderInDtk(long idTapKet, String maVanDon, String status) {
        try {
            StatusDonHangModel updateStatus = statusOrderRepository.findByIdReceivePlaceAndMaVanDonInDtk(idTapKet,maVanDon);
            updateStatus.setTimeReceive(new Date());
            updateStatus.setStatus(status);
            statusOrderRepository.save(updateStatus);
            return new ResponseEntity<>("Xac nhan don hang " + updateStatus.getDonhangchinh().getMaVanDon() + " thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> createOrderStatus(StatusDonHangModel statusOrder, String mavandon) {
        try {
            OrderModel order = orderRepository.findByMavandon(mavandon);
            statusOrder.setDonhangchinh(order);
            statusOrderRepository.save(statusOrder);
            return new ResponseEntity<>("Tao don hang(status) van chuyen thanh cong cho don hang co ma van don"  + order.getMaVanDon() , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed tao don hang", HttpStatus.BAD_REQUEST);
    }

    public List<OrderModel> getAllOrderByStatus(long iddgd, String status) {
        try {
            return orderRepository.findAllByStatusAndIdSend(iddgd,status);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Transactional
    public ResponseEntity<String> createOrder(CreateOrderFormat createOrderFormat) {
        try {
            OrderModel newOrder = new OrderModel(createOrderFormat);
            newOrder.setDateSend(new Date());
            diemGiaoDichRepository.findById(createOrderFormat.getId_diemgiaodichtao()).ifPresent(newOrder::setDiemGiaoDichGui);
            orderRepository.saveAndFlush(newOrder);
            return new ResponseEntity<>("Tao don hang cho khach hang thanh cong,don hang co ma van don:"  + newOrder.getMaVanDon() , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Xac nhan don hang khach hang that bai", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> cfStatusOrderInDgd(long idGd, String maVanDon, String status) {
        try {
            StatusDonHangModel updateStatus = statusOrderRepository.findByIdReceivePlaceAndMaVanDonInDgd(idGd,maVanDon);
            updateStatus.setTimeReceive(new Date());
            updateStatus.setStatus(status);
            statusOrderRepository.save(updateStatus);
            return new ResponseEntity<>("Xac nhan don hang " + updateStatus.getDonhangchinh().getMaVanDon() + " thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> updateOrderStatus(String status, String mavandon) {
        try {
            OrderModel orderModel = orderRepository.findByMavandon(mavandon);
            orderModel.setDateReceive(new Date());
            orderModel.setStatus(status);
            orderRepository.save(orderModel);
            return new ResponseEntity<>("Cap nhat don hang " + orderModel.getMaVanDon() + " thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }
}
