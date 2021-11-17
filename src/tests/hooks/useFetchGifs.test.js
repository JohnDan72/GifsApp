import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas al custom hook' , () => {

    test('debe retornar original state', async() => {
        
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        const { data , loading } = result.current;
        
        await waitForNextUpdate();
        // console.log(result.current);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un img array y loagin en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        
        const { data , loading } = result.current;
        
        // console.log({data,loading});

        expect(data).not.toEqual([]);
        expect(loading).toBe(false);

    })
    
    
})