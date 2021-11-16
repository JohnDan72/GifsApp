import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, InputGroup } from 'rsuite';



const propTypes = {
    categories:     PropTypes.array.isRequired,
    setCategories:  PropTypes.func.isRequired
};

const AddCategory = ({ categories , setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (newValue) => {
        console.log(newValue);
        setInputValue(newValue)
    }

    const handleSubmit = (e) => {
        // console.log("Submit!!!!")
        if(inputValue.trim() === ''){
            return;
        }
        let yaExiste = categories.find( cat => cat === inputValue);
        if(yaExiste){
            return;
        }

        setCategories(cats => [...cats, inputValue]);
        setInputValue('');
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup size="md">
                    <Input value={inputValue}
                        placeholder="nueva categoría"
                        onChange={handleInputChange}
                    />
                    {/*onClick={(e) => handleAdd()}*/}
                    <InputGroup.Button type="submit">
                        Agregar
                    </InputGroup.Button>

                </InputGroup>

            </Form>
        </>
    );
}

AddCategory.propTypes = propTypes;

export default AddCategory;

