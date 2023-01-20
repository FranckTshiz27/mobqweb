import '../style/formControl.scss';

const TextAreaComponent = ({ id, label,number,errors,register,name}) => {
    return (
        <div className="mb-2">
            <label htmlFor={id} className="form-label mylabel">{label}</label>
            <textarea className="form-control" id={id} rows={`${number}`} {...register(name)}></textarea>
            {errors[name] && (
                        <span className="error_message">
                            {errors[name].message}
                        </span>
                    )}
        </div>
    )

}

export default TextAreaComponent;