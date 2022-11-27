import style from "./ProfileCard.module.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { validateUser } from "../../util/validateUser";
import { useRouter } from "next/router";
import { retrieveUserById } from "../../redux/reducer/user";

const ProfileCard = (props) => {
  const { showModal } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const [imgFile, setImgFile] = useState();
  const [tempImgUrl, setTempImgUrl] = useState(
    "https://img.freepik.com/premium-vector/user-icon_6091-78.jpg"
  );

  const userData = useSelector((state) => {
    return state.userReducer;
  });

  useEffect(() => {
    if (userData.uid === null) {
      console.log("RETRIEVE DATA");
      const user = validateUser();
      if (user.status === "INVALID") {
        router.push("/");
      } else {
        dispatch(retrieveUserById(user.uid));
      }
      console.log(userData.uid);
    }
  }, []);

  const handleSubmit = async () => {
    const url = await uploadUserImage(imgFile);

    const data = {
      age: userData.age,
      email: userData.email,
      job: userData.job,
      profileUrl: url,
    };

    await insertUserBiodata(userData.uid, data);
  };

  return (
    <Card className={style.card}>
      <Card.Body className="text-center">
        <img src={userData.profileUrl} alt="" className={style.profilePic} />
        <Card.Title>
          <i className="fa-solid fa-user "></i>
          {"   "}
          <h4 className="d-inline">{userData.fullname}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-secondary ">
          <h5>{userData.username}</h5>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <i className="fa-solid fa-envelope"></i>
          {"   "}
          <h6 className="d-inline">{userData.email}</h6>
        </Card.Subtitle>

        <Button variant="primary" onClick={showModal} className="mt-1">
          <i className="fa-solid fa-user-pen"></i> {"   "}Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
