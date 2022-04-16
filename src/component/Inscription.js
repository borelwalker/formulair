import React from 'react';




const Inscription = () => {




    return (
        <div className='Inscription'>
            <b className='information'>pour une inscription valable veiller entrer vos informations suivantes</b>
            <form >
                <label>Nom</label><br />
                <input type="text" placeholder=" Nom " /><br />
                <label>Prenom</label><br />
                <input type="text" placeholder=" Prenom" /><br />
                <label>Mail</label><br />
                <input type="text" placeholder=" Mail" /><br />
                <label>Date de Naisssance</label><br />
                <input type="date" placeholder='date de naissance' /><br />
                <label className='sexe'>Selectionner votre Sexe</label><br />
                <select>
                    <option>Homme</option>
                    <option>Femme</option>
                </select><br />
                <label>Pays</label><br />
                <select >
                    <option>Cameroun</option>
                    <option>Cote d'ivoir</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>
                    <option>Cameroun</option>

                </select><br />
                <input type="submit" value="SOUMETTRE" className='soumettre' /><br />

                <div className="edition">
                    <em>@ 2022</em>
                    <p>powered by Wbbj</p>
                </div>
            </form>
        </div>
    );
};

export default Inscription;