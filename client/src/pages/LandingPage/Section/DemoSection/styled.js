import styled from "styled-components";

export const SignSet = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  background-color: #f2f2f2; // 백그라운드 컬러를 밝은 톤으로 변경
  padding: 20px;
  color: #333; // 기본 텍스트 컬러를 어둡게 설정

  .camera-tip {
    float: left;
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
    padding: 44px 64px;
    width: 50%;
    border: none;
    padding: 0;
  }
  #tip-btn {
    position: absolute;
    top: -40px;
    left: 10px;
    font-size: 16px;
    height: 40px;
    width: 160px;
    color: #aaaaaa;

    border: 3px solid #cccccc;
    cursor: pointer;

    &:hover {
      transition: 0.2s;
      border: 3px solid #000;

      color: #000; // 호버 상태일 때의 글자 컬러를 밝게 설정
    }
  }

  .moveto {
    margin-bottom: 180px;
  }

  h1 {
    font-family: "Diphylleia", serif;
    color: #aaaaaa;
    padding: 0;
    margin: 0;
    margin-bottom: 24px;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 13px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    left: -20px;
  }

  .tooltip .fa-question-circle {
    position: absolute;
    top: -5px;
    right: 0;
    font-size: 25px;
    color: #a0a0a0;
  }
`;

export const CameraAndPreviewContainer = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: stretch; // 내부 아이템들이 동일한 높이를 갖도록 설정
  width: 95%;
  //max-width: 1440px;
`;

export const WebcamView = styled.div`
  flex: 1;
  border: 3px solid #cccccc;
  position: relative;
  display: flex;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  color: #cccccc;
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  }
`;

export const ImagePreview = styled.div`
  padding: 10px;
  margin: 10px;
  flex: 1;
  border: 3px solid #cccccc;
  background-color: #f8f8f8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;

  .countdown-display {
    //font-family: "Permanent Marker", serif;
    position: absolute;
    top: 16px;
    right: 28px;
    font-size: 1.5em; // 글자 크기를 크게 설정
    color: #ffa726;
    z-index: 10;
  }
  p {
    text-align: center;
    padding: 0;
    margin: 0 0 10px 0;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  }

  .placeholder {
    font-size: 1.5em;
  }

  .overlay-text {
    //font-family: "Diphylleia", serif;
    //font-family: "Rubik Bubbles", cursive;
    font-family: "Permanent Marker", serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    font-size: 8em; // 글자 크기를 크게 설정
    //padding: 0.1em; // 문자 주위의 여백을 조정하여 비율 맞춤
    padding-left: 8px;
    padding-right: 8px;
    //padding-bottom: 0.2em;
    padding-bottom: 0.2em;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffa726;
    z-index: 10;
    //width: 1em; // 너비를 글자 크기에 맞춤
    height: 1em; // 높이를 글자 크기에 맞춤
    cursor: pointer; // 마우스 오버 시 포인터로 변경
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  .flex_1 {
    flex: 1;
    margin: 10px;
  }

  .flex_row {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  font-size: 1.5em;
  color: #aaaaaa;
  border: 3px solid #cccccc; // 테두리 추가 및 컬러 조정
  background-color: #fff; // 버튼 배경을 밝게 설정
  cursor: pointer;

  &.active {
    transition: 0.2s;
    background-color: #ffa726; // 호버 상태일 때의 배경 컬러를 이미지의 레드와 맞춤
    color: #fff; // 호버 상태일 때의 글자 컬러를 밝게 설정
  }

  &:hover {
    transition: 0.2s;
    background-color: #ffa726; // 호버 상태일 때의 배경 컬러를 이미지의 레드와 맞춤
    color: #fff; // 호버 상태일 때의 글자 컬러를 밝게 설정
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: default;
  }
`;

export const CaptureIntervalInput = styled.input`
  border: 3px solid #cccccc; // 테두리 추가 및 컬러 조정
  font-size: 2em;
  padding: 0;
  margin: 0;
  width: 64px;
  padding-left: 24px;
  margin-left: 20px;
  color: #aaaaaa;
  &:focus {
    outline: none;
  }
  height: 80px;
`;

export const LoadingBar = styled.div`
  width: 100%;
  background-color: #ddd;
  margin: 20px 0;

  div {
    height: 5px;
    width: 0;
    background-color: #ffa726;
    transition: width 0.5s ease-in-out;
  }
`;

const TooltipModal = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  z-index: 1;
`;
