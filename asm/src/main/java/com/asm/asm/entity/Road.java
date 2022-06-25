package com.asm.asm.entity;

import com.asm.asm.entity.entityEnum.RoadStatus;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "roads")
public class Road {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private LocalDateTime foundingDate;
    private String description;
    private RoadStatus status;
    @ManyToOne
    @JoinColumn(name = "districtId", nullable = false)
    private District district;
}
