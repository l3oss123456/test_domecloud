import React, { useState, useEffect } from "react";
import {
  // useSelector,
  useDispatch,
} from "react-redux";
import { Form } from "antd";
import moment from "moment";
import { Strings } from "../../cores/locals/index";
import Loading from "../../components/Loading/index";
import { createCovidVaccineRegister } from "../../actions/covidVaccineRegister";
import address from "../../utils/address";
import TodoList from "./todo";
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
  // const listForm = [
  //   {
  //     type: "text",
  //     name: "name",
  //     label: "name",
  //     placeholder: "name",
  //     // span: 10,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input name.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`name`);
  //     },
  //   },
  //   {
  //     type: "text",
  //     name: "lastname",
  //     label: "lastname",
  //     placeholder: "lastname",
  //     // span: 14,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input lastname.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`last name`);
  //     },
  //   },
  //   {
  //     type: "datePicker",
  //     name: "birthDate",
  //     label: "birthDate",
  //     placeholder: "birthDate",
  //     // span: 14,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 6, xxl: 12 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input birthDate.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`birthDate`);
  //     },
  //   },
  //   {
  //     type: "number",
  //     name: "age",
  //     label: "age",
  //     placeholder: "age",
  //     // span: 6,
  //     responsive_span: { xs: 20, sm: 12, md: 9, lg: 5, xl: 5, xxl: 5 },
  //     min: 1,
  //     max: 100,
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input age.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`age`);
  //     },
  //   },
  //   {
  //     type: "nationalIdCard",
  //     name: "nationalId",
  //     label: "nationalId",
  //     placeholder: "nationalId",
  //     // span: 8,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 9, xl: 9, xxl: 9 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input nationalId.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`national id`);
  //     },
  //   },
  //   {
  //     type: "phoneNumber",
  //     name: "phoneNumber",
  //     label: "phoneNumber",
  //     placeholder: "phoneNumber",
  //     // span: 8,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 9, xl: 8, xxl: 5 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input phoneNumber.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`phoneNumber`);
  //     },
  //   },
  //   {
  //     type: "cascader",
  //     name: "address",
  //     label: "address",
  //     placeholder: "address",
  //     // span: 10,
  //     responsive_span: { xs: 24, sm: 24, md: 24, lg: 14, xl: 12, xxl: 12 },
  //     options: addressOptions,
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input address.",
  //       },
  //     ],
  //     onChange: () => {
  //       console.log(`national id`);
  //     },
  //   },
  //   {
  //     type: "text",
  //     name: "postalCode",
  //     label: "postalCode",
  //     placeholder: "postalCode",
  //     // span: 10,
  //     responsive_span: { xs: 24, sm: 18, md: 12, lg: 6, xl: 6, xxl: 6 },
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input postalCode.",
  //       },
  //     ],
  //     maxLength: 5,
  //     onChange: () => {
  //       console.log(`postalCode`);
  //     },
  //   },
  //   {
  //     type: "uploadImage",
  //     name: "nationalIdImage",
  //     label: "nationalIdImage",
  //     // placeholder: "name",
  //     span: 24,
  //     rule: [
  //       {
  //         required: true,
  //         message: "Please input image.",
  //       },
  //     ],
  //     maxLength: 1,
  //     fileList: fileList,
  //     setFileList: setFileList,
  //   },
  // ];
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
          message: "Please input name.",
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
          message: "Please input lastname.",
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
      birthDateValue:
        birthDateValue !== ""
          ? birthDateValue
          : moment(moment().format(dateFormat), dateFormat),
      rule: [
        {
          required: true,
          message: "Please input birthDate.",
        },
      ],
      onChange: (date) => {
        console.log(`birthDate`);
        console.log("date;", date);
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
          message: "Please input age.",
        },
      ],
      onChange: () => {
        console.log(`age`);
      },
    },
    nationalId: {
      type: "nationalIdCard",
      name: "nationalId",
      label: Strings.getString("register.vaccine.nationalId"),
      placeholder: Strings.getString("register.vaccine.nationalId.placeholder"),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
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
    phoneNumber: {
      type: "phoneNumber",
      name: "phoneNumber",
      label: Strings.getString("register.vaccine.phoneNumber"),
      placeholder: Strings.getString(
        "register.vaccine.phoneNumber.placeholder"
      ),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: "Please input phoneNumber.",
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
          message: "Please input address.",
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
          message: "Please input postalCode.",
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
      span: 24,
      // responsive_span: { xs: 24, lg: 12, xl: 12, xxl: 12 },
      rule: [
        {
          required: true,
          message: "Please choose image.",
        },
      ],
      maxLength: 1,
      fileList: fileList,
      setFileList: setFileList,
    },
    // emergency call form
    emergencyCall_name: {
      type: "text",
      name: "emergencyCall_name",
      label: Strings.getString("register.vaccine.name"),
      placeholder: Strings.getString("register.vaccine.name.placeholder"),
      // span: 10,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
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
      onChange: () => {
        console.log(`last name`);
      },
    },
    emergencyCall_nationalId: {
      type: "nationalIdCard",
      name: "emergencyCall_nationalId",
      label: Strings.getString("register.vaccine.nationalId"),
      placeholder: Strings.getString("register.vaccine.nationalId.placeholder"),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
      onChange: () => {
        console.log(`national id`);
      },
    },
    emergencyCall_phoneNumber: {
      type: "phoneNumber",
      name: "emergencyCall_phoneNumber",
      label: Strings.getString("register.vaccine.phoneNumber"),
      placeholder: Strings.getString(
        "register.vaccine.phoneNumber.placeholder"
      ),
      // span: 8,
      responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
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
  // useEffect(() => {
  //   dispatch(getCovidVaccineRegister());
  // }, []);

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
          // form.resetFields();
        }}
      >
        <FormCovid19VaccineRegister form={form} initialForm={initialForm} />
        <Footer
          form={form}
          setFileList={setFileList}
          setBirthDateValue={setBirthDateValue}
        />
      </Form>

      <Styles.section>
        <TodoList />
      </Styles.section>
    </Styles.screenContainer>
  ) : (
    <Styles.loading>
      <Loading />
    </Styles.loading>
  );
};
export default Covid19VaccineRegister;

// const Home = () => {
//   const dispatch = useDispatch();
//   //   const githubInfo = useSelector((state) => state.githubInfo);
//   const [addressOptions, setAddressOptions] = useState([]);
//   const [fileList, setFileList] = useState([]);
//   const [birthDateValue, setBirthDateValue] = useState("");
//   const dateFormat = "DD/MM/YYYY";
//   const listForm = [
//     {
//       type: "text",
//       name: "name",
//       label: "name",
//       placeholder: "name",
//       // span: 10,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input name.",
//         },
//       ],
//       onChange: () => {
//         console.log(`name`);
//       },
//     },
//     {
//       type: "text",
//       name: "lastname",
//       label: "lastname",
//       placeholder: "lastname",
//       // span: 14,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input lastname.",
//         },
//       ],
//       onChange: () => {
//         console.log(`last name`);
//       },
//     },
//     {
//       type: "datePicker",
//       name: "birthDate",
//       label: "birthDate",
//       placeholder: "birthDate",
//       // span: 14,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 6, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input birthDate.",
//         },
//       ],
//       onChange: () => {
//         console.log(`birthDate`);
//       },
//     },
//     {
//       type: "number",
//       name: "age",
//       label: "age",
//       placeholder: "age",
//       // span: 6,
//       responsive_span: { xs: 20, sm: 12, md: 9, lg: 5, xl: 5, xxl: 5 },
//       min: 1,
//       max: 100,
//       rule: [
//         {
//           required: true,
//           message: "Please input age.",
//         },
//       ],
//       onChange: () => {
//         console.log(`age`);
//       },
//     },
//     {
//       type: "nationalIdCard",
//       name: "nationalId",
//       label: "nationalId",
//       placeholder: "nationalId",
//       // span: 8,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 9, xl: 9, xxl: 9 },
//       rule: [
//         {
//           required: true,
//           message: "Please input nationalId.",
//         },
//       ],
//       onChange: () => {
//         console.log(`national id`);
//       },
//     },
//     {
//       type: "phoneNumber",
//       name: "phoneNumber",
//       label: "phoneNumber",
//       placeholder: "phoneNumber",
//       // span: 8,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 9, xl: 8, xxl: 5 },
//       rule: [
//         {
//           required: true,
//           message: "Please input phoneNumber.",
//         },
//       ],
//       onChange: () => {
//         console.log(`phoneNumber`);
//       },
//     },
//     {
//       type: "cascader",
//       name: "address",
//       label: "address",
//       placeholder: "address",
//       // span: 10,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 14, xl: 12, xxl: 12 },
//       options: addressOptions,
//       rule: [
//         {
//           required: true,
//           message: "Please input address.",
//         },
//       ],
//       onChange: () => {
//         console.log(`national id`);
//       },
//     },
//     {
//       type: "text",
//       name: "postalCode",
//       label: "postalCode",
//       placeholder: "postalCode",
//       // span: 10,
//       responsive_span: { xs: 24, sm: 18, md: 12, lg: 6, xl: 6, xxl: 6 },
//       rule: [
//         {
//           required: true,
//           message: "Please input postalCode.",
//         },
//       ],
//       maxLength: 5,
//       onChange: () => {
//         console.log(`postalCode`);
//       },
//     },
//     {
//       type: "uploadImage",
//       name: "nationalIdImage",
//       label: "nationalIdImage",
//       // placeholder: "name",
//       span: 24,
//       rule: [
//         {
//           required: true,
//           message: "Please input image.",
//         },
//       ],
//       maxLength: 1,
//       fileList: fileList,
//       setFileList: setFileList,
//     },
//   ];
//   const initialForm = {
//     name: {
//       type: "text",
//       name: "name",
//       label: Strings.getString("register.vaccine.name"),
//       placeholder: Strings.getString("register.vaccine.name.placeholder"),
//       // span: 10,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 11, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input name.",
//         },
//       ],
//       onChange: () => {
//         console.log(`name`);
//       },
//     },
//     lastname: {
//       type: "text",
//       name: "lastname",
//       label: Strings.getString("register.vaccine.lastname"),
//       placeholder: Strings.getString("register.vaccine.lastname.placeholder"),
//       // span: 14,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 13, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input lastname.",
//         },
//       ],
//       onChange: () => {
//         console.log(`last name`);
//       },
//     },
//     birthDate: {
//       type: "datePicker",
//       name: "birthDate",
//       label: Strings.getString("register.vaccine.birthDate"),
//       placeholder: Strings.getString("register.vaccine.birthDate.placeholder"),
//       // span: 14,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       birthDateValue:
//         birthDateValue !== ""
//           ? birthDateValue
//           : moment(moment().format(dateFormat), dateFormat),
//       rule: [
//         {
//           required: true,
//           message: "Please input birthDate.",
//         },
//       ],
//       onChange: (date) => {
//         console.log(`birthDate`);
//         console.log("date;", date);
//       },
//     },
//     age: {
//       type: "number",
//       name: "age",
//       label: Strings.getString("register.vaccine.age"),
//       placeholder: Strings.getString("register.vaccine.age.placeholder"),
//       // span: 6,
//       responsive_span: { xs: 16, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       min: 1,
//       max: 100,
//       rule: [
//         {
//           required: true,
//           message: "Please input age.",
//         },
//       ],
//       onChange: () => {
//         console.log(`age`);
//       },
//     },
//     nationalId: {
//       type: "nationalIdCard",
//       name: "nationalId",
//       label: Strings.getString("register.vaccine.nationalId"),
//       placeholder: Strings.getString("register.vaccine.nationalId.placeholder"),
//       // span: 8,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input nationalId.",
//         },
//       ],
//       onChange: () => {
//         console.log(`national id`);
//       },
//     },
//     phoneNumber: {
//       type: "phoneNumber",
//       name: "phoneNumber",
//       label: Strings.getString("register.vaccine.phoneNumber"),
//       placeholder: Strings.getString(
//         "register.vaccine.phoneNumber.placeholder"
//       ),
//       // span: 8,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input phoneNumber.",
//         },
//       ],
//       onChange: () => {
//         console.log(`phoneNumber`);
//       },
//     },
//     address: {
//       type: "cascader",
//       name: "address",
//       label: Strings.getString("register.vaccine.address"),
//       placeholder: Strings.getString("register.vaccine.address.placeholder"),
//       // span: 10,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       options: addressOptions,
//       rule: [
//         {
//           required: true,
//           message: "Please input address.",
//         },
//       ],
//       onChange: () => {
//         console.log(`national id`);
//       },
//     },
//     postalCode: {
//       type: "text",
//       name: "postalCode",
//       label: Strings.getString("register.vaccine.postalCode"),
//       placeholder: Strings.getString("register.vaccine.postalCode.placeholder"),
//       // span: 10,
//       responsive_span: { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please input postalCode.",
//         },
//       ],
//       maxLength: 5,
//       onChange: () => {
//         console.log(`postalCode`);
//       },
//     },
//     nationalIdImage: {
//       type: "uploadImage",
//       name: "nationalIdImage",
//       label: Strings.getString("register.vaccine.nationalIdImage"),
//       // placeholder: "name",
//       span: 24,
//       // responsive_span: { xs: 24, lg: 12, xl: 12, xxl: 12 },
//       rule: [
//         {
//           required: true,
//           message: "Please choose image.",
//         },
//       ],
//       maxLength: 1,
//       fileList: fileList,
//       setFileList: setFileList,
//     },
//   };

//   const initialAddressCascader = () => {
//     const { provinces, districts, subDistricts } = address;
//     const _address = provinces.map((province) => {
//       const _districts = [];
//       districts.map((district) => {
//         if (district.PROVINCE_ID === province.PROVINCE_ID) {
//           const _subDistricts = [];
//           subDistricts.map((subdistrict) => {
//             if (subdistrict.DISTRICT_ID === district.DISTRICT_ID) {
//               _subDistricts.push({
//                 label: subdistrict.SUB_DISTRICT_NAME,
//                 value: subdistrict.SUB_DISTRICT_NAME,
//               });
//             }
//           });
//           _districts.push({
//             label: district.DISTRICT_NAME,
//             value: district.DISTRICT_NAME,
//             children: _subDistricts,
//           });
//         }
//       });
//       return {
//         label: province.PROVINCE_NAME,
//         value: province.PROVINCE_NAME,
//         children: _districts,
//       };
//     });
//     return _address;
//   };
//   // useEffect(() => {
//   //   dispatch(getCovidVaccineRegister());
//   // }, []);

//   useEffect(() => {
//     if (address) {
//       setAddressOptions(initialAddressCascader);
//     }
//   }, [address]);

//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     dispatch(createCovidVaccineRegister(values));
//   };

//   return addressOptions.length > 0 ? (
//     <div
//       style={styles.screenContainer}
//       // className={Styles.screenContainer}
//     >
//       <p style={styles.mainTitle}>
//         {Strings.getString("register.vaccine.title")}
//       </p>
//       <div style={styles.section}>
//         <p style={styles.title}>
//           {Strings.getString("register.vaccine.title.info")}
//         </p>
//         <Form
//           labelCol={{ span: 12 }}
//           form={form}
//           name="advanced_search"
//           className="ant-advanced-search-form"
//           onFinish={() => {
//             let values = form.getFieldsValue();
//             values.birthDate = moment(values.birthDate._d).format(dateFormat);
//             onFinish(values);
//             // form.resetFields();
//           }}
//         >
//           <div style={styles.containerForm}>
//             {/* <Row gutter={28}>{getFields()}</Row> */}
//             {/* <Row gutter={28}>
//             {listForm.map((item, index) => {
//               return <FormComponent item={item} index={index} />;
//             })}
//           </Row> */}
//             <Row gutter={0}>
//               <FormComponent item={initialForm.name} />
//               <FormComponent item={initialForm.lastname} />
//             </Row>
//             <Row gutter={0}>
//               <FormComponent item={initialForm.birthDate} />
//               <FormComponent item={initialForm.age} />
//             </Row>
//             <Row gutter={0}>
//               <FormComponent item={initialForm.nationalId} />
//               <FormComponent item={initialForm.phoneNumber} />
//             </Row>
//             <Row gutter={0}>
//               <FormComponent item={initialForm.address} />
//               <FormComponent item={initialForm.postalCode} />
//             </Row>
//             <Row gutter={0}>
//               <FormComponent item={initialForm.nationalIdImage} />
//             </Row>

//             <div style={styles.footer}>
//               <Row>
//                 <Col
//                   span={24}
//                   style={{
//                     textAlign: "right",
//                   }}
//                 >
//                   <Button type="primary" htmlType="submit">
//                     Search
//                   </Button>
//                   <Button
//                     style={{
//                       margin: "0 8px",
//                     }}
//                     onClick={() => {
//                       form.resetFields();
//                       setFileList([]);
//                       setBirthDateValue("");
//                     }}
//                   >
//                     Clear
//                   </Button>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//         </Form>
//       </div>
//       <div style={styles.section}>
//         <TodoList />
//       </div>
//     </div>
//   ) : (
//     <Loading style={styles.loading} />
//   );
// };
// export default Home;
