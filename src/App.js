import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import WithSuspense from './components/hoc/WithSuspense';
import './App.css';

const Cv = WithSuspense(lazy(() => import('./components/Cv/Cv')));
const Calculator = WithSuspense(lazy(() => import('./components/Calculator/Calculator')));

function App() {
    return (
        <Routes>
            <Route path='/CV-Project/' element={<Layout/>}>
                <Route index element={<Cv/>}/>
                <Route path='calculator' element={<Calculator/>}/>
            </Route>
        </Routes>
    );
}

export default App;
