import React, { useState } from "react";
import UserItem from "../UserItem";
// import Modal from "react-modal";

import { Button, Table, Input, Modal, ModalHeader, } from "reactstrap";

const listUsers = [
  {
    id: 1,
    name: "Vũ Tiến An",
    email: "anvt96@gmail.com",
    role: "ReactJS",
  },
  {
    id: 2,
    name: "Messi",
    email: "anvt96@gmail.com",
    role: "NodeJS",
  },
  {
    id: 3,
    name: "Ronaldo",
    email: "anvt96@gmail.com",
    role: "Javascript",
  },
  {
    id: 4,
    name: "Neymar",
    email: "anvt96@gmail.com",
    role: "TypeScript",
  },
];

const initUser = {
  name: "",
  email: "",
  role: "",
  isEdit: false,
};

// Modal.setAppElement("#root");

function Home() {
  const [userInput, setUserInput] = useState(initUser);
  // console.log(userInput);

  const [users, setUsers] = useState(listUsers);
  const [list, setList] = useState(listUsers);
  const [modal, setModal] = useState(false);
  //const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  const clickOnModal = () => {
    setModal(!modal);
  };

  const [searchText, setSearchText] = useState("");

  const [role, setRole] = useState("");

  const submitForm = () => {
    const newUserList = [...users];
    const filterData = newUserList.filter((item) => item.id === currentUser);
    if (currentUser) {
      //tìm ra id để update
      const index = newUserList.indexOf(filterData[0]);
      console.log("index", index, newUserList[index], newUserList);
      newUserList[index] = userInput;
      console.log("newlistuser", newUserList);
      setUserInput(newUserList);
      setUsers(newUserList);
      setList(newUserList);
    } else {
      // add user
      console.log("test", newUserList[newUserList.length - 1]);
      newUserList.push({ ...userInput, id: users[users.length - 1].id + 1 });
      console.log(newUserList, userInput);
      setUsers(newUserList);
      setUserInput(initUser);
      setCurrentUser(null);
      setList(newUserList);
    }
    clickOnModal();
  };

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleUpdate = (id, name) => {
    setCurrentUser(id);

    const newUserList = [...users];
    const filterData = newUserList.filter((item) => item.id === id);
    // console.log('=====',filterData)
    setUserInput({ ...filterData[0], isEdit: true });
    clickOnModal();

    console.log(filterData);
    console.log("update id:", id + " có tên user: ", name);
  };

  const handleDelete = (userList) => {
    // const newUserList = [...users];

    // newUserList.splice(index, 1);
    // setUsers(newUserList)
    // console.log(item.id)
    setUsers((prev) => {
      return prev.filter((item) => item.id !== userList.id);
    });
    setList((prev) => {
      return prev.filter((item) => item.id !== userList.id);
    });
  };

  const handleSearch = (event) => {
    const text = event.target.value;

    setSearchText(text);
    const newUserList = [...list];
    console.log("aaa", text, newUserList);
    const filterData = newUserList.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log("filterData", filterData);
    setUsers(filterData);
  };

  const handleSelect = (e) => {
    const roleSelected = e.target.value;
    const newUserList = [...list];
    setRole(roleSelected);
    const selectRole = newUserList.filter((item) => item.role === roleSelected);
    if (roleSelected === "") {
      setUsers(newUserList);
    } else {
      setUsers(selectRole);
    }
    //setList(selectRole)
    console.log(selectRole);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Button
        style={{ verticalAlign: "baseline", marginRight: "150px" }}
        color="primary"
        onClick={clickOnModal}
      >
        Add User
      </Button>
      <Input
        style={{ width: "50%", display: "inline-block" }}
        type="text"
        name="test"
        value={searchText}
        placeholder="Search by name"
        onChange={handleSearch}
      />

      <Table hover>
        <thead>User Info</thead>
        <Modal isOpen={modal} onRequestClose={clickOnModal}>
          <ModalHeader toggle={clickOnModal}>
            Add User
          </ModalHeader>
          <Table>
            <tbody>
              <tr>
                <th>
                  <label>Name</label>
                </th>
                <td>
                  <Input
                    className="col-3"
                    name="name"
                    value={userInput.name}
                    onChange={handleChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Email</label>
                </th>
                <td>
                  <Input
                    className="col-3"
                    name="email"
                    value={userInput.email}
                    onChange={handleChangeInput}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Role</label>
                </th>
                <td>
                  <Input
                    className="col-3"
                    name="role"
                    value={userInput.role}
                    onChange={handleChangeInput}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Button style={{margin:'15px'}} color="primary" onClick={submitForm}>
            Add
          </Button>
          {/* <Button onClick={clickOnModal}>
            Close
          </Button> */}
        </Modal>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role
            <select value={role} onChange={handleSelect} style={{marginLeft:'20px'}}>
              <option value="">...</option>
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Javascript">Javascript</option>
              <option value="TypeScript">TypeScript</option>
            </select>
          </th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {users.map((user, index) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            onClickUpdate={() => handleUpdate(user.id, user.name)}
            onClickDelete={() => handleDelete(user)}
          />
        ))}
      </Table>
    </div>
  );
}

export default Home;
