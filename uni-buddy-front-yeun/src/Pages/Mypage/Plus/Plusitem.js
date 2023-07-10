import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

//삭제하기
class Plusitem extends Component {
    handleRemove = () => {
        const { user, onRemove } = this.props;
        onRemove(user.id);
    };

    render() {
        const { title, content } = this.props.user;
        return (
            <div>
                {/*추가된 정보 텍스트*/}
                <TextField
                    sx={{
                        width: { sm: 200, md: 635 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }
                    }}
                    style={{ marginBottom: 10, marginRight: 10 }}
                    id="plus"
                    label={title}
                    defaultValue={content}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                />
                {/*삭제버튼*/}
                <Button
                    style={{ marginTop: 20 }}
                    variant="outlined"
                    onClick={this.handleRemove}>삭제</Button>
            </div>
        );
    }
}

export default Plusitem;
