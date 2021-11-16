
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0bcW1FR66wVpVSj3v8logtrzaY6OIjvO&q=${ encodeURI(category) }&limit=24&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs_data = data.map(img => {
        let shortname = (img.title.length > 30)? img.title.substr(0,29)+' ...':img.title+'';
        return { 
                    id: img.id, 
                    title: img.title, 
                    shortName: shortname,
                    url: img.images?.downsized_medium.url 
                }
    });

    return gifs_data;
    // setgifs(gifs_data);
    // console.log("gifs...______________");
    // console.log(gifs);
}