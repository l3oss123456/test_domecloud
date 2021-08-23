import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCovidVaccineRegister } from "../../actions/covidVaccineRegister";
import ListingTable from "../../components/ListingTable/index";
import { Strings } from "../../cores/locals/index";
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
      <h1>{Strings.getString(`home.title`)}</h1>
      <ListingTable
        dataSource={
          covidVaccineRegister.data.length > 0 ? covidVaccineRegister.data : []
        }
        columns={[
          {
            title: Strings.getString("home.table.title1"),
            dataIndex: "name",
            key: "name",
          },
          {
            title: Strings.getString("home.table.title2"),
            dataIndex: "lastname",
            key: "lastname",
          },
        ]}
        bordered
        loading={covidVaccineRegister.isFetching}
      />
    </styles.screenContainer>
  );
};
export default Home;
