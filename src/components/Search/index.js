import React, { useState, useEffect } from "react";
import { Space } from "antd";
import pushUrl from "../../utils/pushUrl";
import { Strings } from "../../cores/locals/index";
import styles from "./styles";

const SearchComponent = ({
  dataSource = [],
  //   setPosts,
  //   setIsSearch,
  setSearchData,
}) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const _filter = () => {
      if (dataSource.length > 0) {
        let tempData = Object.values(dataSource);
        let _data = [...tempData];
        if (searchValue.length > 0) {
          try {
            _data = _data.filter((item) => {
              const _searchValue = searchValue.toLowerCase();
              //   const data = item[`${searchType}`].toString().toLowerCase();
              const data = item[`name`].toString().toLowerCase();
              return data.match(_searchValue);
            });
            // setIsSearch(true);
            setSearchData(_data);
            // setPosts({
            //   isLoading: false,
            //   data: _data,
            // });
          } catch (error) {
            console.log("error from search component : ", error);
          }
        } else {
          //   setIsSearch(false);
          setSearchData(_data);
          //   setPosts({
          //     isLoading: false,
          //     data: dataSource,
          //   });
        }
      }
    };
    _filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const onSearch = (value) => {
    setSearchValue(value);
    pushUrl({ search: value });
  };

  return (
    <Space direction="vertical">
      <styles.search
        placeholder={Strings.getString("search.placeholder")}
        onSearch={onSearch}
        allowClear
        //   style={{ width: "100vw" }}
      />
    </Space>
  );
};
export default SearchComponent;
