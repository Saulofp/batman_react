import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContexts";

function Profile(){

    const {login}= useContext(UserContext)

    return(
        <div>
            {login? 'Perfil': 'Entre ou Cadastre-se'}
        </div>
    )
}

export default Profile;