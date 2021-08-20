import React from "react";
import { Button, Row, Col } from "antd";
import { Strings } from "../../../../cores/locals/index";
import Styles from "../../styles";

const FooterCovidVaccineRegister = ({
  form,
  setFileList,
  setBirthDateValue,
}) => {
  //   const [form] = Form.useForm();
  return (
    <Styles.footer>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            {Strings.getString("register.vaccine.button.save")}
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
              setFileList([]);
              setBirthDateValue("");
            }}
          >
            {Strings.getString("register.vaccine.button.cancel")}
          </Button>
        </Col>
      </Row>
    </Styles.footer>
  );
};

export default FooterCovidVaccineRegister;
