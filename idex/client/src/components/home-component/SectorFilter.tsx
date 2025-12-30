import { useEffect, useState } from "react"
import Checkbox from "./Checkbox"

interface SectorProps {
  name: string
  search: string
  products: string[]
  commodities: string[]
  handleSelectProductos:any
}

function SectorFilter({ name, search, products, commodities, handleSelectProductos = ()=>{}}: SectorProps) {

  
  const [visible, setVisible] = useState<string>('none')
  
  const [colorbg, setColorbg] = useState<string>('bg-neutral-100')
  const [textColor, setTextColor] = useState<string>('text-black')
  
  useEffect(() => {
    setVisible(commodities.some(s => s.toLowerCase().includes(search)) && search !== '' ? 'block' : 'none')
  }, [search])

  useEffect(() => {
    setColorbg(visible === 'block' ? 'bg-blue-600' : 'bg-neutral-100')
    setTextColor(visible === 'block' ? 'text-white' : 'text-black')
  }, [visible])

  function toggleSector() {
    setVisible(visible === 'none' ? 'block' : 'none')
  }
  return (
  <>
    <button onClick={() => toggleSector()} key={name} className={`${colorbg} ${textColor} cursor-pointer p-2.5 text-left hover:bg-blue-500 hover:text-white rounded-md my-1 font-medium`} >{name}</button>
    <div style={{display: `${visible}`}} className={'flex bg-white rounded-s p-2'}>
      {commodities.map((item, j) => <Checkbox key={j} name={item} value={products.includes(item)} updateValue={handleSelectProductos}>{item}</Checkbox>)}
    </div>
  </>
  );
};

export default SectorFilter