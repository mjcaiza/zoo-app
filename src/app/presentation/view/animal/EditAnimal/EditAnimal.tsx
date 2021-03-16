import React, { useState } from "react";
import { Container } from '../../../UI/Container/Container'
import { useEffect } from 'react'
import { animalService } from '../../../../../environments/constants'
import { Animal } from "../../../../domain/entity/animal/Animal";
import { Form } from "../../form/Form";


const EditAnimal = () => {

    const queryString = window.location.search;
    const id = new URLSearchParams(queryString).get('id')
    let [animalState, setState] = useState(new Animal('', '', 0, '', ''))

    useEffect(() => { animalService.FindAnimal(id).then(response => setState(response)) }, [])

    return (
        <Container>
            <h1>Edit animal</h1>
            {
                animalState.id !== "" ?
                    <Form animal={animalState} option='edit' ></Form> :
                    null
            }
        </Container>
    )
}

export default EditAnimal
