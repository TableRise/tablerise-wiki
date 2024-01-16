import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
        </Route>
        <Route path='/' element={<h1>TableRise Wiki</h1>} />
      </Routes>
    </>
  );
}

export default App
