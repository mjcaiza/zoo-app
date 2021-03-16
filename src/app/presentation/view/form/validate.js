const validate = (inputs) => {

    const errors = {};

    if (!inputs.name || inputs.name === "" || inputs.name === null) {
        errors.name = 'Name required';
    }
    if (!inputs.age || inputs.age === "" || inputs.age === null) {
        errors.age = 'Age required';
    } else if (inputs.age < 0) {
        errors.age = 'Invalid age';
    }
    if (!inputs.category || inputs.category === "" || inputs.category === null) {
        errors.category = 'Name required';
    }
    if (!inputs.environment || inputs.environment === "" || inputs.environment === null) {
        errors.environment = 'Name required';
    }
    return errors;
}
export default validate;