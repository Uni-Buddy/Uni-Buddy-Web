package com.unibuddy.be.util;

import lombok.Data;

@Data
public class ResponseMessage {
    private int status;
    private String message;
    private Object data;

    public ResponseMessage() {
        this.status = EnumResponseCode.OK.getValue();
        this.message = null;
        this.data = null;
    }
}
