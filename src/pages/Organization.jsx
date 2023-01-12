import '../style/organization.scss';
import '../style/organizationForm.scss';
import InputSearch from '../components/InputSearch';
import ButtonNew from '../components/ButtonNew';
import Action from '../components/Action';
import { useState } from 'react';
import GeneralModal from '../components/GeneralModal';
import InputControl from '../components/InputControl';
import TextAreaComponent from '../components/TextAreaComponent';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
const Organization = () => {

    const [close, setClose] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const ParentClicked = () => {
        setClose(false)
    }

    const onClickShow = () => {
        setOpenModal(!openModal)
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
                        <td><Action close={close} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='tmb.png' className='rounded' />TMB </th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} /></td>
                    </tr>
                    <tr>
                        <th scope="row"> <img src='rawbank.png' className='rounded' /> RAW BANK</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='turkish-airlines.png' className='rounded' />TURKISH AIRLINES</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><img src='regideso.png' className='rounded' />   REGIDESO</th>
                        <td >Larry the Bird</td>
                        <td>Thornton</td>
                        <td>05/10/2020</td>
                        <td><Action close={close} /></td>
                    </tr>
                </tbody>
            </table>
            <GeneralModal title={"Nouvelle organisation "}>
                <form className='organisation'>
                    <div className='organisation__informations'>
                        <div className='organisation__informations__title'>
                            <p>Informations</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Nom complet de l'entreprise"} type={'text'} id={'nom'} />
                            <InputControl label={"Sigle"} />
                            <TextAreaComponent label={'Mission en peu de mots'} number={2} />
                        </div>
                    </div>
                    <div className='organisation__account'>
                        <div className='organisation__informations__title'>
                            <p>Compte</p>
                        </div>
                        <div className='organisation__informations__container'>
                            <InputControl label={"Adresse e-mail"} type={'email'} id={'email'} />
                            <InputControl label={"Numéro de téléphone"} type={'tel'} id={'tel'} />
                        </div>
                    </div>
                    <div className='organisation__action-container'>
                        <CancelButton label={'Annuler'} />
                        <SaveButton label={'Sauvegarder'} />
                    </div>
                </form>
            </GeneralModal>
        </div>
    )

}
export default Organization;