import LeftNavbar from "../components/LeftNavbar"
import Header from '../components/Header';
import { Card } from "flowbite-react";
import { useState, useEffect, type ChangeEvent } from "react";
import { apiProductos, apiCostos, apiMeses } from "../api/apiCommodities.js";

const style = {
    costos: {
        width: '100%',
        padding: '40px',
        background: 'rgb(237, 237, 237)',
        marginLeft: '222px',
    },
    input: {
      border: '1px solid gray',
      borderRadius: '4px',
      background: 'white',
      width: '5rem',
      marginBottom: '4px',
      marginRight: '4px',
    },
    datePick: {
      marginLeft: '4px',
      marginRight: '4px',
      background:'white', 
      color:'black'
    },
}

interface FechasInput {
  fechaInicial:string
  fechaFinal: string
}

const Costos = () => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  // const [costoPonderado, setCostoPonderado] = useState(0);
  const [fechas, setFechas] = useState<FechasInput>({fechaInicial:'', fechaFinal: ''})
  const [porcentajePonderado, setporcentajePonderado] = useState(0);
  const [productos, setProductos] = useState<string[]>([]);
  const [pesos, setPesos] = useState(Object);
  const [meses, setMeses] = useState<string[]>([])
  
  useEffect( () => {
  const fetchData = async () => {
    const products = await apiProductos();
    if (products) {
      setProductos(products);
      productos.forEach((product) => {
        pesos[product] = 0.0
      })
      
      const meses = await apiMeses();
      if (meses) {
        setMeses(meses);        
      }
    }
  };  
  fetchData();
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPesos({
      ...pesos,
      [name]: value
    });
  }

  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;    
    setFechas({
      ...fechas,
      [name]: value
    });
    console.log('fecha name: ', e.target.name, ' fecha valor: ', e.target.value)
  }

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fechaInicial, fechaFinal } = fechas;    
    const fi = new Date(fechaInicial)
    const ff = new Date(fechaFinal)
    
    const initialMonth = await apiCostos(fi);
    const endMonth = await apiCostos(ff);

    console.log('initialMonth:: ', initialMonth);
    console.log('endMonth:: ', endMonth);

    // const ponderadosDif = productos.map((producto) => {
    //   const endPrice = endMonth.find((el) => el.PRODUCTO === producto)?.PRECIO;
    //   const initPrice = initialMonth.find((el) => el.PRODUCTO === producto)?.PRECIO;
    //   const difPond = (endPrice && initPrice ) ? (endPrice - initPrice) * parseFloat(pesos[producto]?pesos[producto]:0) : -1;
    //   return difPond;
    // });

    const ponderadosPer = productos.map((producto) => {
      const endPrice = endMonth.find((el) => el.PRODUCTO === producto)?.PRECIO;
      const initPrice = initialMonth.find((el) => el.PRODUCTO === producto)?.PRECIO;
      const peso = parseFloat(pesos[producto]?pesos[producto]:0)
      const dif = (endPrice && initPrice)?endPrice - initPrice:0
      
      console.log(producto,' pesa::', peso);
      console.log(producto,' dif::', dif);

      const porcenPond = (endPrice && initPrice) ? (dif/initPrice)*peso : -1;

      console.log(producto,' porcentaje::',porcenPond);
      
      return porcenPond;
    });

    // const deltaDifSum = ponderadosDif.reduce((acc1, curr2) => acc1 + curr2, 0);
    const deltaPercentSum = ponderadosPer.reduce((acc, curr) => acc + curr, 0);
    // setCostoPonderado(Math.round(deltaDifSum*100)/100);
    console.log('deltaPercentSum: ',pesos);
    setporcentajePonderado(Math.round(deltaPercentSum*10000)/100)
    
  };

  return (
      <div style={{height: '100%'}}> 
          <Header />
          <div style={{height: '100%'}} className="flex flex-row">
              <LeftNavbar />
              <div className="costoMain justify-between" style={style.costos}>
                  <Card id="card" className="flex flex-col absolute right-50 bottom-90 w-40">
                    <p>Diferencia Porcentual Ponderada</p>
                    <span>{`${porcentajePonderado}%`}</span>
                  </Card>
                  <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Estructura de costos personalizada</h2>
                  <p className="">Selecciona los commodities y asigna su ponderación en tu estructura de costos.</p>
                  <div className="flex flex-row my-4">
                    <label className="mr-5">Selecciona la fecha inicial:</label>
                    <select className="bg-white rounded-sm border-1 border-gray-300" name="fechaInicial" id="fechaInicial" onChange={handleDateChange}>
                      <option>Seleccionar</option>
                      {
                        meses.map( (mes, index) => {
                          return (
                            <option value={mes} key={index}>
                              { `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}` }
                            </option>
                          )
                        })
                      }
                    </select>
                    <label className="mx-5">Selecciona la fecha final:</label>
                    <select className="bg-white rounded-sm border-1 border-gray-300" name="fechaFinal" id="fechaFinal" onChange={handleDateChange}>
                      <option>Seleccionar</option>
                      {
                        meses.map( (mes, index) => {
                          return (
                            <option value={mes} key={index}>
                              { `${monthNames[ parseInt(mes.slice(5,7))-1 ]} ${mes.slice(0,4)}` }
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <form onSubmit={handleSubmitForm}>
                    {
                      productos.map((producto, index) => {
                        return (
                          <div key={index} className="flex flex-row">
                          <label className="mr-1" htmlFor={producto}>{producto+': '}</label>
                          <input style={style.input} onChange={handleInputChange} id={producto} name={producto} type="number" step="0.001" placeholder='0' />
                          </div>
                        )
                      }) 
                    }
                    <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Calcular cambio total</button>
                  </form>
              </div>
          </div>
      </div>
)
}

export default Costos