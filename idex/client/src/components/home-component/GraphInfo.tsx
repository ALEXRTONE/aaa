import { useState, useEffect, type ChangeEvent } from "react";
import Checkbox from "./Checkbox";
import Charts from './Charts';
import SectorFilter from './SectorFilter';
import { apiCommodities, apiMeses, apiProductos } from "../../api/apiCommodities";
import { apiSectors } from '../../api/apiSectors'
import type { Producto, Sector, SectorInterface } from "../../interfaces/Commodities";
import { useAuth } from '../../utils/AuthProvider.js';


const GraphInfo = () => {

  console.log('useauth en home: ', useAuth());
/******************************** Constants ********************************/
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  const [sectores, setSectores] = useState<Sector[]>([]);

  const [searchInput, setSearch] = useState<string>('');

  const [productos, setProductos] = useState<string[]>([]);
  const [selectedProductos, setSelectedProductos] = useState<string[]>([]);

  const [meses, setMeses] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const [precios, setPrecios] = useState<Producto[]>([]);
  const [commod, setCommod] = useState<Producto[]>([]);

  const sectorComponent: SectorInterface[] = sectores.map( sector => {
    const sectorName = sector.SECTOR
    const sectorCommodity = [...new Set(commod.filter(item => item.SECTOR_ID==sector.ID).map(item => item.PRODUCTO))]

    return createSector(sectorName, sectorCommodity)
  })  

/******************************** useEffect ********************************/
  useEffect( () => {
    const fetchData = async () => {
      const meses_ = await apiMeses();
      if (meses_) {
        setMeses(meses_.map( (mes) => `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}`));

        setSelectedMonths(meses_.map( (mes) => `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}`));
      }  ; 
        
      const productos_ = await apiProductos();
      if (productos_) {
        setProductos(productos_);
        setSelectedProductos(productos_);
      };

      const sectores_ = await apiSectors();
      if (sectores_) {
        setSectores(sectores_);
      };
      
      const commod_ = await apiCommodities();
      if (commod_) {
        setCommod(commod_);
      };
    };

    fetchData();
  }, [])

  useEffect( () => {    
    const fetchPrecios = async () => {
      const commodities = await apiCommodities();
      if (commodities) {
        setPrecios( commodities.filter(el => {
              const inMonth = selectedMonths.includes(`${monthNames[parseInt(el.FECHA.slice(5,7))-1]} ${el.FECHA.slice(0,4)}`);
              const inProducts = selectedProductos.includes(el.PRODUCTO);
              return inMonth&&inProducts
            }
          )
        );
      };
    };

    fetchPrecios();    
  }, [selectedMonths, selectedProductos])

/******************************** functions ********************************/
  function createSector(name: string, commodity: string[]): SectorInterface {
    return {name, commodity}
  }

  function handleSelectProductos(value:boolean, name:string) {
    if (value) {
      setSelectedProductos([...selectedProductos, name]);
    } else {
      setSelectedProductos(selectedProductos.filter((item) => {
        // data.splice(index,1)
        return item !== name
    }));
    }
  };

  // for updating state on check
  function handleSelectMeses(value:boolean, name:string) {
    if (value) {
      setSelectedMonths([...selectedMonths, name]);
    } else {
      setSelectedMonths(selectedMonths.filter((item) => {
        // data.splice(index,1)
        return item !== name
    }));
    }
  };

  function selectAllProductos(value:boolean) {
    if (value) { // if true
     setSelectedProductos(productos); // select all
    } else { // if false
      setSelectedProductos([]); // unselect all
    }
  };

  // select all function
  function selectAllMeses(value:boolean) {
    if (value) { // if true
     setSelectedMonths(meses); // select all
    } else { // if false
      setSelectedMonths([]); // unselect all
    }
  };

  function searcher(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.toLowerCase())
  }

  return (
  <>
    <div className='p-14 h-screen w-[55%] ml-56'>
      <h2  className='mb-6 text-2xl font-bold' >Accesos a datos históricos</h2>
      <div id="mesChecks">
        <Checkbox name="all" value={selectedMonths.length === meses.length} updateValue={selectAllMeses}>Todos los meses</Checkbox>
        <div className="bg-white rounded-lg w-full flex flex-col p-2 overflow-y-scroll max-h-40 shadow">
          {meses.map((item) => {
            return <Checkbox key={item} name={item} value={selectedMonths.includes(item)} updateValue={handleSelectMeses}>{item}</Checkbox>
          }) }
        </div>
      </div>

      <div id="charts" className='p-5 rounded-sm border-solid'>
        {productos.filter( el => selectedProductos.includes(el)).map( (producto, index) => <Charts key={index} name={producto} meses={ precios.filter( el => el.PRODUCTO == producto).map( el => `${monthNames[parseInt(el.FECHA.slice(5,7))-1]} ${el.FECHA.slice(0,4)}` ) } precio={ precios.filter( el => el.PRODUCTO == producto ).map( el => el.PRECIO ) } />) }
      </div>
    </div>

    <div id="productosChecks" className="sticky h-fit top-10 w-1/3 flex flex-col mr-2 p-10 bg-zinc-50 rounded-[10px] border-l border-solid border-neutral-200 shadow-md">
      <h3 className="font-bold text-xl m-y-4">
        Seleccionar los commodities
      </h3>
      <Checkbox name="allProductos" value={ productos.length == selectedProductos.length } updateValue={selectAllProductos} >Todos los commodities</Checkbox>
      <input id="buscadorCommodity" onChange={searcher} className="mb-2.5 w-full p-2 rounded-[8px] border border-solid border-neutral-300" type="text"></input>
      <div className="flex flex-col overflow-y-scroll">
      {sectorComponent.map( (sector, i) => <SectorFilter key={i} search={searchInput} name={sector.name} products={selectedProductos} commodities={sector.commodity} handleSelectProductos={handleSelectProductos}/> )}
      </div>
    </div>
  </>
  )
}

export default GraphInfo
