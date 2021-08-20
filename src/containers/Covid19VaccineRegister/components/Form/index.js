import React from "react";
import { Row } from "antd";
import FormComponent from "../../../../components/Form/index";
import { Strings } from "../../../../cores/locals/index";
import Styles from "../../styles";

const FormCovidVaccineRegister = ({ form, initialForm }) => {
  return (
    <div>
      <Styles.section>
        <Styles.title>
          {Strings.getString("register.vaccine.title.info")}
        </Styles.title>
        <Styles.containerForm>
          <Row gutter={0}>
            <FormComponent item={initialForm.name} />
            <FormComponent item={initialForm.lastname} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.birthDate} />
            <FormComponent item={initialForm.age} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.nationalId} />
            <FormComponent item={initialForm.phoneNumber} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.address} />
            <FormComponent item={initialForm.postalCode} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.nationalIdImage} />
          </Row>
        </Styles.containerForm>
      </Styles.section>

      <Styles.section>
        <Styles.title>
          {Strings.getString("register.vaccine.title.emergencyCall")}
        </Styles.title>
        <Styles.containerForm>
          <Row gutter={0}>
            <FormComponent item={initialForm.emergencyCall_name} />
            <FormComponent item={initialForm.emergencyCall_lastname} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.emergencyCall_nationalId} />
            <FormComponent item={initialForm.emergencyCall_phoneNumber} />
          </Row>
          <Row gutter={0}>
            <FormComponent item={initialForm.emergencyCall_address} />
            <FormComponent item={initialForm.emergencyCall_postalCode} />
          </Row>
        </Styles.containerForm>
      </Styles.section>
    </div>
  );
};
export default FormCovidVaccineRegister;
