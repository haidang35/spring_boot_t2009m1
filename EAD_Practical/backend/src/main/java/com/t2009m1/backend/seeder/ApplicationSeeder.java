package com.t2009m1.backend.seeder;

import com.t2009m1.backend.repository.ProductRepository;
import com.t2009m1.backend.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ApplicationSeeder implements CommandLineRunner {
    final ProductSeeder productSeeder;
    final SaleSeeder saleSeeder;
    private static final boolean IS_SEED = true;

    @Override
    public void run(String... args) throws Exception {
        if(IS_SEED) {
            productSeeder.generate();
            saleSeeder.generate();
        }
    }
}
