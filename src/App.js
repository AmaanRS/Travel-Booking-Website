import './App.css';
import Initial_Search_Search_Page from './components/Initial_Search_Page'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Landing_Page from './components/Landing_Page';
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing_Page />}></Route>
        <Route exact path='/hotel_booking' element={<LocalizationProvider dateAdapter={AdapterDayjs} >
              <Initial_Search_Search_Page />
            </LocalizationProvider>}>
            </Route>
      </Routes>
    </>
  );
}

export default App;
