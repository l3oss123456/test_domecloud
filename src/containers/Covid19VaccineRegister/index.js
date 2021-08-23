import React, { useState, useEffect } from "react";
import {
  // useSelector,
  useDispatch,
} from "react-redux";
import { Form, notification } from "antd";
import moment from "moment";
import { Strings } from "../../cores/locals/index";
import Loading from "../../components/Loading/index";
import { createCovidVaccineRegister } from "../../actions/covidVaccineRegister";
import address from "../../utils/address";
// import TodoList from "./todo";
import FormCovid19VaccineRegister from "./components/Form/index";
import Footer from "./components/Footer/index";
import Styles from "./styles";

const Covid19VaccineRegister = () => {
  const dispatch = useDispatch();
  const [addressOptions, setAddressOptions] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [birthDateValue, setBirthDateValue] = useState("");
  const dateFormat = "DD/MM/YYYY";
  const [form] = Form.useForm();
  const initialForm = {
    name: {
      type: "text",
      name: "name",
      label: Strings.getString("register.vaccine.name"),
      placeholder: Strings.getString("register.vaccine.name.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.name.error"),
          whitespace: false,
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
      ],
      onChange: () => {
        console.log(`name`);
      },
    },
    lastname: {
      type: "text",
      name: "lastname",
      label: Strings.getString("register.vaccine.lastname"),
      placeholder: Strings.getString("register.vaccine.lastname.placeholder"),
      // span: 14,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.lastname.error"),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
      ],
      onChange: () => {
        console.log(`last name`);
      },
    },
    birthDate: {
      type: "datePicker",
      name: "birthDate",
      label: Strings.getString("register.vaccine.birthDate"),
      placeholder: Strings.getString("register.vaccine.birthDate.placeholder"),
      // span: 14,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      value: "",
      // birthDateValue !== ""
      //   ? birthDateValue
      //   : moment(moment().format(dateFormat), dateFormat),
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.birthDate.error"),
        },
      ],
      onChange: (date) => {
        console.log(`birthDate`);
        console.log("date;", date);
        console.log("birthDateValue;", birthDateValue);
      },
    },
    age: {
      type: "number",
      name: "age",
      label: Strings.getString("register.vaccine.age"),
      placeholder: Strings.getString("register.vaccine.age.placeholder"),
      // span: 6,
      responsive_span: { xs: 16, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      min: 1,
      max: 100,
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.age.error"),
        },
      ],
      onChange: () => {
        console.log(`age`);
      },
    },
    nationalId: {
      type: "text",
      name: "nationalId",
      label: Strings.getString("register.vaccine.nationalId"),
      placeholder: Strings.getString("register.vaccine.nationalId.placeholder"),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      cleaveOptions: { blocks: [1, 4, 5, 2, 1], delimiter: "-" },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.nationalId.error"),
        },
        {
          min: 17,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 13,
            }
          ),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
      ],
      onChange: () => {
        console.log(`national id`);
      },
    },
    phoneNumber: {
      type: "text",
      name: "phoneNumber",
      label: Strings.getString("register.vaccine.phoneNumber"),
      placeholder: Strings.getString(
        "register.vaccine.phoneNumber.placeholder"
      ),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      cleaveOptions: { blocks: [3, 7], delimiter: "-" },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.phoneNumber.error"),
        },
        {
          min: 11,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 10,
            }
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
      ],
      onChange: () => {
        console.log(`phoneNumber`);
      },
    },
    address: {
      type: "cascader",
      name: "address",
      label: Strings.getString("register.vaccine.address"),
      placeholder: Strings.getString("register.vaccine.address.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      options: addressOptions,
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.address.error"),
        },
      ],
      onChange: () => {
        console.log(`national id`);
      },
    },
    postalCode: {
      type: "text",
      name: "postalCode",
      label: Strings.getString("register.vaccine.postalCode"),
      placeholder: Strings.getString("register.vaccine.postalCode.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.postalCode.error"),
        },
        {
          min: 5,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 5,
            }
          ),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
      ],
      maxLength: 5,
      onChange: () => {
        console.log(`postalCode`);
      },
    },
    nationalIdImage: {
      type: "uploadImage",
      name: "nationalIdImage",
      label: Strings.getString("register.vaccine.nationalIdImage"),
      // placeholder: "name",
      // span: 24,
      responsive_span: { xs: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: Strings.getString("register.vaccine.nationalIdImage.error"),
        },
      ],
      maxLength: 1,
      fileList: fileList,
      setFileList: setFileList,
    },
    ////////////////////////////////// emergency call form //////////////////////////////////
    emergencyCall_name: {
      type: "text",
      name: "emergencyCall_name",
      label: Strings.getString("register.vaccine.name"),
      placeholder: Strings.getString("register.vaccine.name.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
      ],
      onChange: () => {
        console.log(`name`);
      },
    },
    emergencyCall_lastname: {
      type: "text",
      name: "emergencyCall_lastname",
      label: Strings.getString("register.vaccine.lastname"),
      placeholder: Strings.getString("register.vaccine.lastname.placeholder"),
      // span: 14,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
      ],
      onChange: () => {
        console.log(`last name`);
      },
    },
    emergencyCall_nationalId: {
      type: "text",
      name: "emergencyCall_nationalId",
      label: Strings.getString("register.vaccine.nationalId"),
      placeholder: Strings.getString("register.vaccine.nationalId.placeholder"),
      // span: 8,
      cleaveOptions: { blocks: [1, 4, 5, 2, 1], delimiter: "-" },
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          min: 17,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 13,
            }
          ),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
      ],
      onChange: () => {
        console.log(`national id`);
      },
    },
    emergencyCall_phoneNumber: {
      type: "text",
      name: "emergencyCall_phoneNumber",
      label: Strings.getString("register.vaccine.phoneNumber"),
      placeholder: Strings.getString(
        "register.vaccine.phoneNumber.placeholder"
      ),
      cleaveOptions: { blocks: [3, 7], delimiter: "-" },
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          min: 11,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 10,
            }
          ),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
      ],
      onChange: () => {
        console.log(`phoneNumber`);
      },
    },
    emergencyCall_address: {
      type: "cascader",
      name: "emergencyCall_address",
      label: Strings.getString("register.vaccine.address"),
      placeholder: Strings.getString("register.vaccine.address.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      options: addressOptions,
      onChange: () => {
        console.log(`national id`);
      },
    },
    emergencyCall_postalCode: {
      type: "text",
      name: "emergencyCall_postalCode",
      label: Strings.getString("register.vaccine.postalCode"),
      placeholder: Strings.getString("register.vaccine.postalCode.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      maxLength: 5,
      rule: [
        {
          min: 5,
          message: Strings.formatString(
            Strings.getString("validate.error.message.minCharacter"),
            {
              min: 5,
            }
          ),
        },
        {
          pattern: new RegExp(/^[a-zA-Z_0-9ก-ฮะ-์-]+$/),
          message: Strings.getString(
            "validate.error.message.specialCharacterAndSpace"
          ),
        },
        {
          pattern: new RegExp(/\d+/g),
          message: Strings.getString("validate.error.message.inputOnlyNumber"),
        },
      ],
      onChange: () => {
        console.log(`postalCode`);
      },
    },
  };

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
            return null;
          });
          _districts.push({
            label: district.DISTRICT_NAME,
            value: district.DISTRICT_NAME,
            children: _subDistricts,
          });
        }
        return null;
      });
      return {
        label: province.PROVINCE_NAME,
        value: province.PROVINCE_NAME,
        children: _districts,
      };
    });
    return _address;
  };

  const clearForm = () => {
    form.resetFields();
    setFileList([]);
    setBirthDateValue("");
  };

  useEffect(() => {
    if (address) {
      setAddressOptions(initialAddressCascader);
    }
  }, []);

  const onFinish = (values) => {
    dispatch(createCovidVaccineRegister(values));
  };

  return addressOptions.length > 0 ? (
    <Styles.screenContainer>
      <Styles.mainTitle>
        {Strings.getString("register.vaccine.title")}
      </Styles.mainTitle>

      <Form
        labelCol={{ span: 12 }}
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={() => {
          let values = form.getFieldsValue();
          values.birthDate = moment(values.birthDate._d).format(dateFormat);
          onFinish(values);
          notification.info({
            message: Strings.getString(
              "register.vaccine.notification.message.success"
            ),
            description: Strings.getString(
              "register.vaccine.notification.description.success"
            ),
          });
          clearForm();
        }}
        style={{ marginBottom: 100 }}
      >
        <FormCovid19VaccineRegister form={form} initialForm={initialForm} />
        <Footer form={form} clearForm={clearForm} />
      </Form>

      {/* <Styles.section>
        <TodoList />
      </Styles.section> */}
    </Styles.screenContainer>
  ) : (
    <Styles.loading>
      <Loading />
    </Styles.loading>
  );
};
export default Covid19VaccineRegister;
