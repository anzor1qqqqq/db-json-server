'use strict';

import { errorGenerator } from "./errorGenerator";
import { render } from "./render";
import { createThrotling } from "./throtling";

export const searchUser = () => {
    const searchInput = document.querySelector('#search-input');

    const throtling = createThrotling(() => {
        userService.getData(`http://localhost:1001/users?name_like=${searchInput.value}`).then((text) => {
            render(text);
        }).catch(() => {
            errorGenerator();
        });
    }, 500);


    searchInput.addEventListener('input', throtling);
};