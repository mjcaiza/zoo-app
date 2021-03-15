import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { titlesHeaders } from "../../../../../environments/constants"
import { refreshList } from "../../../../data/redux/animal/Animal.actions"
import { AnimalProps } from "../../../../data/redux/animal/Animal.types"
import { Button } from "../../../UI/Button/Button"
import { Container } from "../../../UI/Container/Container"
import { Row } from "../../../UI/Row/Row"
import { Table } from "../../../UI/Table/Table"
import { useHistory } from "react-router-dom";
import { AnimalRepositoryImplementation } from "../../../../data/services/animal/AnimalApi"
import { AnimalServiceImplementation } from "../../../../domain/interactors/animal/GetAnimalsUseCase"

interface RootState {
    animals: any
}


const animalRepository = new AnimalRepositoryImplementation()
const animalService = new AnimalServiceImplementation(animalRepository)

const ListAnimal = ({ animals }: AnimalProps) => {

    console.log(animals)

    const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => { dispatch(refreshList) }, [dispatch])

    const deleteAnimal = (animal :any) =>{
        animalService.DeleteAnimal(animal.id).then(response=>{
            dispatch(refreshList) 
        })
    }

    const edit = (animal :any) => history.push(`/edit-animal?id=${animal.id}`)

    return (
        <Container>
            <Row>
                <h1 style={{ marginRight: '450px' }}>Animals</h1>
                <Link to="/create-animal" >
                    <Button>Register</Button>
                </Link>
            </Row>
            <Row>
                <Table 
                    key="table-animals" 
                    titles={titlesHeaders} 
                    data={animals} 
                    deleteOption = {deleteAnimal}
                    editOption = {edit}
                    ></Table>
            </Row>
        </Container>
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        animals: state.animals.animals,
    }
}

export default connect(mapStateToProps)(ListAnimal)
