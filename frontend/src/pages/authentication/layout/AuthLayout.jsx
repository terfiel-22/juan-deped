import { Link, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <ul>
                <li><Link to="/auth">Login</Link></li>
                <li><Link to="/auth/register">Register</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AuthLayout