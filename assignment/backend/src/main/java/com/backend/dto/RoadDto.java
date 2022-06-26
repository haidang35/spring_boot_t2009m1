package com.backend.dto;

import com.backend.entity.District;
import com.backend.entity.entityEnum.RoadStatus;
import com.sun.istack.NotNull;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RoadDto {
    private int id;
    @NotNull
    private String name;
    @NotNull
    private LocalDate foundingDate;
    private String description;
    @NotNull
    private RoadStatus status;
    @NotNull
    private int districtId;
    private District district;
}
