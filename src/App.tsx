import './App.css'
import Form from './components/Form'
import Success from './components/Succes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </Router> 

  )
}

export default App
