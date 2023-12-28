package com.btlweb.server.Config;

import com.btlweb.server.Security.JwtAuthencationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthencationFilter jwtAuthencationFilter;


    private final AuthenticationProvider authenticationProvider;

    private final UserDetailsService userDetailsService;


    //loc request
    @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http.cors().and().csrf()
                .disable()
                .authorizeHttpRequests().requestMatchers("/**").permitAll()
                .requestMatchers("/auth/**").permitAll()
                .requestMatchers("/order/tracuu").permitAll()
                .requestMatchers("/point/**").permitAll()
                .requestMatchers("/").hasAuthority("LEADER")
                .anyRequest().authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider) // Use authenticationProvider bean directly
                .addFilterBefore(jwtAuthencationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }




}

