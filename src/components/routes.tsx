import { Routes, Route } from 'react-router';

const RoutesComponent = () => {
     return (
        <Routes>
            <Route path="/" element={<div>This is home page</div>} />
            <Route path="/about" element={<div>This is about page</div>} /> 
        </Routes>
     )
}

export default RoutesComponent;