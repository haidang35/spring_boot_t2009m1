package com.backend.restApi;

import com.backend.entity.District;
import com.backend.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/districts")
@CrossOrigin("*")
public class DistrictRestApi {
    @Autowired
    private DistrictService districtService;

    @GetMapping
    public List<District> getListDistrict() {
        return districtService.findAll();
    }

    @GetMapping("/seed")
    public ResponseEntity<String> seeding() {
        String[] districts = {"Cầu Giấy", "Nam Từ Liêm", "Bắc Từ Liêm", "Hoàng Mai", "Hoàn Kiếm", "Đống Đa", "Ba Đình", "Hai Bà Trưng", "Thanh Xuân"};
        for (String district : districts) {
            District newDistrict = new District();
            newDistrict.setName(district);
            districtService.save(newDistrict);
        }
        return ResponseEntity.ok("Seeding success");
    }
}
