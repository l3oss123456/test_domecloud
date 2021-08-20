import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Table } from "antd";
import { getCovidVaccineRegister } from "../../actions/covidVaccineRegister";
import ListingTable from "../../components/ListingTable/index";
// import Loading from "../../components/Loading/index";
// import axios from "../../cores/axios/index";
import styles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const covidVaccineRegister = useSelector(
    (state) => state.covidVaccineRegister
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getCovidVaccineRegister());
      // const resp = await axios(
      //   "get",
      //   "https://pokeapi.co/api/v2/pokemon/?limit=151"
      // );
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <styles.screenContainer>
      <h1>List User</h1>
      <ListingTable
        dataSource={
          covidVaccineRegister.data.length > 0 ? covidVaccineRegister.data : []
        }
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Last name",
            dataIndex: "lastname",
            key: "lastname",
          },
        ]}
        bordered
        loading={covidVaccineRegister.isFetching}
      />
    </styles.screenContainer>
  );

  // return covidVaccineRegister.data.length > 0 ? (
  //   <styles.screenContainer>
  //     <ListingTable
  //       dataSource={covidVaccineRegister.data}
  //       columns={[
  //         {
  //           title: "Name",
  //           dataIndex: "name",
  //           key: "name",
  //         },
  //         {
  //           title: "Last name",
  //           dataIndex: "lastname",
  //           key: "lastname",
  //         },
  //       ]}
  //     />
  //   </styles.screenContainer>
  // ) : !covidVaccineRegister.isFetching ? (
  //   <div>no data</div>
  // ) : (
  //   <styles.loading>
  //     <Loading />
  //   </styles.loading>
  // );
};
export default Home;
