import { useNhostAuth } from "@nhost/react-auth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
    let { user, isAuthenticated } = useNhostAuth();
    let location = useLocation();

    if (!isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/onboard/sign-in" state={{ from: location }} replace />;
    }

    return children;
}