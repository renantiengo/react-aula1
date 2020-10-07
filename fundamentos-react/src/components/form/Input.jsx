import React, {useState} from 'react'

export default props => {
    const [nome, setNome]  = useState('Pedro')

    return(
        <> 
            {/* input deve ter readOnly ou onChange / receberá evento que irá alterar o nome*/}
            <h3>{nome}</h3>
            <input type="text" value ={nome}                 
                onChange={e => setNome(e.target.value)}/> 
        </>
    )

}
   
