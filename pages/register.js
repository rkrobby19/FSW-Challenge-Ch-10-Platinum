import MyNavbar from "../components/navbar";
import MyRegister from "../components/register";
import MyFooter from "../components/footer";

const Register = () => {
    return (
        <>
           <MyNavbar />
            <div>
            <MyRegister/>
            </div>
            <MyFooter/>
        </>
    );
};

export default Register;
