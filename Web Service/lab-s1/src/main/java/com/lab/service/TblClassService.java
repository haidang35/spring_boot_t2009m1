package com.lab.service;

import com.lab.entity.TblClass;
import com.lab.repository.TblClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TblClassService {
    final TblClassRepository tblClassRepository;
    
    public List<TblClass> findAll() {
        return tblClassRepository.findAll();
    }
    
    public Optional<TblClass> findById(long id) {
        return tblClassRepository.findById(id);
    }

    public TblClass save(TblClass tblClass) {
        return tblClassRepository.save(tblClass);
    }

    public TblClass update(long id, TblClass tblClassUpdate) {
        Optional<TblClass> tblClassOptional = tblClassRepository.findById(id);
        if(tblClassOptional.isPresent()) {
            TblClass tblClass = tblClassOptional.get();
            tblClass.setName(tblClassUpdate.getName());
            tblClass.setRoom(tblClassUpdate.getRoom());
            tblClass.setNote(tblClassUpdate.getNote());
            return tblClassRepository.save(tblClass);
        }
        return null;
    }

    public boolean delete(long id) {
        Optional<TblClass> tblClassOptional = tblClassRepository.findById(id);
        if(tblClassOptional.isPresent()) {
            tblClassRepository.delete(tblClassOptional.get());
            return true;
        }
        return false;
    }
}
