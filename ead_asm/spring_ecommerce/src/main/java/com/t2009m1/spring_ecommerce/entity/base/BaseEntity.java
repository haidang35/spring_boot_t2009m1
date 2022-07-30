package com.t2009m1.spring_ecommerce.entity.base;

import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseEntity {
//    @UpdateTimestamp
    public LocalDateTime createdAt;
    @UpdateTimestamp
    public LocalDateTime updatedAt;
    public LocalDateTime deletedAt;
    public long createdBy;
    public long updatedBy;
    public long deletedBy;
}
