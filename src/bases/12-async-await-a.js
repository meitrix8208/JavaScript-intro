const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tenemos un valor en la promesa");
            // reject("tenemos un error en la promesa");
        }, 1000);
    });
};

const medirTiempoAsync = async () => {
    try {
        console.log("inicio");

        const repuesta = await miPromesa();
        console.log(repuesta);

        console.log("fin");

        return "fin de medir Tiempo async";
    } catch (error) {
        // return "error en medir tiempo async";
        throw "error en medir tiempo async";
    }
};

medirTiempoAsync()
    .then(console.log)
    .catch((err) => console.log("ERROR: ", err));
