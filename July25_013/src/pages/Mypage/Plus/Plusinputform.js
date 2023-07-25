import React, { Component } from "react";
import { TextField, Button } from '@mui/material';

class Plusinputform extends Component {
    //TextField의 value값을 state로 설정해주면 e.target.value를 통해 값을 받아올 수 있음
    state = {
        title: "",
        content: ""
    };

    //입력란에서 입력값이 바뀔 때마다 할생하는 change 이벤트를 처리하기 위한 handleChange()
    //TextField에 name값을 설정해준 후 setState를 호출할 때
    //[e.target.name]: e.target.value를 통해 다중 값 처리 가능
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    // 자식 컴포넌트에서 부모 컴포넌트로 값 보내기
    handleSubmit = (e) => {
        // 새로고침 방지
        e.preventDefault();
        //this.props.onCreate를 사용하여 현재 입력 받은 값을 부모 컴포넌트로 보내기
        this.props.onCreate(this.state);
        this.setState({
            //TextField값 빈값으로 초기화
            title: "",
            content: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*제목란*/}
                <TextField
                    style={{ marginRight: 10 }}
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    label="제목"
                    variant="standard"
                />
                {/*내용란*/}
                <TextField
                    sx={{
                        width: { sm: 200, md: 430 }
                    }}
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                    label="내용"
                    variant="standard"
                />

                {/*작성 버튼*/}
                <Button
                    style={{ marginLeft: 10, marginTop: 10 }}
                    variant="outlined"
                    type="submit">
                    작성
                </Button>
            </form>
        );
    }
}

export default Plusinputform;
