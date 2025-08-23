
interface CheckboxProps {
  name:string
  value?: boolean
  updateValue:any
  children:any
}

function Checkbox({ name, value, updateValue = ()=>{}, children }: CheckboxProps) {
  // handle checkbox change
  const handleChange = () => {
    updateValue(!value, name);
  };
  // render the checkbox
  return (
    <div className="py-0.5">
      <input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
      <label htmlFor={`${name}-checkbox`} className="ml-1 capitalize">{children}</label>
    </div>
  );
};

export default Checkbox