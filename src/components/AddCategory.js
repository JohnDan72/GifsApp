import React, { useState } from 'react';
import { Input, InputGroup } from 'rsuite';

const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola mundo')
    return (
        <>
            <InputGroup size="md">
                <Input placeholder="nueva categoría" />
                {/*onClick={(e) => handleAdd()}*/}
                <InputGroup.Button >
                    Agregar
                </InputGroup.Button>

            </InputGroup>
        </>
    );
}

export default AddCategory;