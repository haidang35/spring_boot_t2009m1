package com.backend.restApi;

import com.backend.entity.District;
import com.backend.entity.Street;
import com.backend.service.DistrictService;
import com.backend.service.StreetService;
import com.backend.specification.StreetSpecification;
import com.backend.specification.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/streets")
@CrossOrigin("*")
public class StreetRestApi {
    @Autowired
    private StreetService streetService;
    @Autowired
    private DistrictService districtService;

    @GetMapping
    public ResponseEntity<List<Street>> getRoadList(@RequestParam(required = false) String name, @RequestParam(required = false) int districtId) {
        StreetSpecification spec1 = new StreetSpecification(new SearchCriteria("name", ":", name));
//        StreetSpecificatiSon spec2 = new StreetSpecification(new SearchCriteria("districtId", ":", districtId));
        if(name.length() > 0 && districtId > 0) {
            return ResponseEntity.ok(streetService.findAll(Specification.where(spec1).and(StreetSpecification.hasDistrictWithId(districtId))));
        }else if(name.length() > 0) {
            return ResponseEntity.ok(streetService.findAll(Specification.where(spec1)));
        }else if(districtId > 0) {
            return ResponseEntity.ok(streetService.findAll(Specification.where(StreetSpecification.hasDistrictWithId(districtId))));
        }
        return ResponseEntity.ok(streetService.findAll());
    }

    @PostMapping
    public ResponseEntity<Street> createNewRoad(@Valid @RequestBody Street street) {
        Optional<District> district = districtService.findById(street.getDistrict().getId());
        if(!district.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }
        street.setDistrict(district.get());
        Street streetSaved = streetService.save(street);
        return ResponseEntity.ok(streetSaved);
    }
}
