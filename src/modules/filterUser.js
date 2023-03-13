'use strict';

import { errorGenerator } from "./errorGenerator";
import { render } from "./render";

export const filterUser = () => {
    const btnGroupClick = document.querySelector('.btn-group');

    btnGroupClick.addEventListener('click', event => {
        if (event.target.classList.contains('btn-isChildren')) {
            userService.getData(`http://localhost:1001/users?children=true`).then((text) => {
                render(text);
            });
        };

        if (event.target.classList.contains('btn-isPermissions')) {
            userService.getData(`http://localhost:1001/users?permissions=true`).then((text) => {
                render(text);
            });
        };
        

        if (event.target.classList.contains('btn-isAll')) {
            userService.getData('http://localhost:1001/users').then((text) => {
                render(text);
            }).catch(() => {
                errorGenerator();
            });
        };
    });
};