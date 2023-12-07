import { Container } from "./styled";
import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
  if (!props.show) return null;

  const onCloseClick = (e) => {
    e.stopPropagation();
    props.onClose();
  };

  return (
    <Container onClick={onCloseClick}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {/*<button className="close-btn" onClick={props.onClose}>*/}
        {/*  <IoMdClose />*/}
        {/*</button>*/}
        {props.children}
      </div>
    </Container>
  );
};

export default Modal;
