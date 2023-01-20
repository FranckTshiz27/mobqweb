import { useEffect, useState } from 'react';
import '../style/loader.scss';
const Loader =(props)=>{

    const [counter, setCounter] = useState(0)
    useEffect(()=>{

        console.log('Hello');
        setCounter(1)
    },[props.visible])
    return (
        <span className="loader">
        </span>
    )
}

export default Loader;