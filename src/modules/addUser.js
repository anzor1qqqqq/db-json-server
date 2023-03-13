'use strict';

import { errorGenerator } from "./errorGenerator";
import { render } from "./render";

export const addUser = () => {
    const rep = document.createElement('a');
    rep.textContent = 'Произошла ошибка, данных нет!';

    const form = document.querySelector('form');
    const formCheckInput = document.querySelector('.form-check-input');

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!form.dataset.edit) {
            const formDate = new FormData(form);
            const obj = {};

            formDate.forEach((val, key) => {
                obj[key] = val;
            });
        
            obj['children'] = formCheckInput.checked;
            obj['permissions'] = false; 

            userService.setData('http://localhost:1001/users', 'POST', obj).then(() => {
                userService.getData('http://localhost:1001/users').then((text) => {
                    render(text);
                    form.reset();
                }).catch(() => {
                    errorGenerator();
                });
            }).catch(() => {
                errorGenerator();
            });
        };
    });
};