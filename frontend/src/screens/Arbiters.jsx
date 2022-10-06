import React from 'react'
import { Table } from '../components/Table'
import { GiBearFace } from 'react-icons/gi';
const Arbiters = () => {
  return (
    <div className="body w-screen bg-slate-700 text-center">
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
  )
}

export default Arbiters