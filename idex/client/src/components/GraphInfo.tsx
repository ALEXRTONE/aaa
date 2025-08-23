import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Charts from '../components/Charts';
import { apiCommodities, apiMeses, apiProductos } from "../api/apiCommodities";

import datasetJson from '../utils/datos_commodities.json' with { type: 'json'};
import type { Producto } from "../interfaces/Commodities";

const GraphInfo = () => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const [productos, setProductos] = useState<string[]>([]);
  const [meses, setMeses] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [precios, setPrecios] = useState<Producto[]>([]);

  useEffect( () => {
    const fetchData = async () => {
      const meses_ = await apiMeses();
      if (meses_) {
        setMeses(meses_.map( (mes) => `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}`));

        setSelectedMonths(meses_.map( (mes) => `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}`));
      }   
        
      const productos_ = await apiProductos()
      if (productos_) {
        setProductos(productos_);
      }
    };

    fetchData();
  }, [])

  useEffect( () => {    
    const fetchPrecios = async () => {
      const commodities = await apiCommodities();
      if (commodities) {
      setPrecios( commodities.filter(el => selectedMonths.includes( `${monthNames[parseInt(el.FECHA.slice(5,7))-1]} ${el.FECHA.slice(0,4)}` )) );
      }
    };

    fetchPrecios();    
  }, [selectedMonths])

  // for updating state on check
  function handleSelect(value:boolean, name:string) {
    if (value) {
      setSelectedMonths([...selectedMonths, name]);
    } else {
      setSelectedMonths(selectedMonths.filter((item) => {
        // data.splice(index,1)
        return item !== name
    }));
    }
  };
  // select all function
  function selectAll(value:boolean) {
    if (value) { // if true
     setSelectedMonths(meses); // select all
    } else { // if false
      setSelectedMonths([]); // unselect all
    }
  };
  // render checkboxes
  return (
    <>
    <div className="flex flex-col">
      <div>
        <Checkbox name="all" value={selectedMonths.length === meses.length} updateValue={selectAll}>Seleccionar Todos</Checkbox>
        <div className="bg-white rounded-lg w-full flex flex-col p-2 overflow-y-scroll max-h-40">
        {meses.map((item) => {
          return <Checkbox key={item} name={item} value={selectedMonths.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
        }) }
        </div>
      </div>
      <button type="submit"  className="flex justify-end pr-2 bg-blue-500 text-white rounded-b-lg">
        {">>"}
      </button>
     </div>
     <div className='p-5 rounded-sm border-solid'>
        {productos.map( (producto, index) => <Charts key={index} name={producto} meses={ precios.filter( el => el.PRODUCTO == producto).map( el => `${monthNames[parseInt(el.FECHA.slice(5,7))-1]} ${el.FECHA.slice(0,4)}` ) } precio={ precios.filter( el => el.PRODUCTO == producto ).map( el => el.PRECIO ) } />) }
      </div>
    </>
  )
}

export default GraphInfo