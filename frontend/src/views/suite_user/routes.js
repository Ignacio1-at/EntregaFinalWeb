import Home from './home/Home';
import Login from './login/Login';
const routesUser = [
    {
        path: "/",
        component: Home,
        exact: true
        
    },
    {
        path: "/login",
        component: Login,
        exact: true
        
    }
];

export default routesUser;
