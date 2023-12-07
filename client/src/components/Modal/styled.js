import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  //background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  //align-items: center;

  .content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 5px;
    height: 400px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 24px;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
