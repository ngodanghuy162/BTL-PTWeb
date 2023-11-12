package com.btlweb.server.Config;
import com.btlweb.server.Repository.DiemTapKetRepository;
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
