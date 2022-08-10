package com.demo.entity;

import com.demo.entity.entityEnum.TodoStatus;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

@Builder
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Entity
@ToString
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false)
    private int id;
    @Column
    @NotBlank(message = "Title cannot be empty")
    private String title;
    @Column
    @NotBlank(message = "Description cannot be empty")
    private String description;
    @Column
    private TodoStatus status;
}
