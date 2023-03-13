'use strict';

export const createThrotling = (func, ms = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
}; 