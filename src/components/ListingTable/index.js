import React, { useState } from "react";
import { Table } from "antd";
import Search from "../Search/index";
import Pagination from "../Pagination/index";

const ListingTable = ({
  dataSource,
  columns,
  loading,
  bordered = false,
  disabledSearch = false,
}) => {
  const [posts, setPosts] = useState({
    isLoading: true,
    data: [],
  });
  const [searchData, setSearchData] = useState([]);
  // const [isSearch, setIsSearch] = useState(false);

  // useEffect(() => {
  //   if (dataSource.length > 0) {
  //     setPosts({
  //       isLoading: false,
  //       data: dataSource,
  //     });
  //   } else {
  //     setPosts({
  //       isLoading: false,
  //       data: [],
  //     });
  //   }
  // }, [dataSource]);

  // console.log("isSearch;", isSearch);
  // console.log("posts;", posts);
  return (
    <>
      {!disabledSearch && (
        <Search
          dataSource={dataSource}
          setPosts={setPosts}
          // setIsSearch={setIsSearch}
          setSearchData={setSearchData}
        />
      )}
      <Table
        // dataSource={dataSource}
        dataSource={posts.data}
        columns={columns}
        loading={posts.isLoading || loading}
        pagination={false}
        bordered={bordered}
      />
      {dataSource.length > 0 && (
        <Pagination
          // dataSource={dataSource}
          dataSource={searchData.length > 0 ? searchData : dataSource}
          setPosts={setPosts}
        />
      )}
    </>
  );
};
export default ListingTable;
