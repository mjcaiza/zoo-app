import { Redirect } from 'react-router';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { Row } from '../../UI/Row/Row';
import FunctionForm from './FunctionForm';

export const Form = (props) => {

    const {inputs, handleInputChange, handleSubmit, handleCancel, errors, redirect} = FunctionForm(props.animal, props.option);

    return (
        
        redirect ?

        <Redirect to='/'></Redirect> :

        <form style={{ width: '600px', textAlign: 'initial' }} >
            
            <div className='mb'>
                <label>Name</label><br></br>
                <Input type="text" name='name' value={inputs.name} onChange={handleInputChange}></Input>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className='mb'>
                <label>Age</label>
                <Input type="number" name='age' value = {inputs.age} onChange={handleInputChange}></Input>
                {errors.age && <p className="error">{errors.age}</p>}
            </div>
            <div className='mb'>
                <label>Category</label>
                <Input type="text" name='category' value = {inputs.category} onChange={handleInputChange}></Input>
                {errors.category && <p className="error">{errors.category}</p>}
            </div>
            <div className='mb'>
                <label>Environment</label>
                <Input type="text" name='environment' value = {inputs.environment} onChange={handleInputChange}></Input>
                {errors.environment && <p className="error">{errors.environment}</p>}
            </div>
            <Row style={{ marginTop: ' 5%' }}>
                {
                    props.option === 'add' ?
                    <Button typeButton='success' tittle="Add Animal" onClick={handleSubmit} ></Button> :
                    <Button typeButton = 'success' tittle="Update Animal" onClick = {handleSubmit} ></Button>
                }&nbsp;&nbsp;&nbsp;
                    <Button typeButton='defaultb' tittle="Cancel" onClick={handleCancel} ></Button>
            </Row>
         </form>
    )

}