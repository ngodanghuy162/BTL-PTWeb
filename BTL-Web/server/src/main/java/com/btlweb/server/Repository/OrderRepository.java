package com.btlweb.server.Repository;

import com.btlweb.server.Model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel,Long> {
    List<OrderModel> findAllByStatus(String status);

    List findAllOrderDgdSendByTypeAndId(long id, String s);

   OrderModel findByMavandon(String mavandon);

    @Query("SELECT a FROM OrderModel a WHERE a.diemGiaoDichNhan.getId() = :iddgd AND a.status = :status")
    List<OrderModel> findAllByStatusAndIdReceive(long iddgd, String status);
}
