import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Table1  from './Table1';
import Small_table from "./Small_table";
import  Grid  from '@material-ui/core/Grid';
import { Col ,Row} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
    <span className="container">
       <Navbar />
<Small_table />
       <Table1 />
        
</span>
 
    </div>
  );
}

export default App;
