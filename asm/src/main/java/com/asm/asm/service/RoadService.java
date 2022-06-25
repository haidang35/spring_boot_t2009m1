package com.asm.asm.service;

import com.asm.asm.entity.Road;
import com.asm.asm.repository.road.RoadRepositoryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoadService {
    @Autowired
    private RoadRepositoryInterface roadRepository;

    public List<Road> findAll() {
        return roadRepository.findAll();
    }

}
