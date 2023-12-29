package com.btlweb.server.Repository;

import com.btlweb.server.Model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Long> {

    @Query(value = "SELECT * FROM admin WHERE role = :role", nativeQuery = true)
    List<AdminModel> findAllAdminByRole(@Param("role") String role);

//    @Query("SELECT a FROM AdminModel a WHERE a.role = :role")
//    List<AdminModel> findAllAdminDgdByRole(String role);

    @Query("SELECT a FROM AdminModel a WHERE a.id_work = :id AND a.role = :role")
    AdminModel findAdminByIdworkAndRole(@Param("id") long id, @Param("role") String role);


    AdminModel findByUsername(String username);


    @Query("SELECT a FROM AdminModel a WHERE a.id_work = :id AND a.role = :role")
    //@Query(value = "SELECT * FROM admin_model WHERE id_workplace = :idtk AND role = :role", nativeQuery = true)
    List<AdminModel> findAllAdminDgdBydTK(@Param("id")long idtk, @Param("role")String role);


    @Query("SELECT a FROM AdminModel a WHERE a.id_work = :id AND a.role = 'ADMINGD'")
    AdminModel findAdmingdById_workplace(@Param("id") long id);
}
