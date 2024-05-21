import InputLogin from "./components/InputLogin";
import logo from "assets/images/logo.png";

function Login() {
    return (
        <div className="flex justify-center items-center bg-white1 min-h-screen">
            <div className="w-96 h-96 shadow-3xl rounded-2xl p-16 bg-white">
                <form className="space-y-6" action="#">
                    <img
                        className="object-fill"
                        src={logo}
                        alt="Logo da b2bit"
                    />
                    <div>
                        <InputLogin />
                    </div>
                    <div>
                        <InputLogin />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md w-full bg-blueb2 text-White text-xl font-bold p-2"
                    >
                        Sign In
                    </button>
                </form>
            </div>

            <form></form>
        </div>
    );
}

export default Login;
