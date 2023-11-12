package com.btlweb.server.Repository;
import com.btlweb.server.Model.DiemTapKetModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiemTapKetRepository extends JpaRepository<DiemTapKetModel,Integer>{

    // select * from studentmodel where email = ?
//    @Query(value = "SELECT s from web-dtb.student_model s where s.email= ?1")
    Optional<DiemTapKetModel> findById(int id);

}
