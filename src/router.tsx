import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Risks from './pages/Risks';
import Domino from './pages/Domino';
import Scenarios from './pages/Scenarios';

export const router = createBrowserRouter([
 {path:'/dashboard', element:<Dashboard/>},
 {path:'/portfolio', element:<Portfolio/>},
 {path:'/risks', element:<Risks/>},
 {path:'/domino', element:<Domino/>},
 {path:'/scenarios', element:<Scenarios/>},
 {path:'*', element:<Dashboard/>}
]);
