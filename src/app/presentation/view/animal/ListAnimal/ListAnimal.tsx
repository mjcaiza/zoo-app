import { useEffect, useState } from "react"
import { animalService, titlesHeaders } from "../../../../../environments/constants"
import { Container } from "../../../UI/Container/Container"
import { Row } from "../../../UI/Row/Row"
import { Table } from "../../../UI/Table/Table"
import { useHistory } from "react-router-dom";
import { Animal } from "../../../../domain/entity/animal/Animal"
import { Input } from "../../../UI/Input/Input"
import { Button } from "../../../UI/Button/Button"

const ListAnimal = () => {
    
    let animals : Animal[] = [] 
    const [animalsState, setAnimals] = useState(animals)
    let history = useHistory();

    useEffect(() => { animalService.GetAnimals().then(response => setAnimals(response)) }, [])

    const deleteAnimal = (animal :any) =>{
        animalService.DeleteAnimal(animal.id).then(response=>{
            animalService.GetAnimals().then(response => setAnimals(response))
        })
    }

    const edit = (animal :any) => history.push(`/edit-animal?id=${animal.id}`)

    const findAnimals = ( value : any ) => {
        animalService.FindAnimals(value)
            .then(response => setAnimals(response))
    }

    const goPath = (path : string)=> history.push(`${path}`)

    return (
        <Container>
            <Row>
                <h1 style={{ marginRight: '450px' }}>Animals</h1>
                <Button typeButton = 'primary' tittle = 'Register' onClick={()=>goPath('/create-animal')}></Button> 
            </Row>
            <Row>
                <Input placeholder="Search" onChange={(e)=>findAnimals(e.target.value)}></Input>
            </Row>
            <br></br>
            <Row>
                <Table 
                    key="table-animals" 
                    titles={titlesHeaders} 
                    data={animalsState} 
                    deleteOption = {deleteAnimal}
                    editOption = {edit}
                    ></Table>
            </Row>
        </Container>
    )
}

export default ListAnimal
