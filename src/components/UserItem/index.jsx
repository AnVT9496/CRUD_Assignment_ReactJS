import React from 'react';


function UserItem({id, name, email, role, onClickUpdate, onClickDelete}) {
    return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td><button 
                    style={{backgroundColor:'yellow'}}
                    onClick={onClickUpdate}
                        >Update
                    </button>
                </td>
                <td><button 
                    style={{backgroundColor:'red'}}
                    onClick={onClickDelete}
                        >Delete
                    </button>
                </td>
            </tr>
    );
}

export default UserItem;