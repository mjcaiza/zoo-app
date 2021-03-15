import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux'
import { findAnimal } from '../../../../data/redux/animal/Animal.actions'
import { Button } from '../../../UI/Button/Button'
import { Container } from '../../../UI/Container/Container'
import { Input } from '../../../UI/Input/Input'
import { useHistory } from "react-router-dom";
import { AnimalProps } from '../../../../data/redux/animal/Animal.types'
import { useEffect } from 'react'
import { AnimalRepositoryImplementation } from "../../../../data/services/animal/AnimalApi";
import { AnimalServiceImplementation } from "../../../../domain/interactors/animal/GetAnimalsUseCase";

const animalRepository = new AnimalRepositoryImplementation()
const animalService = new AnimalServiceImplementation(animalRepository)

const EditAnimal = ({ animal }: AnimalProps) => {

    const queryString = window.location.search;
    const id = new URLSearchParams(queryString).get('id')
    let history = useHistory();
    let [animalState, setState] = useState(animal)

    useEffect(() => { animalService.FindAnimal(id).then(response => setState(response)) }, [])


    const onClick = (event: any) => {
        event.preventDefault();
        animalService.EditAnimal(animalState)
        history.push('/')
    }

    const onHandleChange = (e: any) => {
        setState({
            ...animalState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container>
            <form style={{ width: '600px' }}>
                <h1  >Edit animal</h1>
                <div className='mb'>
                    <label>Name</label><br></br>
                    <Input value={animalState.name} name='name' onChange={(e) => onHandleChange(e)}></Input>
                </div>
                <div className='mb'>
                    <label>Age</label>
                    <Input type="number" value={animalState.age} name='age' onChange={(e) => onHandleChange(e)}></Input>
                </div>
                <div className='mb'>
                    <label>Category</label>
                    <Input name='category' value={animalState.category} onChange={(e) => onHandleChange(e)}></Input>
                </div>
                <div className='mb'>
                    <label>Environment</label>
                    <Input name='environment' value={animalState.environment} onChange={(e) => onHandleChange(e)}></Input>
                </div>
                <Button style={{ marginTop: '10%' }} onClick={onClick}>Update</Button>
            </form>
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        animal: state.animals.animal
    }
}

export default connect(mapStateToProps)(EditAnimal)
