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
  getFromStore,
  deleteStore,
  updateStores,
  addStore,
} from "../../../services/actions/storeAction";
import { $Space, $Input, $TextArea } from "../../antd";

import "./Store.scss";

const Store = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [recordId, setRecordId] = useState("");
  const [updateStore, setUpdateStore] = useState({
    medicineId: "",
    price: null,
    quantity: null,
  });
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddNewModel, setShowAddNewModel] = useState(false);

  let medicines = [];
  let store = [];
  medicines = useSelector((state) => state.MEDICINES);
  store = useSelector((state) => state.STORE);

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
  const medicine_Name = (dataIndex) => {
    let medicineName = "";
    medicines.map((val) => {
      if (val._id == dataIndex) {
        medicineName = val.name;
      }
    });
    return medicineName;
  };

  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "medicineId",
      key: "medicineDetails",
      render: (dataIndex, record) => medicine_Name(dataIndex),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
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
    setUpdateStore({
      ...updateStore,
      medicineId: "",
      price: null,
      quantity: null,
    });
  };

  const handleCancel = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    setUpdateStore({
      ...updateStore,
      medicineId: "",
      price: null,
      quantity: null,
    });
  };

  const deleteModel = (record) => {
    setShowDeleteModel(true);
    setRecordId(record._id);
  };

  const handleDelete = () => {
    dispatch(deleteStore(recordId));
    setShowDeleteModel(false);
    handleCancel();
  };

  const editModel = (record) => {
    setUpdateStore({
      ...updateStore,
      medicineId: record.medicineId,
      price: record.price,
      quantity: record.quantity,
    });
    setShowEditModel(true);
    setRecordId(record._id);
  };

  const handleEdit = () => {
    dispatch(updateStores(recordId, updateStore));
    handleCancel();
  };

  const addNew = () => {
    setShowAddNewModel(true);
  };

  const handleAdd = () => {
    dispatch(addStore(updateStore));
    handleCancel();
  };

  return (
    <div className="category-container">
      <div className="category-title">
        <h2>STORE DETAILS</h2>
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
                // onClick={searchCategory}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
        <div className="filter-bar"></div>
        <div className="category-body">
          <Table dataSource={store} columns={columns} pagination={false} />
        {/* Modals */}
        {/* delete modal */}
        <Modal
          visible={showDeleteModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={"modal-container"}>
            <h3>Are you sure want to delete this Medicine ??</h3>
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
                    <p>Medicine Name :</p>
                  </Col>
                  <Col>
                    <Select
                      defaultValue=""
                      className="modal-inputs"
                      value={updateStore.medicineId}
                      style={{
                        width: 300,
                        marginBottom: "20px",
                        marginLeft: "20px",
                      }}
                      onChange={(value) =>
                        setUpdateStore({
                          ...updateStore,
                          medicineId: value,
                        })
                      }
                    >
                      {medicines.map((prop, index) => (
                        <Select.Option key={index} value={prop._id}>
                          {prop.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Price :</p>
                  </Col>
                  <Col>
                    <Input
                      value={updateStore.price}
                      style={{ marginLeft: "20px", width: "250px" }}
                      className="modal-inputs"
                      onChange={(e) =>
                        setUpdateStore({
                          ...updateStore,
                          price: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Quantity :</p>
                  </Col>
                  <Col>
                    <Input
                      style={{ marginLeft: "20px", width: "300px" }}
                      value={updateStore.quantity}
                      className="modal-inputs"
                      onChange={(e) =>
                        setUpdateStore({
                          ...updateStore,
                          quantity: e.target.value,
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
                    <p>Medicine Name :</p>
                  </Col>
                  <Col>
                    <Select
                      defaultValue=""
                      className="modal-inputs"
                      value={updateStore.medicineId}
                      style={{
                        width: 300,
                        marginBottom: "20px",
                        marginLeft: "20px",
                      }}
                      onChange={(value) =>
                        setUpdateStore({
                          ...updateStore,
                          medicineId: value,
                        })
                      }
                    >
                      {medicines.map((prop, index) => (
                        <Select.Option key={index} value={prop._id}>
                          {prop.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Price :</p>
                  </Col>
                  <Col>
                    <Input
                      value={updateStore.price}
                      style={{ marginLeft: "20px", width: "250px" }}
                      className="modal-inputs"
                      onChange={(e) =>
                        setUpdateStore({
                          ...updateStore,
                          price: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Quantity :</p>
                  </Col>
                  <Col>
                    <Input
                      style={{ marginLeft: "20px", width: "300px" }}
                      value={updateStore.quantity}
                      className="modal-inputs"
                      onChange={(e) =>
                        setUpdateStore({
                          ...updateStore,
                          quantity: e.target.value,
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
        </div>
      </div>
    </div>
  );
};

export default Store;
