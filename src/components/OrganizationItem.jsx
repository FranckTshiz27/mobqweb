import Action from './Action';
import { useSelector, useDispatch } from "react-redux";
import { deleteOrganizationAsync } from "../redux/organization/OrganizationAsyncQueries";

const OrganizationItem = ({ id, name, acronym, mission, onClickShowLogoModal, close }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        try {
            dispatch(deleteOrganizationAsync(id))
        } catch (error) {
            console.log("erreur lors de la suppression d'une organisation ", error);
        }
    }

    return (
        <tr>
            <td scope="row"><img src='equity-bank-logo.png' className='rounded' />{name}</td>
            <td>{acronym}</td>
            <td>{mission}</td>
            <td>
                <Action close={close} openLogoModal={onClickShowLogoModal} handleDelete={handleDelete} />
            </td>
        </tr>
    )
}

export default OrganizationItem;