import '../style/mymodal.scss';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const GeneralModal = ({ children, title, open, handleCloseAndOpen }) => {
    const handleClose = () => {
        handleCloseAndOpen()
    }

    return (
        <div className={open? "myModal" : "myModal-closed"}>
            <div className="myModal__container">
                <div className='myModal__container__header'>
                    <p>{title}</p><MdClose className='myModal__container__header__icon' onClick={handleClose}/>
                </div>
                <div className='myModal__container__elements'>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default GeneralModal;