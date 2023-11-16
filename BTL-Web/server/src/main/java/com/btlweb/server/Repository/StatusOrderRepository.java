package com.btlweb.server.Repository;

import com.btlweb.server.Model.OrderModel;
import com.btlweb.server.Model.StatusOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusOrderRepository extends JpaRepository<StatusOrderModel,Long> {

    @Query("SELECT a FROM StatusOrderModel a WHERE a.id_receivePlace = :id AND a.type = 'TK-GD'")
    List<StatusOrderModel> findAllOrderDgdReceiveByTypeAndId(@Param("id") long id_receivePlace);

    @Query("SELECT a FROM StatusOrderModel a WHERE a.id_sendPlace = :id AND (a.type = 'GD-TK' OR a.type = 'GD-KH')")
    List<StatusOrderModel> findAllOrderDgdSendByTypeAndId(@Param("id") long id_sendPlace);

    @Query("SELECT a FROM StatusOrderModel a WHERE a.id_sendPlace = :id AND (a.type = 'TK-GD' OR a.type = 'TK-TK')")
    List<StatusOrderModel> findAllOrderDtkSendByTypeAndId(@Param("id") long id_sendPlace);

    @Query("SELECT a FROM StatusOrderModel a WHERE a.id_receivePlace = :id AND a.type = 'TK-TK'")
    List<StatusOrderModel> findAllOrderDtkReceiveByTypeAndId(@Param("id") long id_receivePlace);


    @Query("SELECT a FROM StatusOrderModel a WHERE a.id_receivePlace = :id AND a.order.getMaVanDon() = :maVanDon")
    StatusOrderModel findByIdReceivePlaceAndMaVanDon(long id, String maVanDon);
}
