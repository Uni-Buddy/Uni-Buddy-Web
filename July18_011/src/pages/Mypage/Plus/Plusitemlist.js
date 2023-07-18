import React, { Component } from "react";
import Plusitem from "./Plusitem";


// map함수를 통해 'Plusitem'들 생성
class Plusitemlist extends Component {
    render() {
        const { users, onRemove } = this.props;
        return (
            <>
                {users &&
                    users.map((user) => (
                        <Plusitem key={user.id} user={user} onRemove={onRemove} />
                    ))}
            </>
        );
    }
}

export default Plusitemlist;
