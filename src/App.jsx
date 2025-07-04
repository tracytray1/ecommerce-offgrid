import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return (
    <>
      <h1>I am the shop page</h1>
    </>
  )

}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> } />
      </Route>
    </Routes>
  );
}

export default App;
