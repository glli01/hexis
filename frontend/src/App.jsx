import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect , useState} from 'react';
import arbitrations from './arbitration-translations';
import axios from 'axios';

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
          <div className="w-screen h-40">
            <img src={logo} className="w-screen h-40 object-cover" />
          </div>
          <table className="sm: table-auto w-4/5 theme-dark text-left">
            <thead className="text-white font-bold bg-slate-800">
              <tr className="h-4 p-3">
                <th>Reward</th>
                <th>Vitus Cost</th>
                <th>Market Price</th>
                <th>Quantity Traded </th>
                <th>Vitus/Plat</th>
              </tr>
            </thead>
            <tbody className="text-white bg-slate-600">
              {arbitrations.offerings.map(item => (<tr>
                <td> {item.name}</td>
                <td> {item.cost}</td>
                <td> {item.marketPrice ? item.marketPrice: "N/A"}</td>
                <td> {item.quantity ? item.quantity: "N/A"} </td>
                <td> {item.cost && !isNaN(item.marketPrice) ? item.marketPrice/item.cost: "N/A"} </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
