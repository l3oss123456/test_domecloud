import styled from "styled-components";

export default {
  screenContainer: styled.div`
    margin: 30px 100px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  mainTitle: styled.p`
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
  `,
  title: styled.p`
    font-size: 20px;
    font-weight: 500px;
    padding: 10px 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgb(197 196 196);
  `,
  section: styled.div`
    margin-top: 20px;
    box-shadow: 1px 1px 1px 2px rgb(229 229 229);
    padding-bottom: 10px;
  `,
  loading: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  containerForm: styled.div`
    padding-right: 80px;

    @media (min-width: 1200px) {
      padding-right: 110px;
    }
    @media (min-width: 1300px) {
      padding-right: 180px;
    }
  `,
  footer: styled.div`
    opacity: 0.8;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-right: 40px;
    background-color: black;
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};
