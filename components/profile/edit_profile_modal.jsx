import style from "./ProfileCard.module.css";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const EditProfileModal = (props) => {
  const {
    show,
    handleClose,
    handleOnChange,
    handleFileChange,
    tempImgUrl,
    updateUserData,
  } = props;

  const userData = useSelector((state) => {
    return state.userReducer;
  });

  return (
    <Modal show={show} onHide={handleClose} className={style.card}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container className="text-center">
            <img src={tempImgUrl} className={style.profilePic} />
          </Container>
          <Form.Group className="mb-3">
            <Form.Label>Upload your profile pic</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Fullname
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="string"
                defaultValue={userData.fullname}
                id="fullname"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Username
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="string"
                defaultValue={userData.username}
                id="username"
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control
                readOnly
                disabled
                type="email"
                defaultValue={userData.email}
                id="email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control
                readOnly
                disabled
                type="password"
                defaultValue="*******"
                id="password"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Discard
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            updateUserData();
          }}
        >
          <i class="fa-solid fa-floppy-disk"></i>
          {"   "}
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
