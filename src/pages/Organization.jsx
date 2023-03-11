import '../style/organization.scss';
import '../style/paginate.scss';
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
    filterOrganizationAsync, editOrganizationAsync
}
    from "../redux/organization/OrganizationAsyncQueries";
import ReactPaginate from 'react-paginate';
const Organization = ({ itemsPerPage }) => {
    const dispatch = useDispatch();
    const [close, setClose] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openLogoModal, setOpenLogoModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingOrganization, setEditingOrganization] = useState();
    const [itemOffset, setItemOffset] = useState(0);
    let isSaving = useSelector((state) => state.Organization.isSaving);
    let organizations = useSelector((state) => state.Organization.organizations);
    let pageCount
    let currentItems

    const { register, setValue, formState: { errors }, handleSubmit, reset } =
        useForm({ resolver: yupResolver(OrganizationSchema), mode: 'onBlur' })


    const endOffset = itemOffset + itemsPerPage;
    if (organizations.items) {
        currentItems = organizations.items.slice(itemOffset, endOffset);
        pageCount = Math.ceil(organizations.items.length / itemsPerPage);
    }


    const handlePageClick = (event) => {
        console.log("event.selected ".repeat(50));
        console.log(event.selected);
        const newOffset = (event.selected * itemsPerPage) % organizations.items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        console.log(" mongongo oyo opesi nga ".repeat(50));
        setItemOffset(newOffset);
    };

    const ParentClicked = () => {
        setClose(false)
    }
    const onClickShow = () => {
        setOpenModal(!openModal)
    }
    const onClickWillEdit = () => {
        setOpenModal(!openModal)
        setIsEditing(true)
    }
    const onClickShowLogoModal = () => {
        setOpenLogoModal(!openLogoModal)
    }
    const handleSubmitForm = async (data) => {
        try {
            if (!isEditing) {
                dispatch(addOrganizationAsync(data))
            }
            else {
                dispatch(editOrganizationAsync({ id: editingOrganization.id, ...data }))
            }

            reset()
        } catch (error) {
            console.log("erreur lors de l'enregistrement d'une organisation ", error);
        }
    }
    const HandlesetEditingOrganization = (organization) => {
        setEditingOrganization(organization)
    }
    const handleChangeFilter = (slug) => {
        dispatch(filterOrganizationAsync(slug))
    }
    const onInit = () => {
        setIsEditing(false)
    }

    useEffect(() => {
        dispatch(getAllOrganizationsAsync({ limit: endOffset, page: pageCount }))
        reset()
    }, [endOffset, pageCount])

    useEffect(() => {
        if (isEditing) {
            setValue("email", editingOrganization?.email)
            setValue("name", editingOrganization?.name)
            setValue("acronym", editingOrganization?.acronym)
            setValue("telephone", editingOrganization?.telephone)
            setValue("mission", editingOrganization?.mission)
        }
    }, [isEditing])
    const setHeader = () => {
        return currentItems.length <= 1 ? `${currentItems.items.length} organisation` :
            `${currentItems.length} organisations`;
    }

    const showOrganizations = () => {
        {
            if (currentItems) {
                return currentItems.map((organization) => {
                    return <OrganizationItem
                        name={organization?.name}
                        acronym={organization?.acronym}
                        mission={organization?.mission}
                        onClickShowLogoModal={onClickShowLogoModal}
                        onClickWillEdit={onClickWillEdit}
                        close={close}
                        id={organization?.id}
                        key={organization?.id}
                        setEdingOrganization={HandlesetEditingOrganization}
                        email={organization?.email}
                        telephone={organization?.telephone}
                    />
                })
            }
        }
    }
    return (
        <div className='organization' onClick={() => { ParentClicked() }}>
            <h2>{setHeader()}</h2>
            <div className='organization__hearder'>
                <InputSearch placeHolderText={'Rechercher une organisation par son nom '} onChangeFilter={handleChangeFilter} />
                <ButtonNew onClickShow={() => onClickShow()} />
            </div>
            <table className="organization__table">
                <thead>
                    <tr>
                        <th scope="col">Noms de l'organisation</th>
                        <th scope="col">Sigle</th>
                        <th scope="col">Mission</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showOrganizations()}
                    <div
                        className='pagination-container'
                    >
                        <ReactPaginate
                            activeClassName={'item active '}
                            breakClassName={'break-me '}
                            breakLabel="..."
                            containerClassName={'pagination'}
                            disabledClassName={'disabled-page'}
                            nextClassName={"item next "}
                            nextLabel={">"}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            pageClassName={'item pagination-page '}
                            previousClassName={"item previous"}
                        />
                    </div>
                </tbody>
            </table>
            <GeneralModal title={!isEditing ? "Nouvelle organisation" : "Modification d'une organisation"} open={openModal} handleCloseAndOpen={onClickShow} handleOnInit={onInit}>
                <form className='organisation' onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className='organisation__informations'>
                        <div className='organisation__informations__title'>
                            <p>Informations</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Nom complet de l'entreprise"}
                                type={'text'} id={'nom'} register={register}
                                name={'name'} errors={errors} value={isEditing ? editingOrganization.name : ""} />
                            <InputControl label={"Sigle"} value={isEditing ? editingOrganization.acronym : ""}
                                type={'text'} id={'sigle'} register={register} name={'acronym'} errors={errors} />
                            {/* defaultValue={isEditing?editingOrganization.mission:""} */}
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
                                type={'email'} id={'email'} register={register}
                                name={'email'} errors={errors} />

                            <InputControl label={"Numéro de téléphone"}
                                type={'tel'} id={'tel'} register={register}
                                name={'telephone'} errors={errors} value={isEditing ? editingOrganization.telephone : ""} />
                        </div>
                    </div>
                    <div className='organisation__action-container'>
                        <CancelButton label={'Annuler'} />
                        <SaveButton label={isEditing ? 'Modifier' : 'Sauvegarder'} type={'submit'} isSaving={isSaving} />
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