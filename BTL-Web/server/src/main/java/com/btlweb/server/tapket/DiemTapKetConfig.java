package com.btlweb.server.tapket;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DiemTapKetConfig {

    @Bean
    CommandLineRunner commandLineRunner(DiemTapKetRepository diemTapKetRepository) {
        return args -> {
            diemTapKetRepository.findAll();
        };
    }

}
