package com.backend.specification;

import com.backend.entity.District;
import com.backend.entity.Street;
import lombok.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StreetSpecification implements Specification<Street> {
    private SearchCriteria criteria;

    @Override
    public Predicate toPredicate
            (Root<Street> root, CriteriaQuery<?> query, CriteriaBuilder builder) {

        if (criteria.getOperation().equalsIgnoreCase(">")) {
            return builder.greaterThanOrEqualTo(
                    root.<String> get(criteria.getKey()), criteria.getValue().toString());
        }
        else if (criteria.getOperation().equalsIgnoreCase("<")) {
            return builder.lessThanOrEqualTo(
                    root.<String> get(criteria.getKey()), criteria.getValue().toString());
        }
        else if (criteria.getOperation().equalsIgnoreCase(":")) {
            if (root.get(criteria.getKey()).getJavaType() == String.class) {
                return builder.like(
                        root.<String>get(criteria.getKey()), "%" + criteria.getValue() + "%");
            } else {
                return builder.equal(root.get(criteria.getKey()), criteria.getValue());
            }
        }
        return null;
    }

    public static Specification<Street> hasDistrictWithId(int districtId) {
        return (Root<Street> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
            Join<Street, District> districtStreets = root.join("district");
            return builder.equal(districtStreets.get("id"), districtId);
        };
    }
}
