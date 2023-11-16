package com.btlweb.server.Repository;

import com.btlweb.server.Model.StaffModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends JpaRepository<StaffModel,Long> {


    @Query("SELECT a FROM StaffModel a WHERE a.id_work = :id_work AND a.is_tapket = TRUE")
    List<StaffModel> findStaffByDtkID(@Param("id_work") long id_tapket);

    @Query("SELECT a FROM StaffModel a WHERE a.id_work = :id_work AND a.is_tapket = FALSE")
    List<StaffModel> findStaffByDgdID(@Param("id_work") long id_work);
}
