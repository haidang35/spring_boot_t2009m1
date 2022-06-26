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
    public ResponseEntity<List<District>> getListDistrict() {
        return ResponseEntity.ok(districtService.findAll());
    }
}
