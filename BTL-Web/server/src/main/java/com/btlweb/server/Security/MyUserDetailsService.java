package com.btlweb.server.Security;

import com.btlweb.server.Model.AdminModel;
import com.btlweb.server.Model.StaffModel;
import com.btlweb.server.Repository.AdminRepository;
import com.btlweb.server.Repository.StaffRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyUserDetailsService implements UserDetailsService {


    private final StaffRepository staffRepository;

    private final AdminRepository adminRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminModel admin = adminRepository.findByUsername(username);
        StaffModel staff = staffRepository.findByUsername(username);
        if(admin != null) {
            return new UserPrincipal(admin);
        } else if (staff != null) {
            return new UserPrincipal(staff);
        } else {
            throw new UsernameNotFoundException("Cannot found username: " + username);
        }
    }

    public Object getUserInfoByUsername(String username) throws UsernameNotFoundException {
        AdminModel admin = adminRepository.findByUsername(username);
        StaffModel staff = staffRepository.findByUsername(username);
        if(admin != null) {
            return admin;
        } else if (staff != null) {
            return staff;
        } else {
            throw new UsernameNotFoundException("Cannot found username: " + username);
        }
    }
}
