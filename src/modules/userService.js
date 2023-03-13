'use strict';

export class UserService {
    getData(url, meth) {
        if (meth) {
            return fetch(url, {
            method: meth,
        }).then((response) => response.json());
        } else {
            return fetch(url).then((obj) => obj.json())
        };
    };

    setData(url, method, obj) {
        return fetch(url, {
            method: method,

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(obj),
        }).then((response) => response.json());
    };
};