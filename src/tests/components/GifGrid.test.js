import React from 'react';
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Pruebas GifGridComponent' , () => {
    const category = 'Goku';

    test('should render GifGrid component', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();
    }); 

    test('debe mostrar items cuando se cargan imágenes', () => {

        const gifs = [
            {id:'asd',url:'https://localhost/image.jpg',title:'asdasd',shortName: 'asdasd'},
            {id:'asd2',url:'https://localhost/image.jpg',title:'asdasd',shortName: 'asdasd'},
            {id:'asd3',url:'https://localhost/image.jpg',title:'asdasd',shortName: 'asdasd'},
        ]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}/> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('TimeIcon').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(3);
        
    });
    
})