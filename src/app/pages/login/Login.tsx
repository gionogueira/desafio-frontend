import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailLength = useMemo(() => {
        console.log("Executou!");
        return email.length * 1000;
    }, [email.length]);

    useEffect(() => {
        // if (window.confirm("Você é um usuário?")) {
        //     console.log("Sim!");
        // } else {
        //     console.log("Não!");
        // }
    }, []);

    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);

    const handleClick = () => {
        navigate("/pagina-inicial");
    };

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <label>
                    <span>E-mail</span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter"
                                ? inputPasswordRef.current?.focus()
                                : undefined
                        }
                    />
                </label>

                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={inputPasswordRef}
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
