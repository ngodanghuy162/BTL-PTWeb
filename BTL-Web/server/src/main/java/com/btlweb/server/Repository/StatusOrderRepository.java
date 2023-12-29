package com.btlweb.server.Repository;

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

    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id AND (a.type = 'GD-TK' OR a.type = 'TK-TK')")
    List<StatusDonHangModel> findAllOrderDtkReceiveByTypeAndId(@Param("id") long id_receivePlace);


//    @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id " +
//            "AND a.order.getMaVanDon() = :maVanDon " +
//            "AND (a.type = 'TK-TK' OR a.type = 'GD-TK')")
    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_receive_place = :id " +
            "AND mavandon = :mavandon " +
            "AND (type = 'TK-TK' OR type = 'GD-TK')", nativeQuery = true)
    StatusDonHangModel findByIdReceivePlaceAndMaVanDonInDtk(@Param("id")long id,@Param("mavandon") String mavandon);


   // @Query("SELECT a FROM StatusDonHangModel a WHERE a.id_receivePlace = :id AND a.order.getMaVanDon() = :maVanDon AND a.type = 'TK-GD'")
    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_receive_place = :id " +
            "AND mavandon = :mavandon " +
            "AND type = 'TK-GD'", nativeQuery = true)
    StatusDonHangModel findByIdReceivePlaceAndMaVanDonInDgd(@Param("id")long id,@Param("mavandon") String mavandon);


    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_receive_place = :id " +
            "AND type = 'GD-TK'", nativeQuery = true)
    List<StatusDonHangModel> findAllOrderToDtkFrDgd(@Param("id")long idtk);

    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_receive_place = :id " +
            "AND type = 'TK-TK'", nativeQuery = true)
    List<StatusDonHangModel> findAllOrderToDtkFrDtk(@Param("id")long idtk);


    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_receive_place = :id " +
            "AND type = 'TK-GD'", nativeQuery = true)
    List<StatusDonHangModel> findAllOrderToDgdFrDtk(@Param("id") long idgd);

    @Query(value = "SELECT * FROM statusdonhang " +
            "WHERE id_send_place = :id " +
            "AND type = 'GD-KH'", nativeQuery = true)
    StatusDonHangModel findOrderToCustomerById(@Param("id")long idgd);
}
