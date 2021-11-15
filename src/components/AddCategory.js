import React, { useState } from 'react';
import { Input, InputGroup } from 'rsuite';

const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola mundo')

    const handleInputChange = (newValue) => {
        console.log(newValue);
        setInputValue(newValue)
    }

    const handleSubmit = (e) => {

    }
    return (
        <>  
        
            <InputGroup size="md">
                <Input  value={inputValue} 
                        placeholder="nueva categoría" 
                        onChange={handleInputChange}
                        />
                {/*onClick={(e) => handleAdd()}*/}
                <InputGroup.Button >
                    Agregar
                </InputGroup.Button>

            </InputGroup>
        </>
    );
}

export default AddCategory;