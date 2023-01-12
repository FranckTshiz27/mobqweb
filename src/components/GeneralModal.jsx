import '../style/mymodal.scss';
import { MdClose } from 'react-icons/md';

const GeneralModal = ({ children, title }) => {

    return (
        <div className="myModal">
            <div className="myModal__container">
                <div className='myModal__container__header'>
                    <p>{title}</p><MdClose className='myModal__container__header__icon' />
                </div>
                <div className='myModal__container__elements'>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default GeneralModal;