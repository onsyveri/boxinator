import axios from 'axios'; //Axios
import React, { useEffect } from 'react';
import {fetchUserById } from '../../api/UserService';
import { useUser } from '../../context/UserContext';
import keycloak from '../../keycloak';

const baseURL = process.env.REACT_APP_API_URL + "account/"; // Api connection
let userId = "";

const ProfileForm = () => {

    userId = keycloak.subject;

    const {user, setUser} = useUser();

    
    useEffect(() => {

        if(!user) {
            const init = async () => {
                const user = await fetchUserById(userId);
                setUser(user);
            };

            init();
        }

    }, [setUser, user]);

    if (!user) return null;

    const onSubmit = event => {
        event.preventDefault();
        axios.put(baseURL + userId, {
            headers: { Authorization: `Bearer ${keycloak.token}` },
            id: userId, 
            birthday: event.target[1].value, 
            country: event.target[2].value,
            postal_code: event.target[3].value,
            phone_number: event.target[4].value 
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/profile" //This line of code will redirect you once the submission is succeed
        })
    }


    return (
        <form id="profForm" onSubmit={onSubmit}>
          
            
            <fieldset id="profField">
            {keycloak.tokenParsed && (
          <>
            <label htmlFor="fName">First name: </label>

            <p>{keycloak.tokenParsed.given_name}</p>

            <label htmlFor="lName">Last name: </label>

            <p>{keycloak.tokenParsed.family_name}</p>

            <label htmlFor="email">E-mail: </label>

            <p>{keycloak.tokenParsed.email}</p>

            {/*   <p>token is:{keycloak.token}</p>   */}

          </>

        )}
                <label htmlFor="dateBirth">Date of birth: </label>
                <input id="dateBirth" type="date" 
                    defaultValue={user.account.birthday}
                />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" name="country"
                    defaultValue={user.account.country} 
                />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" 
                    defaultValue={user.account.postal_code} 
                />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" 
                    defaultValue={user.account.phone_number}
                />

            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm
