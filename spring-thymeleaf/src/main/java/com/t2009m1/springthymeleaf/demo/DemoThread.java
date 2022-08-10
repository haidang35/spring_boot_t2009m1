package com.t2009m1.springthymeleaf.demo;

import java.lang.reflect.Field;

public class DemoThread {

    public static void main(String[] args) throws IllegalAccessException {
        Product p1 = new Product(1, "Product 1");

        Category c1 = new Category(1, "Cate 1");
        hello(p1);
        hello(c1);
    }

    // day la comment
    private static void hello(Object obj) throws IllegalAccessException {
        Class clazz = obj.getClass();
        System.out.println(clazz.getSimpleName());
        System.out.println(clazz.getName());
        for (Field f :
                clazz.getDeclaredFields()) {
            f.setAccessible(true);
            System.out.println(f.getName());
            System.out.println(f.getType().getName());
            System.out.println(f.get(obj));
            if (f.isAnnotationPresent(KhoaChinh.class)) {
                System.out.println("This is khoachinh");
            }
        }
    }
}
