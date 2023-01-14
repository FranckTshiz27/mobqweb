import '../style/formControl.scss';

const TextAreaComponent = ({ id, label,number,errors,register,name}) => {

    return (
        <div class="mb-2">
            <label htmlFor={id} class="form-label mylabel">{label}</label>
            <textarea class="form-control" id={id} rows={`${number}`} {...register(name)}></textarea>
            {errors[name] && (
                        <span className="error_message">
                            {errors[name].message}
                        </span>
                    )}
        </div>
    )

}

export default TextAreaComponent;