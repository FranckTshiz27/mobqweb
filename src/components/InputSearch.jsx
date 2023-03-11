import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import '../style/inputSearch.scss';
const InputSearch = ({ placeHolderText, onChangeFilter }) => {
    const handleChange = (e) => {
        onChangeFilter(e.target.value)
    }

    return (
        <div className='input-container'>
            <MdSearch className='icon' />
            <input placeholder={placeHolderText} onChange={(e)=>handleChange(e)}  />
        </div>
    )

}

export default InputSearch;