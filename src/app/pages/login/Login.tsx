import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        navigate("/pagina-inicial");
    };

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    };

    return (
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Sign In
                </button>
            </form>
            <button
                className="bg-blue-950 rounded-md p-2 text-center text-white w-64 mt-4"
                onClick={handleClick}
            >
                Página Inicial
            </button>
        </div>
    );
}

export default Login;
