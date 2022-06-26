package com.backend.entity;

import com.backend.entity.entityEnum.RoadStatus;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "streets")
@ToString
public class Street {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    private String name;
    @NotNull
    private LocalDate foundingDate;
    private String description;
    @NotNull
    private RoadStatus status;
    @NotNull
//    private int districtId;
    @ManyToOne
    @JoinColumn(name = "districtId", nullable = false)
    private District district;
}
