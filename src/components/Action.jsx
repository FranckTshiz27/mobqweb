import '../style/action.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
const Action = ({ close }) => {

    const [modalState, setModalState] = useState(false);
    const [global, setGlobal] = useState(close);

    const handleClick = () => {
        setModalState(!modalState)
        setGlobal(true)
    }

    useEffect(() => {
        setGlobal(true)
    })
    return (
        <>
            <div className='action'> Actions <RiArrowDropDownLine className='icon' onClick={() => handleClick()} />
                <div className={(modalState&&global) ? 'mymodal' : 'mymodal_closed'}>
                    <button>Supprimer</button>
                    <button>Editer</button>
                </div>
            </div>

        </>
    )
}

export default Action;