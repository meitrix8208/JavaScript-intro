//! revisar el archivo .envDemo para ver como se configura el archivo .env

const apiKey = import.meta.env.VITE_API_KEY;

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    })
    .catch((e) => console.log(e));
