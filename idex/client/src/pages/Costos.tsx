import Header from '../components/Header';
import { Card, Button } from "flowbite-react";
import { useState, useEffect, type ChangeEvent } from "react";
import { apiProductos, apiCostos, apiMeses } from "../api/apiCommodities.js";

const style = {
    costos: {
        background: 'rgb(237, 237, 237)',
    },
    input: {
      border: '1px solid gray',
      borderRadius: '4px',
      background: 'white',
      width: '5rem',
      marginBottom: '4px',
      marginRight: '4px',
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
      <div> 
        <Header/>
        <div>
            <div className='p-5' style={style.costos}>
                <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Estructura de costos personalizada</h2>
                <p className="">Selecciona los commodities y asigna su ponderación en tu estructura de costos.</p>

                <div className="flex flex-wrap gap-3 my-4">

                  <div className='flex gap-3'>
                    <label>Selecciona la fecha inicial:</label>
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
                  </div>

                  <div className='flex gap-3'>
                    <label className="">Selecciona la fecha final:</label>
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

                </div>
                <form id='costosForm' className='' onSubmit={handleSubmitForm}>
                  {
                    productos.map((producto, index) => {
                      return (
                        <div key={index} className="lg:px-90 flex justify-between">
                          <label className="mr-1" htmlFor={producto}>{producto+': '}</label>
                          <input style={style.input} onChange={handleInputChange} id={producto} name={producto} type="number" step="0.001" placeholder='0' />
                        </div>
                      )
                    }) 
                  }
                </form>
                <div className='flex flex-col gap-y-3 justify-center'>
                  <Button form='costosForm' type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800">Calcular cambio total</Button>
                  <Card id="card" className="mx-auto">
                    <p>Diferencia Porcentual Ponderada</p>
                    <span>{`${porcentajePonderado}%`}</span>
                  </Card>
                </div>
            </div>
        </div>
      </div>
)
}

export default Costos