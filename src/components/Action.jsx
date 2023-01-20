import '../style/action.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const Action = ({ close, openLogoModal,handleDelete}) => {

    const [modalState, setModalState] = useState(false);
    const [global, setGlobal] = useState(close);

    const handleClick = () => {
        setModalState(!modalState)
        setGlobal(true)
    }

    const handleClickDelete = () => {
       handleDelete()
    }

    useEffect(() => {
        setGlobal(true)
    })
    return (
        <>
            <div className='action'> Actions <RiArrowDropDownLine className='icon' onClick={() => handleClick()} />
                <div className={(modalState&&global) ? 'mymodal' : 'mymodal_closed'}>
                    <button onClick={()=>handleClickDelete()}>Supprimer</button>
                    <button>Editer</button>
                    <button onClick={()=>{openLogoModal()}}>Modifier l'image</button>
                </div>
            </div>

        </>
    )
}

export default Action;