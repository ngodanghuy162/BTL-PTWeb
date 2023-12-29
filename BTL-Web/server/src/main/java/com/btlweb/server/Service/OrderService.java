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

    public List<StatusDonHangModel> getAllOrdersDtkByType(long id,String type) {
        if(type.equals("hanggui")) {
            return statusOrderRepository.findAllOrderDtkSendByTypeAndId(id);
        }
        return statusOrderRepository.findAllOrderDtkReceiveByTypeAndId(id);
    }

    public OrderModel getOrderByMaVanDon(String mavandon) {
        return orderRepository.findByMavandon(mavandon);
    }

    @Transactional
    public ResponseEntity<String> cfStatusOrderInDtk(long idTapKet, String maVanDon) {
        try {
            StatusDonHangModel updateStatus = statusOrderRepository.findByIdReceivePlaceAndMaVanDonInDtk(idTapKet,maVanDon);
           if(updateStatus != null) {
               updateStatus.setTimeReceive(new Date());
               updateStatus.setStatus("Đã hoàn thành");
               statusOrderRepository.save(updateStatus);
               return new ResponseEntity<>("Xac nhan don hang " + updateStatus.getDonhangchinh().getMaVanDon() + " thanh cong", HttpStatus.OK);
           }
            return new ResponseEntity<>("Failed", HttpStatus.EXPECTATION_FAILED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> createStatusOrderModel(StatusDonHangModel statusOrder, String mavandon) {
        try {
            OrderModel order = orderRepository.findByMavandon(mavandon);
            order.setStatus("Đang vận chuyển");
            orderRepository.saveAndFlush(order);
            statusOrder.setDonhangchinh(order);
            statusOrder.setStatus("Đang vận chuyển");
            statusOrder.setTimeSend();
            statusOrderRepository.save(statusOrder);
            return new ResponseEntity<>("Tao don hang(status) van chuyen thanh cong cho don hang co ma van don"  + order.getMaVanDon() , HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed tao don hang", HttpStatus.BAD_REQUEST);
    }

    public List<OrderModel> getAllOrderByStatus(long iddgd, int type ) {
        try {
            switch (type) {
                case 1: {
                    return orderRepository.findAllByStatusAndIdSend(iddgd,"Đã tạo đơn");
                }
                case 2:{
                    return orderRepository.findAllByStatusAndIdSend(iddgd,"Đang vận chuyển");
                }
                case 3:{
                    return orderRepository.findAllByStatusAndIdSend(iddgd,"Giao hàng thành công");
                }
                case 4:{
                    return orderRepository.findAllByStatusAndIdSend(iddgd,"Giao hàng thất bại");
                }
                default:
                    return null;
            }
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

    public ResponseEntity<String> cfStatusOrderInDgd(long idGd, String maVanDon) {
        try {
            StatusDonHangModel updateStatus = statusOrderRepository.findByIdReceivePlaceAndMaVanDonInDgd(idGd,maVanDon);
            updateStatus.setTimeReceive(new Date());
            updateStatus.setStatus("Đã hoàn thành");
            statusOrderRepository.save(updateStatus);
            return new ResponseEntity<>("Xac nhan don hang " + updateStatus.getDonhangchinh().getMaVanDon() + " thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> updateOrderStatus(String status,String mavandon) {
        try {
            OrderModel orderModel = orderRepository.findByMavandon(mavandon);
            if(status.equals("Đã hoàn thành")) {
                orderModel.setDateReceive(new Date());
            }
            orderModel.setStatus(status);
            orderRepository.save(orderModel);
            return new ResponseEntity<>("Cap nhat don hang " + orderModel.getMaVanDon() + " thanh cong", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public List<StatusDonHangModel> getAllOrdersToDtkFromDgd(long idtk) {
        try {
            return statusOrderRepository.findAllOrderToDtkFrDgd(idtk);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    public List<StatusDonHangModel> getAllOrdersToDtkFromDtk(long idtk) {
        try {
            return statusOrderRepository.findAllOrderToDtkFrDtk(idtk);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<StatusDonHangModel> getAllOrdersToDgdFromDtk(long idgd) {
        try {
            return statusOrderRepository.findAllOrderToDgdFrDtk(idgd);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public ResponseEntity<String> cfStatusOrderInDgdToKh(long idgd, String maVanDon, int status) {
        try {
            OrderModel order = orderRepository.findByMavandon(maVanDon);
            StatusDonHangModel statusDonHangModel = statusOrderRepository.findOrderToCustomerById(idgd,maVanDon);
            if(status == 1) {
                order.setDateReceive(new Date());
                order.setStatus("Giao hàng thành công");
                statusDonHangModel.setTimeReceive(new Date());
                statusDonHangModel.setStatus("Giao hàng thành công");
            } else {
                statusDonHangModel.setStatus("Giao hàng thất bại");
                order.setStatus("Giao hàng thất bại");
            }
            orderRepository.saveAndFlush(order);
            statusOrderRepository.saveAndFlush(statusDonHangModel);
            return new ResponseEntity<>("Xac nhan den khach hang thanh cong", HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed update don hang", HttpStatus.BAD_REQUEST);
    }

    public List<OrderModel> getAllOrdersFail() {
        try {
            return orderRepository.findAllByStatus("Giao hàng thất bại");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<OrderModel> getAllOrdersSucess() {
        try {
            return orderRepository.findAllByStatus("Giao hàng thành công");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<OrderModel> getAllOrderCreateAtDgd(long iddgd) {
        try {
            return orderRepository.findAllOrderCreatedAtDgd(iddgd);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<StatusDonHangModel> getAllOrdersByStatusAtDgd(long idgd,int status) {
        try {
            if(status ==1) {
               return statusOrderRepository.findAllOrderAtDgdByStatus(idgd,"Giao hàng thành công");
            } else {
                return statusOrderRepository.findAllOrderAtDgdByStatus(idgd,"Giao hàng thất bại");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<StatusDonHangModel> getAllOrderToKH(long idgd) {
        try {
            return statusOrderRepository.findAllOrderToCustomer(idgd);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
