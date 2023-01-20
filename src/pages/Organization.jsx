import '../style/organization.scss';
import '../style/organizationForm.scss';
import '../style/logoChangeContainer.scss';
import InputSearch from '../components/InputSearch';
import ButtonNew from '../components/ButtonNew';
import { useEffect, useState } from 'react';
import GeneralModal from '../components/GeneralModal';
import InputControl from '../components/InputControl';
import TextAreaComponent from '../components/TextAreaComponent';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import FormFileControl from '../components/InputFileControl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrganizationSchema } from "../schema/Schema";
import { useSelector, useDispatch } from "react-redux";
import OrganizationItem from '../components/OrganizationItem';
import {
    addOrganizationAsync, getAllOrganizationsAsync,
    deleteOrganizationAsync
}
    from "../redux/organization/OrganizationAsyncQueries";
const Organization = () => {

    const dispatch = useDispatch();
    const [close, setClose] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openLogoModal, setOpenLogoModal] = useState(false);
    let isSaving = useSelector((state) => state.Organization.isSaving);
    let organizations = useSelector((state) => state.Organization.organizations);
    const { register, setValue, formState: { errors }, handleSubmit, reset } =
        useForm({ resolver: yupResolver(OrganizationSchema), mode: 'onBlur' })

    const ParentClicked = () => {
        setClose(false)
    }

    const onClickShow = () => {
        setOpenModal(!openModal)
    }

    const onClickShowLogoModal = () => {
        setOpenLogoModal(!openLogoModal)
    }

    const handleSubmitForm = async (data) => {
        try {
            dispatch(addOrganizationAsync(data))
            reset()
        } catch (error) {
            console.log("erreur lors de l'enregistrement d'une organisation ", error);
        }
    }



    useEffect(() => {
        dispatch(getAllOrganizationsAsync())
        console.log(" mes organisations  ", organizations);
        reset()
    }, [])

    const setHeader = () => {
        return organizations.length <= 1 ? `${organizations.length} organisation` :
            `${organizations.length} organisations`;
    }
    return (
        <div className='organization' onClick={() => { ParentClicked() }}>
            <h2>{setHeader()}</h2>
            <div className='organization__hearder'>
                <InputSearch placeHolderText={'Rechercher une organisation par son nom '} />
                <ButtonNew onClickShow={() => onClickShow()} />
            </div>
            <table className="organization__table">
                <thead>
                    <tr>
                        <th scope="col">Nom de l'organisation</th>
                        <th scope="col">Sigle</th>
                        <th scope="col">Mission</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {organizations.map((organization) => {
                        return <OrganizationItem name={organization.name}
                            acronym={organization.acronym} mission={organization.mission}
                            onClickShowLogoModal={onClickShowLogoModal} close={close} id={organization.id} key={organization.id}
                        />
                    })
                    }
                </tbody>
            </table>
            <GeneralModal title={"Nouvelle organisation"} open={openModal} handleCloseAndOpen={onClickShow}>
                <form className='organisation' onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className='organisation__informations'>
                        <div className='organisation__informations__title'>
                            <p>Informations</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Nom complet de l'entreprise"}
                                type={'text'} id={'nom'} register={register} name={'name'} errors={errors} />
                            <InputControl label={"Sigle"}
                                type={'text'} id={'sigle'} register={register} name={'acronym'} errors={errors} />
                            <TextAreaComponent label={'Mission en peu de mots'} number={2}
                                id={'mission'} register={register} name={'mission'} errors={errors}
                            />
                        </div>
                    </div>
                    <div className='organisation__account'>
                        <div className='organisation__informations__title'>
                            <p>Compte</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Adresse e-mail"}
                                type={'email'} id={'email'} register={register} name={'email'} errors={errors} />
                            <InputControl label={"Numéro de téléphone"}
                                type={'tel'} id={'tel'} register={register} name={'telephone'} errors={errors} />
                        </div>
                    </div>
                    <div className='organisation__action-container'>
                        <CancelButton label={'Annuler'} />
                        <SaveButton label={'Sauvegarder'} type={'submit'} isSaving={isSaving} />
                    </div>
                </form>
            </GeneralModal>

            <GeneralModal title={"Changer le logo de l'entreprise"} open={openLogoModal} handleCloseAndOpen={onClickShowLogoModal}>
                <div className='logo_container'>
                    <FormFileControl id={'logo'} />
                </div>
            </GeneralModal>
        </div>
    )

}
export default Organization;