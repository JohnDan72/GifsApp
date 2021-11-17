import { getGifs } from "../../helpers/gifsHelper"



describe('Pruebas getGifs helper' , () => {
    const category = 'Goku';



    test('debe traer 20 elementos', async() => {
        const gifs = await getGifs(category);

        expect(gifs.length).toBe(24)
    });

    test('debe traer un empty array', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
    })
    
})