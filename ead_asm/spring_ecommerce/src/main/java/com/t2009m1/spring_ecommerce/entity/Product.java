package com.t2009m1.spring_ecommerce.entity;

import com.t2009m1.spring_ecommerce.entity.base.BaseEntity;
import com.t2009m1.spring_ecommerce.entity.entityEnum.ProductStatus;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
@Inheritance
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotEmpty(message = "Name cannot be empty")
    private String name;
    @NotEmpty(message = "Thumbnail cannot be empty")
    private String thumbnail;
    private double unitPrice;
    private int quantity;
    @Column(columnDefinition = "text")
    private String description;
    @Column(columnDefinition = "text")
    private String details;
    private ProductStatus status;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
