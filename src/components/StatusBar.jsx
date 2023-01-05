import '../style/statusBar.scss';
import {BsQuestionCircleFill,BsFillPatchPlusFill} from 'react-icons/bs'
const StatusBar =()=>{

    return(
        <>
         <div className='statusBar'>
           <BsQuestionCircleFill className='icon'/>
           <BsFillPatchPlusFill className='icon'/>
          </div>
        </>
    )

}

export default StatusBar;