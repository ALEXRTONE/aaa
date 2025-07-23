import LeftNavbar from "../components/LeftNavbar"
import Header from '../components/Header';
import { Datepicker } from "flowbite-react";

const style = {
    costos: {
        width: '100%',
        height: '100%',
        padding: '40px',
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
    datePick: {
      marginLeft: '4px',
      marginRight: '4px',
      background:'white', 
      color:'black'
    },
}

const UserProfile = () => {

    return (
        <div style={{height: '100%'}}> 
            <Header />
            <div style={{height: '100%'}} className="flex flex-row">
                <LeftNavbar />
                <div className="costoMain" style={style.costos}>
                    <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Estructura de costos personalizada</h2>
                    <p className="mb-8">Selecciona los commodities y asigna su ponderación en tu estructura de costos.</p>
                    <form>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="energia">Energia Electrica MEX - Tarifa DAC:</label>
                        <input style={style.input} id="energia" name="energia" type="number" placeholder='0' />MXN/kWh
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="petroleo">Petroleo Brent:</label>
                        <input style={style.input} id="petroleo" name="petroleo" type="number" placeholder='0' />USD/bbl
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="gas">Gas Natural MEX:</label>
                        <input style={style.input} id="gas" name="gas" type="number" placeholder='0' />MXN
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="aceitePalma">Aceite de Palma:</label>
                        <input style={style.input} id="aceitePalma" name="aceitePalma" type="number" placeholder='0' />USD/mt
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="aceiteSoya">Aceite de Soya:</label>
                        <input style={style.input} id="aceiteSoya" name="aceiteSoya" type="number" placeholder='0' />USD/mt
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="fleteTransatlantico">Flete Transatlantic:</label>
                        <input style={style.input} id="fleteTransatlantico" name="fleteTransatlantico" type="number" placeholder='0' />USD/contenedor
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="fletePacifico">Flete Pacific:</label>
                        <input style={style.input} id="fletePacifico" name="fletePacifico" type="number" placeholder='0' />USD/contenedor
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="Diesel">Diesel US:</label>
                        <input style={style.input} id="Diesel" name="Diesel" type="number" placeholder='0' />USD per Gallon
                      </div>
                      <div className="flex flex-row">
                        <label className="costLabelId" htmlFor="tipoCambio">Tipo de Cambio:</label>
                        <input style={style.input} id="tipoCambio" name="tipoCambio" type="number" placeholder='0' />USD/MXN
                      </div>
                      <div style={{marginTop: '16px'}} className="flex flex-row">
                        <label>Selecciona la fecha inicial:</label>
                        <Datepicker style={style.datePick} />
                        <label style={{marginLeft: '16px'}}>Selecciona la fecha final:</label>
                        <Datepicker style={style.datePick} />
                      </div>
                      <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Calcular cambio total</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UserProfile