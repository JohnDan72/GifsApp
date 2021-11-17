import { shallow } from "enzyme"
import React from "react";
import AddCategory from "../../components/AddCategory"



describe('Pruebas de AddCategoryComponent' , () => {
    const [ categories , setCategories ] = [['cat 1','cat 2','cat 3'], jest.fn()];
    let wrapper = shallow( <AddCategory categories={categories} setCategories={setCategories} /> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory categories={categories} setCategories={setCategories} /> );
    });

    test('should render a AppCategory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change input value of input', () => {
        const input = wrapper.find('Input');
        input.simulate('change','matrix');
        // console.log(input.props());
        // console.log(wrapper.find('Input').props());
        expect(wrapper.find('Input').prop('value')).not.toBe('');
    });

    test('No debe postear el form', () => {
        wrapper.find('Form').simulate('submit',true); //se manda el argunmento (como no lo uso le envio un true)
        
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe postear el form y limpiar caja de texto', () => {
        const input = wrapper.find('Input')
        input.simulate('change','matrix');
        // console.log(input.props());
        wrapper.find('Form').simulate('submit',true); //se manda el argunmento (como no lo uso le envio un true)
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('Input').prop('value')).toBe('');
    });


    
})