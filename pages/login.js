import MyFooter from "../components/footer";
import MyLogin from "../components/login";
import MyNavbar from "../components/navbar";

const Login = () => {
    return (
        <>
            <MyNavbar />
            <div>
            <MyLogin/>
            </div>
            <MyFooter/>
        </>
    );
};

export default Login;
