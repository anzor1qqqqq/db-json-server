'use strict';

export const errorGenerator = () => {
    const tableResponsive = document.querySelector('.table-responsive');
    const rep = document.createElement('a');
    rep.textContent = 'Произошла ошибка, данных нет!';

    tableResponsive.append(rep)
    console.log('Произошла ошибка, данных нет!');
};