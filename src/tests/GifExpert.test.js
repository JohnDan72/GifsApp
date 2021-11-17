import React from "react";
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp";


describe('Pruebas Gif Expert' , () => {
    
    let wrapper = shallow( <GifExpertApp /> );

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    })

    test('should render GifExpert ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show an categories list', () => {
        const categories = ['one punch','dragon ball'];
        const wrapper = shallow( <GifExpertApp defaultCats={categories} />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    
})