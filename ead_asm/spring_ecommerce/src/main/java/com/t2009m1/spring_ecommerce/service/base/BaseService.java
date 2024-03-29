package com.t2009m1.spring_ecommerce.service.base;

import java.util.List;

public interface BaseService{
    List<?> findAll();
    Object findById(long id);
    Object save(Object object);
    boolean delete(long id);
    boolean update(long id, Object object);
}
