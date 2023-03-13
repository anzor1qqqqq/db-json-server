'use strict';

import { errorGenerator } from "./errorGenerator";
import { render } from "./render";

export const removeUsers = () => {
    const tableBody = document.querySelector('#table-body');

    tableBody.addEventListener('click', event => {
        if (event.target.closest('.deleate_user')) {
            let tr = event.target.closest('tr')

            userService.getData(`http://localhost:1001/users/${tr.dataset.id}`, 'DELETE').then(() => {
                userService.getData('http://localhost:1001/users').then((text) => {
                    render(text);
                }).catch(() => {
                    errorGenerator();
                });
            }).catch(() => {
                errorGenerator();
            });
        }
    });
};