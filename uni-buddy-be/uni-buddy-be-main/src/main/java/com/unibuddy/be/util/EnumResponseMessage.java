package com.unibuddy.be.util;

public enum EnumResponseMessage {
    SUCCESS("SUCCESS", "성공"),
    FAIL("FAIL", "실패");

    private final String name;
    private final String value;

    private EnumResponseMessage(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return this.name;
    }

    public String getValue() {
        return this.value;
    }
}
