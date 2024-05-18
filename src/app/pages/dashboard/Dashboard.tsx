import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <p>Dashboard</p>
            <Link
                className="bg-yellow-400 rounded-md p-2 text-center text-white"
                to="/login"
            >
                Login
            </Link>
        </div>
    );
}

export default Dashboard;
