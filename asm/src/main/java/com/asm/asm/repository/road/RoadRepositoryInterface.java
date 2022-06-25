package com.asm.asm.repository.road;

import com.asm.asm.entity.Road;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoadRepositoryInterface extends JpaRepository<Road, Integer> {

}
