'use strict';

import { errorGenerator } from "./errorGenerator";
import { render } from "./render";

export const sortChildren = () => {
    const sortIsChildren = document.querySelector('#sort-is-children');
    sortIsChildren.style.cursor = 'pointer';

    let bool = true;

    sortIsChildren.addEventListener('click', () => {
        bool = !bool;

        userService.getData(`http://localhost:1001/users?_sort=children&_order=${bool ? 'asc' : 'desc'}`).then((text) => {
            render(text);
        }).catch(() => {
            errorGenerator();
        });
    });
};