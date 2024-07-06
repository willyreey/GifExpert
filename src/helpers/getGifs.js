export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=5&api_key=mECegxYzVwtW1bm07yUKZqa7uApzTEqm&q=${category}`;
    const resp = await  fetch( url )
    const {data} = await resp.json()
  
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    return gifs;

}