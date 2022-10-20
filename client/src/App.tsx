import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './views/Login';
import { Register } from './views/Register';
import {Dashboard} from './views/Dashboard'
import { NewReview } from './views/NewReview';
import { Review } from './views/Review';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}  />
          <Route path='/newReview' element={<NewReview />}  />
          <Route path='/review' element={<Review />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
