import {Navigate, useLocation} from 'react-router-dom';
import {Paths} from "./globalRoutes/paths.js";



export const ProtectedRoute= ({children}) => {
    const location = useLocation();

    let isAuth=false;


    // if (loading) return null;
    return isAuth? <>{children}</> :
        <Navigate to={Paths.LOGIN} replace state={{from: location}}/>;

};