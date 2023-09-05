function promiseAllSettled(arr) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            const promise = arr[i];

            promise
                .then(value => {
                    result[i] = { status: 'fulfilled', value };
                    count++;

                    if (count === arr.length) {
                        resolve(result);
                    }

                })
                .catch(reason => {
                    result[i] = { status: 'rejected', reason };
                    count++
                    if (count === arr.length) {
                        resolve(result);
                    }
                })
        }
    })

}



const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(promises)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });
