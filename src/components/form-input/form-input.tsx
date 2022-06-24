const FormInput = (props: any) => {
  const {type, placeholder, description, name, required} = props;
  return (
    <div className="row">
      <label>{description}</label>
      {required ? 
        <input type={type} placeholder={placeholder} name={name} required/>: 
        <input type={type} placeholder={placeholder} name={name}/>
      }
      
    </div>
  );
}

export default FormInput;