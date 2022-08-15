import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import {
  Button,
  Row,
  Col,
  Input,
  Table,
  Modal,
  Select,
  DatePicker,
} from "antd";
import { Radio } from "antd";

import {
  getUsers,
  deleteUser,
  updateUser,
  addUser,
} from "../../../services/actions/usersAction";
import { $Space, $Input, $TextArea } from "../../antd";

import "./Users.scss";

const Users = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [recordId, setRecordId] = useState("");
  const [updateUser, setUpdateUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    Address: "",
    phone: null,
    DOB: "",
    userName: "",
    password: "",
    userRoleId: "",
  });
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddNewModel, setShowAddNewModel] = useState(false);

  let userData = [];
  let userRoalsData = [];
  userData = useSelector((state) => state.USERS);
  userRoalsData = useSelector((state) => state.USER_ROALS);

  // coloms of the table
  const showActions = (record) => {
    return (
      <$Space size="middle">
        <FormOutlined
          className="action-icons"
          // onClick={() => editModel(record)}
        />

        <DeleteOutlined
          className="action-icons delete-icon"
          // onClick={() => deleteModel(record)}
        />
      </$Space>
    );
  };

  const convert_DOB = (dataIndex) => {
    let DOB = "";
    let date = new Date(dataIndex).getDate();
    let month = new Date(dataIndex).getMonth();
    let year = new Date(dataIndex).getFullYear();
    DOB = `${date}/${month}/${year}`;
    return DOB;
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "DOB",
      dataIndex: "DOB",
      key: "dob",
      render: (dataIndex, record) => convert_DOB(dataIndex),
    },
    {
      title: "Action",
      key: "action",
      width: "7%",
      render: (_, record) => showActions(record),
    },
  ];

  //////////////// models ///////////////////////

  const showModal = () => {
    setShowDeleteModel(true);
    setShowEditModel(true);
    setShowAddNewModel(true);
  };

  const handleOk = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    // setUpdateMedicine({
    //   ...updateMedicine,
    //   categoryId: "",
    //   name: "",
    //   description: "",
    //   doctrorApproval: null,
    //   price: "",
    // });
  };

  const handleCancel = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    // setUpdateMedicine({
    //   ...updateMedicine,
    //   categoryId: "",
    //   name: "",
    //   description: "",
    //   doctrorApproval: null,
    // });
  };

  // const deleteModel = (record) => {
  //   setShowDeleteModel(true);
  //   setRecordId(record._id);
  // };

  // const handleDelete = () => {
  //   dispatch(deleteMedicines(recordId));
  //   setShowDeleteModel(false);
  //   handleCancel();
  // };

  // const editModel = (record) => {
  //   setUpdateMedicine({
  //     ...updateMedicine,
  //     categoryId: record.categoryId,
  //     name: record.name,
  //     description: record.description,
  //     doctrorApproval: record.doctrorApproval,
  //   });
  //   setShowEditModel(true);
  //   setRecordId(record._id);
  // };

  // const handleEdit = () => {
  //   // console.log(updateCategory);
  //   dispatch(updateMedicines(recordId, updateMedicine));
  //   handleCancel();
  // };

  const addNew = () => {
    setShowAddNewModel(true);
  };

  const handleAdd = () => {
    dispatch(addUser(updateUser));
    handleCancel();
  };

  return (
    <div className="category-container">
      <div className="category-title">
        <h2>USER ROLE DETAILS</h2>
      </div>
      <div className="category-header">
        <div className="search-bar">
          <Row>
            <Col span={4}>
              <Button
                className="add-btn"
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                // onClick={addNew}
              >
                Add
              </Button>
            </Col>
            <Col span={16}>
              <Input
                placeholder="Search Medicines"
                size="large"
                value={searchText}
                // onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col span={4}>
              <Button
                className="search-btn"
                size="large"
                type="primary"
                // onClick={searchUserRole}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="category-body">
        <Table dataSource={userData} columns={columns} pagination={false} />

        {/* Add modal */}
        <Modal
          visible={showAddNewModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={"modal-container"}>
            <div>
              <Row>
                <Col>
                  <p>User ID :</p>
                </Col>
                <Col>
                  <Select
                    defaultValue=""
                    className="modal-inputs"
                    value={updateUser.userId}
                    style={{
                      width: 300,
                      marginBottom: "20px",
                      marginLeft: "20px",
                    }}
                    onChange={(value) =>
                      setUpdateUser({
                        ...updateUser,
                        userId: value,
                      })
                    }
                  >
                    {categories.map((prop, index) => (
                      <Select.Option key={index} value={prop._id}>
                        {prop.categoryName}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>User ID :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.name}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        userId: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>First Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.firstName}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Last Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.lastName}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Last Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.lastName}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Email :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.email}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        email: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Address :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.Address}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        Address: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Phone :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUser.phone}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        phone: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>DOB :</p>
                </Col>
                <Col>
                  <DatePicker onChange={console.log(date)} />
                  {/* <Input
                    value={updateUser.phone}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        phone: e.target.value,
                      })
                    }
                  /> */}
                </Col>
              </Row>
            </div>
            <div className="modal-btns">
              <Button className="save-btn" type="primary" onClick={handleAdd}>
                Save
              </Button>
              <Button
                className="cancel-btn"
                type="primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
