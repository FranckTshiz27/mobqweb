import '../style/organization.scss';
import '../style/organizationForm.scss';
import '../style/logoChangeContainer.scss';
import InputSearch from '../components/InputSearch';
import ButtonNew from '../components/ButtonNew';
import Action from '../components/Action';
import { useState } from 'react';
import GeneralModal from '../components/GeneralModal';
import InputControl from '../components/InputControl';
import TextAreaComponent from '../components/TextAreaComponent';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import FormFileControl from '../components/InputFileControl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrganizationSchema } from "../schema/Schema";
const Organization = () => {

    const [close, setClose] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openLogoModal, setOpenLogoModal] = useState(false);

    const { register, formState: { errors }, handleSubmit } = 
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
            //const response = dispatch(addOrganizationAsync(data));
            console.log(" organization inserted");

        } catch (error) {
            console.log("erreur lors de l'enregistrement d'une organisation ", error);
        }
    }

    return (
        <div className='organization' onClick={() => { ParentClicked() }}>
            <h2>40 organisations</h2>
            <div className='organization__hearder'>
                <InputSearch placeHolderText={'Rechercher une organisation par son nom '} />
                <ButtonNew onClickShow={() => onClickShow()} />
            </div>
            <table className="table organization__table">
                <thead>
                    <tr>
                        <th scope="col">Nom de l'organisation</th>
                        <th scope="col">Sigle</th>
                        <th scope="col">Mission</th>
                        <th scope="col">Date d’adhésion</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><img src='equity-bank-logo.png' className='rounded' />EQUITY BANK</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} openLogoModal={onClickShowLogoModal} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='tmb.png' className='rounded' />TMB </th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} openLogoModal={onClickShowLogoModal} /></td>
                    </tr>
                    <tr>
                        <th scope="row"> <img src='rawbank.png' className='rounded' /> RAW BANK</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} openLogoModal={onClickShowLogoModal} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='turkish-airlines.png' className='rounded' />TURKISH AIRLINES</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} openLogoModal={onClickShowLogoModal} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='regideso.png' className='rounded' />   REGIDESO</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} openLogoModal={onClickShowLogoModal} /></td>
                    </tr>
                </tbody>
            </table>
            <GeneralModal title={"Nouvelle organisation"} open={openModal} handleCloseAndOpen={onClickShow}>
                <form className='organisation' onSubmit={handleSubmit(handleSubmitForm())}>
                    <div className='organisation__informations'>
                        <div className='organisation__informations__title'>
                            <p>Informations</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Nom complet de l'entreprise"}
                                type={'text'} id={'nom'} register={register} name={'name'} errors={errors} />
                            <InputControl label={"Sigle"}
                                type={'text'} id={'sigle'} register={register} name={'acronym'} errors={errors}  />
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
                            type={'email'} id={'email'} register={register} name={'email'} errors={errors}/>
                            <InputControl label={"Numéro de téléphone"} 
                            type={'tel'} id={'tel'} register={register} name={'telephone'} errors={errors}/>
                        </div>
                    </div>
                    <div className='organisation__action-container'>
                        <CancelButton label={'Annuler'} />
                        <SaveButton label={'Sauvegarder'} />
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