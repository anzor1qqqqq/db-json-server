'use strict'

export const render = (data) => {
    const tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = '';

    data.forEach(({id,name, email, children, permissions}) => {
        tableBody.insertAdjacentHTML('beforeend', `
                                    <tr data-id="${id}" class="tr_table">
                                        <th scope="row">${id}</th>
                                        <td>${name}</td>
                                        <td>${email}</td>
                                        <td class="avail_child">${children ? 'Есть' : 'Нет'}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="form-children" ${permissions ? 'checked' : ''}>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-warning edit_user">
                                                    <i class="bi-pencil-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger deleate_user">
                                                    <i class="bi-person-x"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
        `);
    });
};