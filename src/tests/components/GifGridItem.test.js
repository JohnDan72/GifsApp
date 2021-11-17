import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';



describe('GifGridItem Test' , () => {
    const [ title , url , shortName ] = [   
        'Saitama One Punch Man',
        'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=3828c31fn23sgcds2q8sw1ylwqi6953rmkhs4xs1fbyyxlwv&rid=giphy.gif&ct=g',
        'Saitama One Punch Man'
    ];

    let wrapper = shallow( <GifGridItem title={title} url={url} shortName={shortName} /> );

    beforeEach(() => {
        wrapper = shallow( <GifGridItem title={title} url={url} shortName={shortName} /> );
    });

    test('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should has an alt img property equals to the title props', () => {
        const imgProps = wrapper.find('img').props();
        // console.log(imgProps)
        const altProperty = imgProps.alt;
        const srcAttribute = imgProps.src;

        // console.log(altProperty);
        expect(altProperty).toBe(title);
        expect(srcAttribute).toBe(url);

    });

    test('should has a header prop within Panel component and be equals to title', () => {
        const panelComponent = wrapper.find('Panel').at(1);
        const header = panelComponent.props().header;
        // console.log(panelComponent.props() )

        expect(header).toBe(title);
    });

    test('should has rsPanel className in styles og First Palen component', () => {
        const classNameExpected = 'rsPanel';

        const panelComponent = wrapper.find('Panel').at(0);
        const className = panelComponent.props().className;
        // console.log(panelComponent.prop('className') )

        expect(className.includes(classNameExpected)).toBe(true);
    })
    
    
})