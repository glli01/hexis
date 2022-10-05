import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect , useState} from 'react';
import axios from 'axios';
import { GiBearFace } from 'react-icons/gi';
import { Table } from './components/Table';
const App = () => {
  const [itemPrices, setItemPrices] = useState({});

  const fetchItemPrices = async () => {
    axios.get('')
    /*first for each of the items from arbitrationTranslations -> grab the item information
    This item information contains a lot but the most important thing is url_name which you use in the endpoint /item/url_name/orders
    -> grab orders
    Orders will come back with lots of data which is cool, but you just need to get the minimum price
    -> parse orders for minimum price and display that and use that for calculations
    */
  }
  useEffect( () => {

  }, []);
  return (
    <div className="App">
      <Navbar/>
      <div className="body w-screen bg-slate-700">
        <div className="grid w-screen place-items-center">
          <div className="w-screen h-56">
            <img src="/497945.jpg" className="w-screen h-96 object-cover" />
          </div>
          <div className="h-40 w-screen relative bg-slate-800 bg-opacity-60 grid place-items-center">
            <a href="https://warframe.fandom.com/wiki/Arbiters_of_Hexis#Arbitration_Honors" className="absolute banner">
              <img src="/arbiters.png" className="cursor-pointer hvr-grow ring ring-sky-300 w-40 h-40 object-cover rounded-full shadow-lg"/>
            </a>
            <div className="text-slate-50 text-2xl font-semibold pt-20">The Arbiter's Of Hexis <br/> <div className="text-xl text-slate-300 font-normal">Arbitration Rewards</div></div>
          </div>
          <Table></Table>
        </div>
        <div className="h-10"> </div>
        <div className="h-20 grid w-screen place-items-end place-items-center text-white font-semibold"> 
          <div className="grid place-items-center"><span className="flex footer"><GiBearFace/> <a href="" className="hover:text-sky-300"> GiantTeddyBear </a></span></div> 
        </div>
      </div>

    </div>
  );
}

export default App;
