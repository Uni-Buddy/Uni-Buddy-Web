import React, { Component } from 'react';
import Plusinputform from './Plusinputform';
import Plusitemlist from './Plusitemlist';

class Plus extends Component {
    id = 0;


    //값을 담을 state 선언
    state = {
        users: []
    };


    //'Plusinputform'(자식 컴포넌트)에서 'Plus'(부모 컴포넌트) 값을 보냈을 때 데이터를 받아 정보를 users 배열에 저장하는 역할
    handleCreate = (data) => {
        //setState를 통해 값을 삽입
        //users배열에 값과 id값(각 데이터에 대한 고유한 id)을 함께 넣기 
        this.setState({
            users: this.state.users.concat({
                ...data,
                id: this.id++
            })
        });
    };


    //배열에서 데이터 삭제하기
    handleRemove = (id) => {
        const { users } = this.state;
        this.setState({
            users: users.filter((user) => user.id !== id)
        });
    };

    render() {
        return (
            <>
                {/*추가된 정보*/}
                <Plusitemlist users={this.state.users} onRemove={this.handleRemove} />
                {/*추가정보 입력란*/}
                <Plusinputform onCreate={this.handleCreate} />
            </>
        );
    };
};

export default Plus;