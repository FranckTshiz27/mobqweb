import '../style/formControl.scss';


const FormControl = ({ id, label, type, placeholder,errors,register,name,value}) => {
    return (
        <div className="mb-2">
            <label htmlFor={id} className="form-label mylabel">{label}</label>
            <input type={type} className="form-control" id={id} placeholder={placeholder} 
            {...register(name)} />
            {errors[name] && (
                        <span className="error_message">
                            {errors[name].message}
                        </span>
                    )}
        </div>
    )

}

export default FormControl;