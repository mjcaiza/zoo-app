import { useState} from "react";
import { animalService } from "../../../../environments/constants";
import validate from "./validate";

const FunctionForm = (initialValues, option) => {

    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        const validationErrors = validate(inputs);
        const noErrors = Object.keys(validationErrors).length === 0;
        setErrors(validationErrors)
        if (!noErrors) {
            console.log("errors try again", validationErrors);
        } else {
            (option === 'add' ?
                animalService.CreateAnimal(inputs) :
                animalService.EditAnimal(inputs))
            setRedirect(true);
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    }

    const handleCancel = (event) =>{
        event.preventDefault()
        setRedirect(true);
    }

    return {
        handleSubmit,
        handleInputChange,
        handleCancel,
        errors,
        inputs,
        redirect
    };
}
export default FunctionForm;