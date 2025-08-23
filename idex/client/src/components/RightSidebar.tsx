import { useEffect, useState } from "react";
import { apiProductos } from "../api/apiCommodities";
import Checkbox from "./Checkbox";


const style = {
    filtros: {
        padding: '40px',
        width: '24%',
        background: '#f9f9f9',
        borderLeft: '1px solid #e0e0e0',
        borderRadius: '5px'
    }
}

const RightSidebar = () => {
  const [productos, setProductos] = useState<string[]>([]);
  const [selectProductos, setSelectProductos] = useState<string[]>([]);

  useEffect(  () => {
    const fetchData = async () => {
      const productos_ = await apiProductos();
      if (productos_) {
        setProductos(productos_);
        setSelectProductos(productos_)
      }
    fetchData();
    };
  }, [])

  function handleSelect(value:boolean, name:string) {
    if (value) {
      setSelectProductos([...selectProductos, name]);
    } else {
      setSelectProductos(selectProductos.filter((item) => {
        // data.splice(index,1)
        return item !== name
    }));
    }
  };

  function selectAll(value:boolean) {
    if (value) { // if true
     setSelectProductos(productos); // select all
    } else { // if false
      setSelectProductos([]); // unselect all
    }
  };

    return (
      <div>
        <div style={style.filtros} className="fixed top-30 flex flex-col">
          <h3 className="font-bold text-xl mb-4 mt-4">
            Seleccionar los commodities
          </h3>
          <Checkbox name="allProductos" value={ productos.length == selectProductos.length } updateValue={selectAll} >Seleccionar Todos</Checkbox>
          <div>{ productos.map((item) => {
            return <Checkbox key={item} name={item} value={selectProductos.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
          }) }</div>
        </div>
      </div>
    );
}

export default RightSidebar