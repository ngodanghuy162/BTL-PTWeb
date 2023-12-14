package com.btlweb.server.Repository;

import com.btlweb.server.Model.OrderModel;
import com.btlweb.server.Model.StatusDonHangModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusOrderRepository extends JpaRepository<StatusDonHangModel,Long> {

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id AND a.type = 'TK-GD'")
    List<StatusDonHangModel> findAllOrderDgdReceiveByTypeAndId(@Param("id") long id_receivePlace);

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_sendPlace = :id AND (a.type = 'GD-TK' OR a.type = 'GD-KH')")
    List<StatusDonHangModel> findAllOrderDgdSendByTypeAndId(@Param("id") long id_sendPlace);

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_sendPlace = :id AND (a.type = 'TK-GD' OR a.type = 'TK-TK')")
    List<StatusDonHangModel> findAllOrderDtkSendByTypeAndId(@Param("id") long id_sendPlace);

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id AND a.type = 'TK-TK'")
    List<StatusDonHangModel> findAllOrderDtkReceiveByTypeAndId(@Param("id") long id_receivePlace);


    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id " +
            "AND a.order.getMaVanDon() = :maVanDon " +
            "AND (a.type = 'TK-TK' OR a.type = 'GD-TK')")
    StatusDonHangModel findByIdReceivePlaceAndMaVanDonInDtk(long id, String maVanDon);

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id AND a.order.getMaVanDon() = :maVanDon AND a.type = 'TK-GD'")
    StatusDonHangModel findByIdReceivePlaceAndMaVanDonInDgd(long id, String maVanDon);
}
