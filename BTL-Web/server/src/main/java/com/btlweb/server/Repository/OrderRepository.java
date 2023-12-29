package com.btlweb.server.Repository;

import com.btlweb.server.Model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel,Long> {
    List<OrderModel> findAllByStatus(String status);

    List findAllOrderDgdSendByTypeAndId(long id, String s);

   OrderModel findByMavandon(String mavandon);

    //@Query("SELECT a FROM OrderModel a WHERE a.diemGiaoDichGui.getId() = :iddgd AND a.status = :status")
    @Query(value = "SELECT * FROM donhang a WHERE a.id_diemgdgui = :iddgd AND a.status = :status", nativeQuery = true)
    List<OrderModel> findAllByStatusAndIdSend(@Param("iddgd") long iddgd,@Param("status") String status);

    @Query(value = "SELECT * FROM donhang a WHERE a.id_diemgdgui = :iddgd", nativeQuery = true)
    List<OrderModel> findAllOrderCreatedAtDgd(long iddgd);

}
