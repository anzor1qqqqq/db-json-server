import { render } from './modules/render';
import { UserService } from './modules/userService';
import { addUser } from './modules/addUser';
import { removeUsers } from './modules/removeUsers';
import { swipePermis } from './modules/swipePermis';
import { editUser } from './modules/editUser';
import { filterUser } from './modules/filterUser';
import { sortChildren } from './modules/sortChildren';
import { searchUser } from './modules/searchUser';
import { errorGenerator } from './modules/errorGenerator';

window.userService = new UserService;

userService.getData('http://localhost:1001/user').then((text) => {
    render(text);
}).catch(() => {
    errorGenerator();
});

addUser();
editUser();
removeUsers();
swipePermis();
filterUser();
sortChildren();
searchUser();