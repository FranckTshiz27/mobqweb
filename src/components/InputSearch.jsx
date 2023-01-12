import {MdSearch} from 'react-icons/md';
import '../style/inputSearch.scss';
const InputSearch =({placeHolderText, handleSearch})=>{

    return(
        <div className='input-container'>
            <MdSearch className='icon'/>
            <input placeholder={placeHolderText}/>
        </div>
    )

}

export default InputSearch;