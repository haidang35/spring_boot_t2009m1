package com.t2009m1.spring_ecommerce.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.t2009m1.spring_ecommerce.entity.base.BaseEntity;
import com.t2009m1.spring_ecommerce.entity.entityEnum.CategoryStatus;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")
@Inheritance
public class Category extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotEmpty(message = "Name cannot be empty")
    private String name;
    private long parentId;
    private String description;
    private CategoryStatus status;
    @JsonIgnore
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private Set<Product> products;
}
