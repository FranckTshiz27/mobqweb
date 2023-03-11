import Action from './Action';
import { useSelector, useDispatch } from "react-redux";
import { deleteOrganizationAsync } from "../redux/organization/OrganizationAsyncQueries";


const OrganizationItem = ({ id, name, acronym, mission, email, telephone, onClickShowLogoModal, onClickWillEdit, close, setEdingOrganization }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        try {
            dispatch(deleteOrganizationAsync(id))
        } catch (error) {
            console.log("erreur lors de la suppression d'une organisation ", error);
        }
    }

    const handleSetEdingOrganization = () => {
        setEdingOrganization({ id, name, acronym, mission,email,telephone })
    }
    return (
        <tr>
            <td scope="row"><img src='equity-bank-logo.png' className='rounded' />{name}</td>
            <td>{acronym}</td>
            <td>{mission}</td>
            <td>
                <Action close={close} openLogoModal={onClickShowLogoModal}
                    handleDelete={handleDelete} onClickWillEdit={onClickWillEdit} handleSetOrganization={handleSetEdingOrganization} />
            </td>
        </tr>
    )
}

export default OrganizationItem;