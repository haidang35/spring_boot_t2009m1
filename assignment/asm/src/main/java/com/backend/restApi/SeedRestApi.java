package com.backend.restApi;

import com.backend.entity.District;
import com.backend.entity.Road;
import com.backend.entity.entityEnum.RoadStatus;
import com.backend.service.DistrictService;
import com.backend.service.RoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping(path = "/api/v1/seed/generate")
public class SeedRestApi {
    @Autowired
    private DistrictService districtService;
    @Autowired
    private RoadService roadService;

    @GetMapping
    @Query(
            value = "TRUNCATE TABLE roads; TRUNCATE TABLE districts;",
            nativeQuery = true
    )
    public ResponseEntity<String> seeding() {
        String[] districts = {"Cầu Giấy", "Nam Từ Liêm", "Bắc Từ Liêm", "Hoàng Mai", "Hoàn Kiếm", "Đống Đa", "Ba Đình", "Hai Bà Trưng", "Thanh Xuân"};
        for (String district : districts) {
            districtService.save(District.builder()
                    .name(district).build());
        }
        roadService.save(Road.builder()
                        .name("Hoàng Quốc Việt")
                        .districtId(1)
                        .foundingDate(LocalDate.now())
                        .status(RoadStatus.USING)
                        .build());
        roadService.save(Road.builder()
                .name("Trần Duy Hưng")
                .districtId(1)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Phạm Hùng")
                .districtId(2)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Mỹ Đình")
                .districtId(2)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Phạm Văn Đồng")
                .districtId(3)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Cổ Nhuế")
                .districtId(3)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Giải Phóng")
                .districtId(4)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Giáp Bát")
                .districtId(4)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Hàng Bồ")
                .districtId(5)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        roadService.save(Road.builder()
                .name("Hàng Mã")
                .districtId(5)
                .foundingDate(LocalDate.now())
                .status(RoadStatus.USING)
                .build());
        return ResponseEntity.ok("Seeding success");
    }
}
