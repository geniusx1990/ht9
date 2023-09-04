function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        const results = [];
        let counter = 0;

        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then(result => {
                    results[i] = result;
                    counter++;
                    if (counter === arr.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error)
                })
        }
    })
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });