import { useRef } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    const counterRef = useRef({ counter: 0 });
    return (
        <div>
            <p>Dashboard</p>
            <p>Contador:{counterRef.current.counter}</p>
            <Link
                className="bg-yellow-400 rounded-md p-2 text-center text-white"
                to="/login"
            >
                Login
            </Link>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter++)}>
                Resultado
            </button>
        </div>
    );
}

export default Dashboard;
