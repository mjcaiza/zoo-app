import { Container } from '../../../UI/Container/Container'
import { Form } from '../../form/Form'

let animalState = {
    id: '',
    name: '',
    age: 0,
    category: '',
    environment: ''
}

const CreateAnimal = () => {

    return (
        <Container>
            <h1>Add animal</h1>
            <Form animal={animalState} option='add' ></Form>
        </Container>
    )
}

export default CreateAnimal
