import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom";

interface Proptypes {
  children: ReactNode
}

const ProtectedRoute = (props: Proptypes) => {
  const {children} = props;
  const auth = localStorage.getItem('auth');
  const currentRoute = useLocation().pathname;

  if(!auth && currentRoute !== '/login') {
    return <Navigate to='/login' replace />
  }

  if (auth && currentRoute === '/login') {
    return <Navigate to='/orders' replace />
  }

  return<>{children}</>
}

export default ProtectedRoute;