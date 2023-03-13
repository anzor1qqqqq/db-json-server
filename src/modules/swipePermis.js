'use strict';

import { errorGenerator } from "./errorGenerator";

export const swipePermis = () => {
    const tableBody = document.querySelector('#table-body');

    tableBody.addEventListener('click', event => {
        if (event.target.closest('input[type="checkbox"]')) {
            let tr = event.target.closest('tr');
            let check = event.target.checked;
            errorGenerator

            userService.setData(`http://localhost:1001/users/${tr.dataset.id}`, 'PATCH', {permissions: check}).catch(() => {
                errorGenerator();
            });
        };
    });
};