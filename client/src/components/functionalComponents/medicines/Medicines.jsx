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
  getMedicines,
  deleteMedicines,
  updateMedicines,
  addMedicines,
} from "../../../services/actions/medicineAction";
import { $Space, $Input, $TextArea } from "../../antd";

import "./Medicines.scss";

const Medicines = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [recordId, setRecordId] = useState("");
  const [updateMedicine, setUpdateMedicine] = useState({
    categoryId: "",
    name: "",
    description: "",
    doctrorApproval: null,
  });
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddNewModel, setShowAddNewModel] = useState(false);

  let categories = [];
  let medicines = [];
  let store = [];
  medicines = useSelector((state) => state.MEDICINES);
  categories = useSelector((state) => state.CATEGORIES);
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

  const caterory_Name = (dataIndex) => {
    let category = "";
    categories.map((val) => {
      if (val._id == dataIndex) {
        category = val.categoryName;
      }
    });
    return category;
  };

  const medicine_Price = (dataIndex) => {
    let Price = "";
    store.map((val) => {
      if (val.medicineId == dataIndex) {
        Price = val.price;
      }
    });
    return Price;
  };

  const medicine_Quantity = (dataIndex) => {
    let Quantity = "Not Available";
    store.map((val) => {
      if (val.medicineId == dataIndex) {
        Quantity = val.quantity;
      }
    });
    return Quantity;
  };

  const doctor_approval = (dataIndex) => {
    return dataIndex == true ? "Yes" : "No";
  };
  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "name",
      key: "categoryName",
    },
    {
      title: "Category Name",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (dataIndex, record) => caterory_Name(dataIndex),
    },
    {
      title: "Doctor Approval",
      dataIndex: "doctrorApproval",
      key: "category",
      render: (dataIndex, record) => doctor_approval(dataIndex),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "_id",
      key: "price",
      render: (dataIndex, record) => medicine_Price(dataIndex),
    },
    {
      title: "Quantity",
      dataIndex: "_id",
      key: "quantity",
      render: (dataIndex, record) => medicine_Quantity(dataIndex),
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
    name: searchText,
    doctrorApproval: null,
    categoryId: "",
  };

  const searchCategory = () => {
    dispatch(getMedicines(obj));
  };

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
    setUpdateMedicine({
      ...updateMedicine,
      categoryId: "",
      name: "",
      description: "",
      doctrorApproval: null,
      price: "",
    });
  };

  const handleCancel = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    setUpdateMedicine({
      ...updateMedicine,
      categoryId: "",
      name: "",
      description: "",
      doctrorApproval: null,
    });
  };

  const deleteModel = (record) => {
    setShowDeleteModel(true);
    setRecordId(record._id);
  };

  const handleDelete = () => {
    dispatch(deleteMedicines(recordId));
    setShowDeleteModel(false);
    handleCancel();
  };

  const editModel = (record) => {
    setUpdateMedicine({
      ...updateMedicine,
      categoryId: record.categoryId,
      name: record.name,
      description: record.description,
      doctrorApproval: record.doctrorApproval,
    });
    setShowEditModel(true);
    setRecordId(record._id);
  };

  const handleEdit = () => {
    // console.log(updateCategory);
    dispatch(updateMedicines(recordId, updateMedicine));
    handleCancel();
  };

  const addNew = () => {
    setShowAddNewModel(true);
  };

  const handleAdd = () => {
    dispatch(addMedicines(updateMedicine));
    handleCancel();
  };

  return (
    <div className="category-container">
      <div className="category-title">
        <h2>CATEGORY DETAILS</h2>
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
                onClick={searchCategory}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>
        <div className="filter-bar"></div>
      </div>
      <div className="category-body">
        <Table dataSource={medicines} columns={columns} pagination={false} />
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
                  <p>Category :</p>
                </Col>
                <Col>
                  <Select
                    defaultValue=""
                    className="modal-inputs"
                    value={updateMedicine.categoryId}
                    style={{
                      width: 300,
                      marginBottom: "20px",
                      marginLeft: "20px",
                    }}
                    onChange={(value) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        categoryId: value,
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
                  <p>Medicine Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateMedicine.name}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        name: e.target.value,
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
                    value={updateMedicine.description}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        description: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Doctor Approval :</p>
                </Col>
                <Col>
                  <Radio.Group
                    style={{ marginLeft: "20px" }}
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        doctrorApproval: e.target.value,
                      })
                    }
                    value={updateMedicine.doctrorApproval}
                  >
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Radio.Group>
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
                  <p>Category :</p>
                </Col>
                <Col>
                  <Select
                    defaultValue=""
                    className="modal-inputs"
                    value={updateMedicine.categoryId}
                    style={{
                      width: 300,
                      marginBottom: "20px",
                      marginLeft: "20px",
                    }}
                    onChange={(value) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        categoryId: value,
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
                  <p>Medicine Name :</p>
                </Col>
                <Col>
                  <Input
                    value={updateMedicine.name}
                    style={{ marginLeft: "20px", width: "250px" }}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        name: e.target.value,
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
                    value={updateMedicine.description}
                    className="modal-inputs"
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        description: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Doctor Approval :</p>
                </Col>
                <Col>
                  <Radio.Group
                    style={{ marginLeft: "20px" }}
                    onChange={(e) =>
                      setUpdateMedicine({
                        ...updateMedicine,
                        doctrorApproval: e.target.value,
                      })
                    }
                    value={updateMedicine.doctrorApproval}
                  >
                    <Radio value={true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Radio.Group>
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

export default Medicines;
