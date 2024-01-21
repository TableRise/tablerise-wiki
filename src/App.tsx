import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import Homepage from './pages/Homepage';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
        </Route>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App
