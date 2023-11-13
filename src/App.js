import './App.css';
import Initial_Search_Search_Page from './components/Initial_Search_Page'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <Initial_Search_Search_Page />
      </LocalizationProvider>
    </>
  );
}

export default App;
