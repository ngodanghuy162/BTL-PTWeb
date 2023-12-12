package com.btlweb.server.Security;

import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Model.StaffModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class UserPrincipal implements UserDetails {

    private AdminModel admin;
    private StaffModel staff;

    public UserPrincipal() {
    }

    public UserPrincipal(AdminModel admin) {
            super();
            this.admin = admin;
            this.staff = null;
    }

    public UserPrincipal(StaffModel staff) {
        super();
        this.admin = null;
        this.staff = staff;
    }

    public AdminModel getAdmin() {
        return admin;
    }

    public void setAdmin(AdminModel admin) {
        this.admin = admin;
    }

    public StaffModel getStaff() {
        return staff;
    }

    public void setStaff(StaffModel staff) {
        this.staff = staff;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (admin != null) {
            return List.of(new SimpleGrantedAuthority(admin.getRole()));
        }
        if (staff != null) {
            return List.of(new SimpleGrantedAuthority(staff.getRole()));
        }
        return null;
    }

    @Override
    public String getPassword() {
        if(admin != null) {
            return admin.getPassword();
        }
        return staff.getPassword();
    }

    @Override
    public String getUsername() {
        if(admin != null) {
            return admin.getUsername();
        }
        return staff.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
