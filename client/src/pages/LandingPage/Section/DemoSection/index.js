import { PulseLoader } from "react-spinners";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import { FaRegQuestionCircle } from "react-icons/fa";

import {
  Container,
  Button,
  CaptureIntervalInput,
  ImagePreview,
  WebcamView,
  ResultDisplay,
  CameraAndPreviewContainer,
  LoadingBar,
  ButtonContainer,
  SignSet,
} from "./styled";
import signLanImage from "./img/sign-lan-image.png";
import howcamera from "./img/howusecamera.png";
import Modal from "../../../../components/Modal";

function DemoSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [demoResult, setDemoResult] = useState("");

  const webcamRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const defaultCaptureInterval = 3;
  const [captureInterval, setCaptureInterval] = useState(
    defaultCaptureInterval,
  );
  const [capturedImage, setCapturedImage] = useState(null);
  const [countdown, setCountdown] = useState(captureInterval);
  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  };

  const captureImage = () => {
    if (webcamRef.current) {
      setIsLoading(true);
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(null);

      // Base64 인코딩된 데이터 URL을 Blob 객체로 변환
      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "webcam-image.png", {
            type: "image/png",
          });

          // FormData 객체 생성
          const fd = new FormData();
          fd.append("file0", file);

          // FormData 객체의 내용을 로깅
          for (let [key, value] of fd.entries()) {
            console.log(`${key}:`, value);
          }

          // 캡처된 이미지를 서버에 전송
          return axios.post("/api/sign-lan/analysis", fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        })
        .then((response) => {
          console.log("Image sent successfully", response);
          setDemoResult(response.data.result); // 랜덤 알파벳 업데이트
          setCapturedImage(imageSrc); // 요청이 완료되면 이미지 설정
        })
        .catch((error) => {
          console.error("Error sending image", error);
          setDemoResult("Error"); // 랜덤 알파벳 업데이트
          setCapturedImage(imageSrc); // 요청이 완료되면 이미지 설정
        })
        .finally(() => {
          setIsLoading(false);
          setCapturedImage(imageSrc);
          setCountdown(captureInterval); // 카운트다운 재설정
        });
    }
  };

  const toggleAutoCapture = () => {
    if (isCapturing) {
      setCountdown(defaultCaptureInterval); // 자동 캡처 중지 시 카운트다운 재설정
    }
    setIsCapturing(!isCapturing); // 자동 캡처 상태를 반전시킵니다.
  };

  useEffect(() => {
    let id;
    if (isCapturing) {
      id = setInterval(() => {
        if (countdown === 1) {
          captureImage();
          setCountdown(captureInterval); // 카운트다운을 다시 설정
        } else {
          setCountdown(countdown - 1);
        }
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [isCapturing, countdown]);

  const [showTip, setShowTip] = useState(false);
  const [showCameraTip, setShowCameraTip] = useState(false);

  const toggleShowTip = () => {
    setShowTip(!showTip);
  };

  return (
    <Container>
      <h1 className="moveto" id="demo-section" />
      <h1>수화로 세상과 소통해 보아요.</h1>
      <h1>당신의 이야기를 듣고 싶습니다.</h1>

      <Modal show={showCameraTip} onClose={() => setShowCameraTip(false)}>
        <img src={howcamera} />
      </Modal>

      {showTip && <img className="sign-set-image" src={signLanImage} />}
      {/*<SignSet className={showTip ? "active" : ""} />*/}
      <CameraAndPreviewContainer>
        <button id="tip-btn" onClick={toggleShowTip}>
          수화 알아가기
        </button>
        <WebcamView>
          <Webcam ref={webcamRef} />
        </WebcamView>
        <ImagePreview>
          <div className="countdown-display">
            {isCapturing && !isLoading && <span>{countdown}초</span>}
            {/*{!isCapturing && <span>{countdown}초</span>}*/}
          </div>
          {isLoading ? (
            // isLoading 상태가 true일 때 로더를 표시합니다.
            <PulseLoader color="#cccccc" size="32" margin="8" />
          ) : capturedImage ? (
            <>
              <img src={capturedImage} alt="Captured" />
              <div className="overlay-text">{demoResult}</div>
            </>
          ) : (
            <div className="placeholder">
              카메라에 수화를 취한 후 <span>캡처</span> <br /> 버튼을 클릭해
              결과를 확인하세요
            </div>
          )}
        </ImagePreview>
      </CameraAndPreviewContainer>

      <ButtonContainer>
        <div className="flex_1">
          <Button
            disabled={(isCapturing || isLoading) && true}
            onClick={captureImage}
          >
            캡처
          </Button>
        </div>
        <div className="flex_1 flex_row">
          <Button
            className={isCapturing && "active"}
            onClick={toggleAutoCapture}
          >
            {isCapturing ? "자동 캡처 중지" : "자동 캡처 시작"}
          </Button>

          <CaptureIntervalInput
            className="btn_1"
            type="number"
            value={captureInterval}
            onChange={(e) => {
              const newInterval = parseInt(e.target.value, 10);
              if (newInterval >= defaultCaptureInterval) {
                setCaptureInterval(newInterval);
              }
            }}
            disabled={(isCapturing || isLoading) && true}
            // title="자동 캡처를 할 때 캡처 간 딜레이 시간입니다."
          />
          <div className="tooltip">
            <FaRegQuestionCircle className="fa-question-circle" />
            <span className="tooltiptext">
              자동 캡처를 할 때 캡처 간 딜레이 시간입니다.
            </span>
          </div>
        </div>
      </ButtonContainer>
      <button
        className="camera-tip"
        onClick={() => setShowCameraTip(!showCameraTip)}
      >
        카메라가 안보이시나요?
      </button>
    </Container>
  );
}

export default DemoSection;
