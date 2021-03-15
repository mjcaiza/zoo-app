import { connect, useDispatch } from 'react-redux'
import { createAnimal, } from '../../../../data/redux/animal/Animal.actions'
import { Animal } from '../../../../domain/entity/animal/Animal'
import { Button } from '../../../UI/Button/Button'
import { Container } from '../../../UI/Container/Container'
import { Input } from '../../../UI/Input/Input'
import { useHistory } from "react-router-dom";
import { AnimalProps } from '../../../../data/redux/animal/Animal.types'


let animalState: Animal = {
    id : '',
    name : '', 
    age : 0,
    category : '',
    environment : ''
}

const CreateAnimal = ({ animal }: AnimalProps) => {

    const dispatch = useDispatch()
    let history = useHistory();
   
    const onClick = (event : any) => {
        event.preventDefault();
        dispatch(createAnimal(dispatch, animalState))
        history.push('/')
    }

    return (
        <Container>
            <form style={{width: '600px'}}>
                <h1  >Add animal</h1>
                <div className='mb'>
                    <label>Name</label><br></br>
                    <Input  onChange={(e)=> animalState.name = e.target.value }></Input>
                </div>
                <div className='mb'>
                <label>Age</label>
                <Input type="number" name='age' onChange={(e)=> animalState.age = Number(e.target.value) }></Input>
                </div>
                <div className='mb'>
                <label>Category</label>
                <Input name='category' onChange={(e)=> animalState.category = e.target.value}></Input>
                </div>
                <div className='mb'>
                <label>Environment</label>
                <Input name='environment' onChange={(e)=>animalState.environment = e.target.value}></Input>
                </div>
                <Button style={{marginTop : '10%'}} onClick={onClick}>Create</Button>
               </form>
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        animal: state.animals.animal
    }
}

export default connect(mapStateToProps)(CreateAnimal)
