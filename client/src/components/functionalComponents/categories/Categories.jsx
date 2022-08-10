import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Button, Row, Col, Input, Table, Modal } from "antd";

import { getCategories } from "../../../services/actions/categoriesAction";
import {
  deleteCategories,
  updateCategories,
  addCategories,
} from "../../../services/actions/categoriesAction";
import { $Space, $Input, $TextArea } from "../../antd";
import "./Categories.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [recordId, setRecordId] = useState("");
  const [updateCategory, setUpdateCategory] = useState({
    categoryName: "",
    Description: "",
  });
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showAddNewModel, setShowAddNewModel] = useState(false);

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
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "Description",
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
    categoryName: searchText,
  };

  const searchCategory = () => {
    dispatch(getCategories(obj));
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
    setUpdateCategory({
      ...updateCategory,
      categoryName: "",
      Description: "",
    });
  };

  const handleCancel = () => {
    setShowDeleteModel(false);
    setShowEditModel(false);
    setShowAddNewModel(false);
    setUpdateCategory({
      ...updateCategory,
      categoryName: "",
      Description: "",
    });
  };

  const deleteModel = (record) => {
    setShowDeleteModel(true);
    setRecordId(record._id);
  };

  const handleDelete = () => {
    dispatch(deleteCategories(recordId));
    setShowDeleteModel(false);
    handleCancel();
  };

  const editModel = (record) => {
    setUpdateCategory({
      ...updateCategory,
      categoryName: record.categoryName,
      Description: record.Description,
    });
    setShowEditModel(true);
    setRecordId(record._id);
  };

  const handleEdit = () => {
    // console.log(updateCategory);
    dispatch(updateCategories(recordId, updateCategory));
    handleCancel();
  };

  const addNew = () => {
    setShowAddNewModel(true);
  };

  const handleAdd = () => {
    dispatch(addCategories(updateCategory));
    handleCancel();
  };

  return (
    <div className="category-container">
      <div className="category-header">
        <div className="search-bar">
          <Row>
            <Col span={4}>
              <Button
                className="add-btn"
                type="primary"
                icon={<PlusOutlined />}
                onClick={addNew}
              >
                Add
              </Button>
            </Col>
            <Col span={16}>
              <Input
                placeholder="Search Categoris"
                // onSearch={onSearch}
                // style={{ width: 200 }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col span={4}>
              <Button
                className="search-btn"
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
        <Table dataSource={categories} columns={columns} pagination={false} />
        {/* Modals */}
        {/* delete modal */}
        <Modal
          visible={showDeleteModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <h2>Are you sure want to delete this category??</h2>
          <Button className="search-btn" type="primary" onClick={handleDelete}>
            Yes
          </Button>
          <Button className="search-btn" type="primary" onClick={handleCancel}>
            No
          </Button>
        </Modal>

        {/* edit modal */}
        <Modal
          visible={showEditModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Input
            placeholder="Category Name"
            value={updateCategory.categoryName}
            onChange={(e) =>
              setUpdateCategory({
                ...updateCategory,
                categoryName: e.target.value,
              })
            }
          />
          <Input
            placeholder="Description"
            value={updateCategory.Description}
            onChange={(e) =>
              setUpdateCategory({
                ...updateCategory,
                Description: e.target.value,
              })
            }
          />
          <Button className="search-btn" type="primary" onClick={handleEdit}>
            Save
          </Button>
          <Button className="search-btn" type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal>

        {/* Add modal */}
        <Modal
          visible={showAddNewModel}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Input
            placeholder="Category Name"
            value={updateCategory.categoryName}
            onChange={(e) =>
              setUpdateCategory({
                ...updateCategory,
                categoryName: e.target.value,
              })
            }
          />
          <Input
            placeholder="Description"
            value={updateCategory.Description}
            onChange={(e) =>
              setUpdateCategory({
                ...updateCategory,
                Description: e.target.value,
              })
            }
          />
          <Button className="search-btn" type="primary" onClick={handleAdd}>
            Save
          </Button>
          <Button className="search-btn" type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Categories;
