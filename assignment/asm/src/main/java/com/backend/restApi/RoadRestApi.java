package com.backend.restApi;

import com.backend.dto.RoadDto;
import com.backend.entity.District;
import com.backend.entity.Road;
import com.backend.service.DistrictService;
import com.backend.service.RoadService;
import com.backend.specification.RoadSpecification;
import com.backend.specification.SearchCriteria;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/roads")
@CrossOrigin("*")
public class RoadRestApi {
    @Autowired
    private RoadService roadService;
    @Autowired
    private DistrictService districtService;

    @GetMapping
    public ResponseEntity<List<Road>> getRoadList(@RequestParam(required = false) String name, @RequestParam(required = false) int districtId) {
        RoadSpecification spec1 = new RoadSpecification(new SearchCriteria("name", ":", name));
        RoadSpecification spec2 = new RoadSpecification(new SearchCriteria("districtId", ":", districtId));
        if(name.length() > 0 && districtId >0) {
            return ResponseEntity.ok(roadService.findAll(Specification.where(spec1).and(spec2)));
        }else if(name.length() > 0) {
            return ResponseEntity.ok(roadService.findAll(Specification.where(spec1)));
        }else if(districtId > 0) {
            return ResponseEntity.ok(roadService.findAll(Specification.where(spec2)));
        }
        return ResponseEntity.ok(roadService.findAll());
    }

    @PostMapping
    public ResponseEntity<Road> createNewRoad(@Valid @RequestBody Road road) {
        Road roadSaved = roadService.save(road);
        return ResponseEntity.ok(roadSaved);
    }
}
