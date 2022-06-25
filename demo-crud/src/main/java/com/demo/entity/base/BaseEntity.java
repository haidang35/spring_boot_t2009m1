package com.demo.entity.base;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import java.time.LocalDateTime;

abstract class BaseEntity {
    @CreatedDate
    @Column
    private LocalDateTime createdAt;
    @LastModifiedDate
    @Column
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;
    private int createdBy;
    private int updatedBy;
    private int deletedBy;
}
