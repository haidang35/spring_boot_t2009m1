package com.t2009m1.search;

import lombok.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderSpecification implements Specification<Order> {
    private SearchCriteria criteria;

    @Override
    public Predicate toPredicate
            (Root<Order> root, CriteriaQuery<?> query, CriteriaBuilder builder) {

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

   /* public static Specification<Order> hasDistrictWithId(int districtId) {
        return (Root<Order> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
            Join<Order, OrderDetail> districtStreets = root.join("district");
            return builder.equal(districtStreets.get("id"), districtId);
        };
    }*/
}
