import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Button, Row, Col, Input, Table, Modal, Select } from "antd";
import { Radio } from "antd";

import {
  getUserRoles,
  deleteUserRoal,
  updateUserRoal,
  addUserRoal,
} from "../../../services/actions/userRoalsAction";
import { $Space, $Input, $TextArea } from "../../antd";

import "./UserRoals.scss";

const UserRoals = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [recordId, setRecordId] = useState("");
  const [updateUserRole, setUpdateUserRole] = useState({
    roleName: "",
    accessLevel: "",
    description: "",
  });
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddNewModel, setShowAddNewModel] = useState(false);

  let medicines = [];
  let userRoalsData = [];
  medicines = useSelector((state) => state.MEDICINES);
  userRoalsData = useSelector((state) => state.USER_ROALS);

  // coloms of the table
  const showActions = (record) => {
    return (
      <$Space size="middle">
        <FormOutlined
          className="action-icons"
          onClick={() => editModel(record)}
        />

        <DeleteOutlined
          className="action-icons delete-icon"
          onClick={() => deleteModel(record)}
        />
      </$Space>
    );
  };

  const columns = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      width: "7%",
      render: (_, record) => showActions(record),
    },
  ];

  ///////////////// search functions //////////////////////////
  const obj = {
    roleName: searchText,
  };

  const searchUserRole = () => {
    dispatch(getUserRoles(obj));
  };

  let categories = [];
  categories = useSelector((state) => state.CATEGORIES);
  ///////////////// search functions //////////////////////////

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
    setUpdateUserRole({
      ...updateUserRole,
      roleName: "",
      accessLevel: "",
      description: "",
    });
  };

  const handleCancel = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    setUpdateUserRole({
      ...updateUserRole,
      roleName: "",
      accessLevel: "",
      description: "",
    });
  };

  const deleteModel = (record) => {
    setShowDeleteModel(true);
    setRecordId(record._id);
  };

  const handleDelete = () => {
    dispatch(deleteUserRoal(recordId));
    setShowDeleteModel(false);
    handleCancel();
  };

  const editModel = (record) => {
    setUpdateUserRole({
      ...updateUserRole,
      roleName: record.roleName,
      accessLevel: record.accessLevel,
      description: record.description,
    });
    setShowEditModel(true);
    setRecordId(record._id);
  };

  const handleEdit = () => {
    dispatch(updateUserRoal(recordId, updateUserRole));
    handleCancel();
  };

  const addNew = () => {
    setShowAddNewModel(true);
  };

  const handleAdd = () => {
    dispatch(addUserRoal(updateUserRole));
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
                onClick={addNew}
              >
                Add
              </Button>
            </Col>
            <Col span={16}>
              <Input
                placeholder="Search Medicines"
                size="large"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col span={4}>
              <Button
                className="search-btn"
                size="large"
                type="primary"
                onClick={searchUserRole}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="category-body">
        <Table
          dataSource={userRoalsData}
          columns={columns}
          pagination={false}
        />

        {/* edit modal */}
        <Modal
          visible={showEditModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={"modal-container"}>
            <div>
              <Row>
                <Col>
                  <p>Role Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUserRole.roleName}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        roleName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Access Level :</p>
                </Col>
                <Col>
                  <Input
                    style={{ marginLeft: "20px", width: "300px" }}
                    value={updateUserRole.accessLevel}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        accessLevel: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Description :</p>
                </Col>
                <Col>
                  <Input
                    style={{ marginLeft: "20px", width: "300px" }}
                    value={updateUserRole.description}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        description: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </div>
            <div className="modal-btns">
              <Button className="save-btn" type="primary" onClick={handleEdit}>
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

        {/* Modals */}
        {/* delete modal */}
        <Modal
          visible={showDeleteModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={"modal-container"}>
            <h3>Are you sure want to delete this User Role ??</h3>
            <div className="modal-btns">
              <Button
                className="save-btn"
                type="primary"
                onClick={handleDelete}
              >
                Yes
              </Button>
              <Button
                className="cancel-btn"
                type="primary"
                onClick={handleCancel}
              >
                No
              </Button>
            </div>
          </div>
        </Modal>

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
                  <p>Role Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateUserRole.roleName}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        roleName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Access Level :</p>
                </Col>
                <Col>
                  <Input
                    style={{ marginLeft: "20px", width: "300px" }}
                    value={updateUserRole.accessLevel}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        accessLevel: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Description :</p>
                </Col>
                <Col>
                  <Input
                    style={{ marginLeft: "20px", width: "300px" }}
                    value={updateUserRole.description}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateUserRole({
                        ...updateUserRole,
                        description: e.target.value,
                      })
                    }
                  />
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

export default UserRoals;
