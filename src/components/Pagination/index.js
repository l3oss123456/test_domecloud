import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import pushUrl from "../../utils/pushUrl";
import styles from "./styles";

const getCurrentPosts = (posts, currentPage, postsPerPage) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let _post_key = posts;
  let currentPosts = [];
  if (posts) {
    _post_key = Object.keys(posts).map((key) => {
      return { ...posts[key], key: posts[key].key ? posts[key].key : key };
    });
    currentPosts = Object.values(_post_key).slice(
      indexOfFirstPost,
      indexOfLastPost
    );
  }
  return currentPosts;
};

const PaginationComponent = ({ dataSource, setPosts }) => {
  const optionsPagination = [10, 20, 30, 40, 50];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(optionsPagination[0]);

  useEffect(() => {
    const currentPosts = getCurrentPosts(dataSource, currentPage, postsPerPage);
    setPosts({
      isLoading: false,
      data: currentPosts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);
  useEffect(() => {
    try {
      //   if (currentPosts < indexOfLastPost) {
      //     paginate(1);
      //   }
      const queryStringObj = {
        page: currentPage,
        limit: postsPerPage,
      };
      pushUrl(queryStringObj);
    } catch (error) {
      console.log("error from pagination component : ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(setPostsPerPage);
  };

  //   const onShowSizeChange = (current, size) => {
  //     console.log("current;", current);
  //     console.log("size,", size);
  //   };

  return (
    <styles.containerPagination>
      {dataSource.length > 0 && (
        <Pagination
          //   showSizeChanger={false}
          showQuickJumper
          //   defaultCurrent={1}
          current={currentPage}
          pageSize={postsPerPage}
          total={dataSource.length}
          //   total={500}
          responsive={true}
          pageSizeOptions={optionsPagination}
          onChange={onChange}
          //   onShowSizeChange={onShowSizeChange}
        />
      )}
    </styles.containerPagination>
  );
};
export default PaginationComponent;
