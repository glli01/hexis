import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GiBearFace } from 'react-icons/gi'
import { Parallax } from 'react-parallax';
import arbitrations from '../arbitration-translations';
import items from '../itemInfo';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';


const Item = () => {
    const getAuctions = async () => {

    };
    const {itemName} = useParams();
    const [item, setItem] = useState({});
    useEffect( () => {
        setItem(items.items.find(offering => offering.url_name === itemName));

    }, []);

  return (
    <div className="body w-screen bg-slate-700 text-center">
        <Parallax bgImage="/parallax.jpg" bgImageAlt="" strength={200} className="h-100 w-screen">
            <div className="grid w-screen place-items-center">
                <div className="h-56"></div>
            {/* <div className="w-screen h-56">
                <img src="/497945.jpg" className="w-screen h-96 object-cover" />
            </div> */}
            <div className="h-40 w-screen relative bg-slate-800 bg-opacity-60 grid place-items-center">
                <div className="grid place-items-center relative w-60 absolute banner">
                <div className="block h-40 w-40 ring ring-sky-300 hover:ring-cyan-500 rounded-full grid place-items-center absolute banner bg-slate-900 shadow-lg">
                    {item.icon ?
                    <img src={`https://warframe.market/static/assets/${item.icon}`} className="h-40 hvr-grow-a-lot m-auto cursor-pointer object-cover"/>:
                        <Spinner/>
                    }
                </div>
                {/* <div className="text-slate-50 text-2xl font-semibold pt-20">The Arbiter's Of Hexis <br/> <div className="text-xl text-slate-300 font-normal">Arbitration Rewards</div></div> */}
                </div>
                <div className="absolute grid place-items-center w-screen h-20 bottom-2 text-slate-50 font-semibold text-xl leading-none uppercase">{item.item_name} <a href={item.wiki_link} className="text-sm font-thick text-sky-500 p-0 m-0 leading-none underline cursor-pointer hover:text-sky-300 item__move__close">Wiki </a> </div>
            </div>
            </div>
            <div className="h-24 bg-slate-800"></div>
            <div className="h-96 bg-slate-700">

            </div>
            <div className="h-10 bg-slate-700"> </div>
            <div className="h-20 bg-slate-700 grid w-screen place-items-end place-items-center text-white font-semibold"> 
            <div className="grid place-items-center"><span className="flex footer"><GiBearFace/> <a href="" className="hover:text-sky-300"> GiantTeddyBear </a></span></div> 
            </div>
        </Parallax>
    </div>
  )
}

export default Item