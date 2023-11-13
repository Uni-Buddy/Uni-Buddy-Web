package com.unibuddy.be.util;

public enum EnumResponseCode {
    OK("OK", 200),
    FAIL("FAIL", 900);

    private final String name;
    private final int value;

    EnumResponseCode(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return this.name;
    }

    public int getValue() {
        return this.value;
    }

}
