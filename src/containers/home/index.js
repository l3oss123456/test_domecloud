import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form, Button, Row, Col } from "antd";
import FormComponent from "../../components/Form";
import { Strings } from "../../cores/locals/index";
import Loading from "../../components/Loading/index";
import { createCovidVaccineRegister } from "../../actions/covidVaccineRegister";
import address from "../../utils/address";
import styles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  //   const githubInfo = useSelector((state) => state.githubInfo);
  const [addressOptions, setAddressOptions] = useState([]);
  const listForm = [
    {
      type: "text",
      name: "name",
      label: "name",
      placeholder: "name",
      span: 10,
      rule: [
        {
          required: true,
          message: "Please input name.",
        },
      ],
      onChange: () => {
        console.log(`name`);
      },
    },
    {
      type: "text",
      name: "lastname",
      label: "lastname",
      placeholder: "lastname",
      span: 14,
      rule: [
        {
          required: true,
          message: "Please input lastname.",
        },
      ],
      onChange: () => {
        console.log(`last name`);
      },
    },
    {
      type: "number",
      name: "age",
      label: "age",
      placeholder: "age",
      span: 6,
      min: 1,
      max: 100,
      rule: [
        {
          required: true,
          message: "Please input age.",
        },
      ],
      onChange: () => {
        console.log(`age`);
      },
    },
    {
      type: "text",
      name: "nationalId",
      label: "nationalId",
      placeholder: "nationalId",
      span: 8,
      rule: [
        {
          required: true,
          message: "Please input nationalId.",
        },
      ],
      onChange: () => {
        console.log(`national id`);
      },
    },
    {
      type: "cascader",
      name: "address",
      label: "address",
      placeholder: "address",
      span: 10,
      options: addressOptions,
      rule: [
        {
          required: true,
          message: "Please input address.",
        },
      ],
      onChange: () => {
        console.log(`national id`);
      },
    },
  ];
  const initialAddressCascader = () => {
    const { provinces, districts, subDistricts } = address;
    const _address = provinces.map((province) => {
      const _districts = [];
      districts.map((district) => {
        if (district.PROVINCE_ID === province.PROVINCE_ID) {
          const _subDistricts = [];
          subDistricts.map((subdistrict) => {
            if (subdistrict.DISTRICT_ID === district.DISTRICT_ID) {
              _subDistricts.push({
                label: subdistrict.SUB_DISTRICT_NAME,
                value: subdistrict.SUB_DISTRICT_NAME,
              });
            }
          });
          _districts.push({
            label: district.DISTRICT_NAME,
            value: district.DISTRICT_NAME,
            children: _subDistricts,
          });
        }
      });
      return {
        label: province.PROVINCE_NAME,
        value: province.PROVINCE_NAME,
        children: _districts,
      };
    });
    return _address;
  };
  useEffect(() => {
    if (address) {
      setAddressOptions(initialAddressCascader);
    }
  }, [address]);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(createCovidVaccineRegister(values));
  };

  return addressOptions.length > 0 ? (
    <div style={styles.screenContainer}>
      <div>
        <h1>{Strings.getString("register.vaccine.title")}</h1>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={() => {
            const values = form.getFieldsValue();
            onFinish(values);
            // form.resetFields();
          }}
        >
          {/* <Row gutter={28}>{getFields()}</Row> */}
          <Row gutter={28}>
            {listForm.map((item, index) => {
              return <FormComponent item={item} index={index} />;
            })}
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: "right",
              }}
            >
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
        {/* <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={() => {
            const values = form.getFieldsValue();
            // console.log(form.getFieldValue("lastname"));
            onFinish(values);
          }}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            name :
            <Input
              //   prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="name"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            lastname :
            <Input
              //   prefix={<LockOutlined className="site-form-item-icon" />}
              //   type="password"
              type="text"
              placeholder="lastname"
            />
          </Form.Item>
        
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Log in
              </Button>
            )}
          </Form.Item>
        </Form> */}
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
