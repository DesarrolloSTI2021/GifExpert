

export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=6&q=${ encodeURI(categoria) }&api_key=5jBsmHQl27ewC98E2bwX1CZGrHBBGmiT`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {

        return {
            id,
            title,
            url
        }
    })

    return gifs;

}