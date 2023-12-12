package com.btlweb.server.Repository;

import com.btlweb.server.Model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Long> {
    List<AdminModel> findAllAdminDtkByRole(String role);

    List<AdminModel> findAllAdminDgdByRole(String role);

    @Query("SELECT a FROM AdminModel a WHERE a.id_role = :id AND a.role = :role")
    AdminModel findAdminByIdAndRole(@Param("id") long id, @Param("role") String role);


    AdminModel findByUsername(String username);
}
