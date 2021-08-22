import React, { useState } from "react";
import { path } from "ramda";
import { Form, Col, Input, Cascader, Upload, Modal, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import Cleave from "cleave.js/react";
// import CleavePhone from "cleave.js/dist/addons/cleave-phone.{country}";

new Cleave(".input-nationalId", {
  blocks: [1, 4, 5, 2, 1],
  delimiter: "-",
});

const renderInputText = (item, index) => {
  const {
    name,
    label,
    // value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    maxLength,
    span,
    rule,
    // type,
    responsive_span,
    cleaveOptions,
  } = item;

  return (
    <Col
      span={span}
      // key={index}
      xs={responsive_span && responsive_span.xs}
      sm={responsive_span && responsive_span.sm}
      md={responsive_span && responsive_span.md}
      lg={responsive_span && responsive_span.lg}
      xl={responsive_span && responsive_span.xl}
      xxl={responsive_span && responsive_span.xxl}
    >
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        {cleaveOptions === null ? (
          <Input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            disabled={!editable}
          />
        ) : (
          <Cleave
            options={cleaveOptions}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            disabled={!editable}
            className="ant-input"
          />
        )}
      </Form.Item>
    </Col>
  );
};

// const renderInputNationalIdCard = (item, index) => {
//   const {
//     name,
//     label,
//     // value,
//     onChange,
//     placeholder,
//     //   error,
//     editable = true,
//     //   hint = null,
//     maxLength,
//     span,
//     rule,
//     // type,
//     responsive_span,
//   } = item;
//   return (
//     <Col
//       span={span}
//       // key={index}
//       xs={responsive_span && responsive_span.xs}
//       sm={responsive_span && responsive_span.sm}
//       md={responsive_span && responsive_span.md}
//       lg={responsive_span && responsive_span.lg}
//       xl={responsive_span && responsive_span.xl}
//       xxl={responsive_span && responsive_span.xxl}
//     >
//       <Form.Item name={name} rules={rule} label={label}>
//         <Cleave
//           options={{ blocks: [1, 4, 5, 2, 1], delimiter: "-" }}
//           type="text"
//           placeholder={placeholder}
//           onChange={onChange}
//           maxLength={maxLength}
//           disabled={!editable}
//           className="ant-input"
//         />
//       </Form.Item>
//     </Col>
//   );
// };

const renderInputNumber = (item, index) => {
  const {
    name,
    label,
    // value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    // maxLength,
    span,
    rule,
    // type,
    min,
    max,
    responsive_span,
  } = item;
  return (
    <Col
      span={span}
      //  key={index}
      xs={responsive_span && responsive_span.xs}
      sm={responsive_span && responsive_span.sm}
      md={responsive_span && responsive_span.md}
      lg={responsive_span && responsive_span.lg}
      xl={responsive_span && responsive_span.xl}
      xxl={responsive_span && responsive_span.xxl}
    >
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        <Input
          type="number"
          placeholder={placeholder}
          onChange={onChange}
          min={min}
          max={max}
          disabled={!editable}
        />
      </Form.Item>
    </Col>
  );
};

const renderInputCascader = (item, index) => {
  const {
    name,
    label,
    // value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    // maxLength,
    span,
    rule,
    options,
    responsive_span,
  } = item;
  return (
    <Col
      span={span}
      // key={index}
      xs={responsive_span && responsive_span.xs}
      sm={responsive_span && responsive_span.sm}
      md={responsive_span && responsive_span.md}
      lg={responsive_span && responsive_span.lg}
      xl={responsive_span && responsive_span.xl}
      xxl={responsive_span && responsive_span.xxl}
    >
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        <Cascader
          options={options}
          placeholder={placeholder}
          disabled={!editable}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

// const renderInputPhoneNumber = (item, index) => {
//   const {
//     name,
//     label,
//     // value,
//     onChange,
//     placeholder,
//     //   error,
//     editable = true,
//     //   hint = null,
//     maxLength,
//     span,
//     rule,
//     // type,
//     responsive_span,
//   } = item;
//   return (
//     <Col
//       span={span}
//       // key={index}
//       xs={responsive_span && responsive_span.xs}
//       sm={responsive_span && responsive_span.sm}
//       md={responsive_span && responsive_span.md}
//       lg={responsive_span && responsive_span.lg}
//       xl={responsive_span && responsive_span.xl}
//       xxl={responsive_span && responsive_span.xxl}
//     >
//       <Form.Item name={name} rules={rule} label={label}>
//         <Cleave
//           options={{ blocks: [3, 7], delimiter: "-" }}
//           type="text"
//           placeholder={placeholder}
//           onChange={onChange}
//           maxLength={maxLength}
//           disabled={!editable}
//           className="ant-input"
//         />
//       </Form.Item>
//     </Col>
//   );
// };

const renderDatePicker = (item, index) => {
  const {
    name,
    label,
    dateFormat = "DD/MM/YYYY",
    value = moment(moment().format(dateFormat), dateFormat),
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    // maxLength,
    span,
    rule,
    // type,
    responsive_span,
    // birthDateValue = moment(moment().format(dateFormat), dateFormat),
  } = item;
  return (
    <Col
      span={span}
      // key={index}
      xs={responsive_span && responsive_span.xs}
      sm={responsive_span && responsive_span.sm}
      md={responsive_span && responsive_span.md}
      lg={responsive_span && responsive_span.lg}
      xl={responsive_span && responsive_span.xl}
      xxl={responsive_span && responsive_span.xxl}
    >
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        <DatePicker
          // defaultValue={moment("2015/01/01", dateFormat)}
          defaultValue={value}
          // defaultValue={moment(moment().format(dateFormat), dateFormat)}
          value={value}
          format={dateFormat}
          placeholder={placeholder}
          disabled={!editable}
          onChange={(e) => {
            if (e) onChange(moment(e._d).format(dateFormat));
          }}
          style={{ width: "100%" }}
        />
        {/* <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
          disabled={!editable}
        /> */}
      </Form.Item>
    </Col>
  );
};

const renderUploadImage = (
  item,
  index,
  previewVisible,
  previewImage,
  previewTitle,
  setPreviewVisible,
  setPreviewImage,
  setPreviewTitle
) => {
  const {
    name,
    label,
    // value,
    // onChange,
    // placeholder,
    //   error,
    editable = true,
    //   hint = null,
    maxLength = 1,
    span,
    rule,
    // type,
    fileList = [],
    setFileList,
    responsive_span,
  } = item;

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const detectFile = (listFile) => {
    const listDisabledFileType = listFile.filter((file) => {
      const fileType = path(["type"], file);
      return fileType !== "image/png" && fileType !== "image/jpeg";
    });
    return listDisabledFileType.length === 0;
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: _fileList }) => {
    const isAllowFile = detectFile(_fileList);
    if (isAllowFile) setFileList(_fileList);
  };

  return (
    <Col
      span={span}
      // key={index}
      xs={responsive_span && responsive_span.xs}
      sm={responsive_span && responsive_span.sm}
      md={responsive_span && responsive_span.md}
      lg={responsive_span && responsive_span.lg}
      xl={responsive_span && responsive_span.xl}
      xxl={responsive_span && responsive_span.xxl}
    >
      <Form.Item name={name} rules={rule} label={label}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          disabled={!editable}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= maxLength ? null : uploadButton}
        </Upload>
      </Form.Item>
      {previewVisible && (
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={() => {
            setPreviewVisible(false);
          }}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      )}
    </Col>
  );
};

const FormComponent = (props) => {
  const { item, index } = props;
  //initial state for upload Image Component
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  //////////////////////////////////////////

  switch (item.type) {
    case "text":
      return renderInputText(item, index);
    case "number":
      return renderInputNumber(item, index);
    case "cascader":
      return renderInputCascader(item, index);
    // case "nationalIdCard":
    //   return renderInputNationalIdCard(item, index);
    // case "phoneNumber":
    //   return renderInputPhoneNumber(item, index);
    case "datePicker":
      return renderDatePicker(item, index);
    case "uploadImage":
      return renderUploadImage(
        item,
        index,
        previewVisible,
        previewImage,
        previewTitle,
        // fileList,
        setPreviewVisible,
        setPreviewImage,
        setPreviewTitle
        // setFileList
      );
    default:
      break;
  }
};
export default FormComponent;
