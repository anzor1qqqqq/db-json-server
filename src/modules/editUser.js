'use strict';

import { errorGenerator } from './errorGenerator';
import { render } from './render';

export const editUser = () => {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('#table-body');
    const inputName = document.querySelector('[type="text"]');
    const inputEmail = document.querySelector('[type="email"]');
    const inputChecked = document.querySelector('[type="checkbox"]');

    let tr;

    tableBody.addEventListener('click', event => {
        if (event.target.closest('.edit_user')) {
            form.dataset.edit = 'true';
            tr = event.target.closest('tr');

            userService.getData(`http://localhost:1001/users/${tr.dataset.id}`).then((obj) => {
                inputName.value = obj.name;
                inputEmail.value = obj.email;
                inputChecked.checked = obj.children;
            });
        };
    });
            
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (form.dataset.edit === 'true') {
            const obj = {
                name: inputName.value,
                email: inputEmail.value,
                children: inputChecked.checked,
                permissions: false,
            };

            userService.setData(`http://localhost:1001/users/${tr.dataset.id}`, 'PUT', obj).then(() => {
                userService.getData('http://localhost:1001/users').then((text) => {
                    form.removeAttribute('data-edit');
                    form.reset();
    
                    render(text);
                }).catch(() => {
                    errorGenerator();
                });
            }).catch(() => {
                errorGenerator();
            });
        };
    });
};