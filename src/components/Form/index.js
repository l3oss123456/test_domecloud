import React from "react";
import { Form, Col, Input, Cascader } from "antd";

const renderInputText = (item, index) => {
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    maxLength,
    span,
    rule,
    type,
  } = item;
  return (
    <Col span={span} key={index}>
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
          disabled={!editable}
        />
      </Form.Item>
    </Col>
  );
};

const renderInputNumber = (item, index) => {
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    maxLength,
    span,
    rule,
    type,
    min,
    max,
  } = item;
  return (
    <Col span={span} key={index}>
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
    value,
    onChange,
    placeholder,
    //   error,
    editable = true,
    //   hint = null,
    maxLength,
    span,
    rule,
    options,
  } = item;
  return (
    <Col span={span} key={index}>
      {/* {label} : */}
      <Form.Item name={name} rules={rule} label={label}>
        <Cascader options={options} />
      </Form.Item>
    </Col>
  );
};

const FormComponent = (props) => {
  const { item, index } = props;

  switch (item.type) {
    case "text":
      return renderInputText(item, index);
    case "number":
      return renderInputNumber(item, index);
    case "cascader":
      return renderInputCascader(item, index);
    default:
      break;
  }
};
export default FormComponent;
