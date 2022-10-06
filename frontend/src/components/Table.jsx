import React from 'react'
import { useState, useEffect, useRef} from 'react';
import arbitrations from '../arbitration-translations';
import './table.css'
import Fuse from 'fuse.js'
import { Link } from 'react-router-dom';

export const Table = () => {
  const [data, setData] = useState(arbitrations.offerings);
  const [filter, setFilter] = useState("");
  const [searches, setSearches] = useState([])
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFilter("");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const fuse = new Fuse(data.filter(item => item.tradable), {
      keys: ['name']
    });
    const res = fuse.search(filter, {"limit": 5});
    console.log(res);
    setSearches(res);
  };
  const handleSearchClick = (item) => {
    return function (e) {
      window.location.replace(`https://warframe.market/items/${item.market_name}`)
    }
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
        <div className="table__container">
          <div className="grid place-items-center h-24 w-screen bg-slate-800">
          <section ref={wrapperRef} id="search" class="pt-3 relative">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input autocomplete="false" onChange={handleFilterChange} value={filter} type="text" id="table-search" className="block p-2 pl-10 w-80 border border-slate-600 focus:border-sky-300 text-sm rounded-lg bg-slate-600
                 placeholder-gray-400 text-white focus:ring-blue-500" placeholder="Search for items"/>
            </div>
            <ul className={`${filter === "" || searches.length === 0 ? "none":""} p-1 search__results absolute bg-slate-900 w-80 shadow-lg content-start text-left`}>
              {
                searches.map(search => <Link to={`/item/${search.item.market_name ? search.item.market_name:'strun_prime'}`}> <li className="hover:bg-slate-700 text-slate-200 text-md font-bold hover:text-sky-300 cursor-pointer pl-2 py-1">{search.item.name}</li></Link>)
              }
            </ul>
          </section>
          </div>
          <table className="table text-gray-500 dark:text-gray-400">
            <thead className="table__head text-gray-700 uppercase bg-gray-50 dark:bg-slate-600 dark:text-slate-400">
              <tr>
                <th>Reward</th>
                <th>Vitus Cost</th>
                <th>Market Price</th>
                <th>Quantity Traded </th>
                <th>Plat/Vitus</th>
              </tr>
            </thead>
            <tbody className="table__body dark:bg-slate-800">
              {data.map(item => ( (item.tradable) ? <tr>
                <td><Link to={`/item/${item.market_name}`}>{item.name} </Link> </td>
                <td className="text-purple-400"> {item.cost} ☁</td>
                <td> {item.marketPrice ? item.marketPrice: "N/A"}</td>
                <td> {item.quantity ? item.quantity: "N/A"} </td>
                <td> {item.cost && !isNaN(item.marketPrice) ? item.marketPrice/item.cost: "N/A"} </td>
              </tr>: ""))}
            </tbody>
          </table>
        </div>
  )
}
