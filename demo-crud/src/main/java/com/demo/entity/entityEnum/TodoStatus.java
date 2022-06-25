package com.demo.entity.entityEnum;

public enum TodoStatus {
    DONE(1), DOING(2), CANCEL(3), UNDEFINED(4);
    private int value;
    TodoStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
