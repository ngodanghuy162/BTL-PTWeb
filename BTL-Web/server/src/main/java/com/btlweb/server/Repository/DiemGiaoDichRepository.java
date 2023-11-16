package com.btlweb.server.Repository;

import com.btlweb.server.Model.DiemGiaoDichModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiemGiaoDichRepository extends JpaRepository<DiemGiaoDichModel,Long> {

    @Query("SELECT d FROM DiemGiaoDichModel d WHERE d.diemTapKet.id = :idTapKet")
    List<DiemGiaoDichModel> findAllByDiemTapKetId(@Param("idTapKet") long idTapKet);

}
