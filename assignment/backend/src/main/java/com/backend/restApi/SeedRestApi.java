package com.backend.restApi;

import com.backend.entity.District;
import com.backend.entity.Street;
import com.backend.entity.entityEnum.RoadStatus;
import com.backend.service.DistrictService;
import com.backend.service.StreetService;
import org.hibernate.engine.spi.SessionLazyDelegator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.time.LocalDate;

@RestController
@RequestMapping(path = "/api/v1/seed/generate")
public class SeedRestApi {
    @Autowired
    private DistrictService districtService;
    @Autowired
    private StreetService streetService;
    @PersistenceContext
    private EntityManager entityManager;
    private static final String TRUNCATE_TABLE_STREET = "TRUNCATE TABLE streets; ";
    private static final String TRUNCATE_TABLE_DISTRICT = "TRUNCATE TABLE districts;";
    private static final String DISABLE_FOREIGN_KEY_CHECK = "SET FOREIGN_KEY_CHECKS = 0;";
    private static final String ENABLE_FOREIGN_KEY_CHECK = "SET FOREIGN_KEY_CHECKS = 1;";

    @GetMapping
    @Transactional
    public ResponseEntity<String> seeding() {
        entityManager.createNativeQuery(DISABLE_FOREIGN_KEY_CHECK).executeUpdate();
        entityManager.createNativeQuery(TRUNCATE_TABLE_STREET).executeUpdate();
        entityManager.createNativeQuery(TRUNCATE_TABLE_DISTRICT).executeUpdate();
        entityManager.createNativeQuery(ENABLE_FOREIGN_KEY_CHECK).executeUpdate();
        String[] districts = {"Cầu Giấy", "Nam Từ Liêm", "Bắc Từ Liêm", "Hoàng Mai", "Hoàn Kiếm", "Đống Đa", "Ba Đình", "Hai Bà Trưng", "Thanh Xuân"};
        for (String district : districts) {
            districtService.save(District.builder()
                    .name(district).build());
        }
        streetService.save(Street.builder()
                        .name("Hoàng Quốc Việt")
                        .district(District.builder().id(1).build())
                        .foundingDate(LocalDate.now())
                        .status(RoadStatus.USING)
                        .build());
        streetService.save(Street.builder()
                .name("Trần Duy Hưng")
                .district(District.builder().id(1).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Phạm Hùng")
                .district(District.builder().id(2).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Mỹ Đình")
                .district(District.builder().id(2).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Phạm Văn Đồng")
                .district(District.builder().id(3).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Cổ Nhuế")
                .district(District.builder().id(3).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Giải Phóng")
                .district(District.builder().id(4).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Giáp Bát")
                .district(District.builder().id(4).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Hàng Bồ")
                .district(District.builder().id(5).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        streetService.save(Street.builder()
                .name("Hàng Mã")
                .district(District.builder().id(5).build())
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        return ResponseEntity.ok("Seeding success");
    }
}
