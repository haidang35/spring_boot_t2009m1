package com.t2009m1.springthymeleaf.demo;

public class Product {

    public Product(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Product() {
    }

    @KhoaChinh(isAutoIncrement = true)
    private int id;
    private String name;
}
