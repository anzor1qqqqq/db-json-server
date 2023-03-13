(()=>{"use strict";const e=e=>{const t=document.querySelector("#table-body");t.innerHTML="",e.forEach((({id:e,name:s,email:c,children:r,permissions:n})=>{t.insertAdjacentHTML("beforeend",`\n                                    <tr data-id="${e}" class="tr_table">\n                                        <th scope="row">${e}</th>\n                                        <td>${s}</td>\n                                        <td>${c}</td>\n                                        <td class="avail_child">${r?"Есть":"Нет"}</td>\n                                        <td>\n                                            <div class="form-check form-switch">\n                                                <input class="form-check-input" type="checkbox" role="switch"\n                                                    id="form-children" ${n?"checked":""}>\n                                            </div>\n                                        </td>\n                                        <td>\n                                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n                                                <button type="button" class="btn btn-warning edit_user">\n                                                    <i class="bi-pencil-square"></i>\n                                                </button>\n                                                <button type="button" class="btn btn-danger deleate_user">\n                                                    <i class="bi-person-x"></i>\n                                                </button>\n                                            </div>\n                                        </td>\n                                    </tr>\n        `)}))},t=()=>{const e=document.querySelector(".table-responsive"),t=document.createElement("a");t.textContent="Произошла ошибка, данных нет!",e.append(t),console.log("Произошла ошибка, данных нет!")};window.userService=new class{getData(e,t){return t?fetch(e,{method:t}).then((e=>e.json())):fetch(e).then((e=>e.json()))}setData(e,t,s){return fetch(e,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((e=>e.json()))}},userService.getData("http://localhost:1001/user").then((t=>{e(t)})).catch((()=>{t()})),(()=>{document.createElement("a").textContent="Произошла ошибка, данных нет!";const s=document.querySelector("form"),c=document.querySelector(".form-check-input");s.addEventListener("submit",(r=>{if(r.preventDefault(),!s.dataset.edit){const r=new FormData(s),n={};r.forEach(((e,t)=>{n[t]=e})),n.children=c.checked,n.permissions=!1,userService.setData("http://localhost:1001/users","POST",n).then((()=>{userService.getData("http://localhost:1001/users").then((t=>{e(t),s.reset()})).catch((()=>{t()}))})).catch((()=>{t()}))}}))})(),(()=>{const s=document.querySelector("form"),c=document.querySelector("#table-body"),r=document.querySelector('[type="text"]'),n=document.querySelector('[type="email"]'),a=document.querySelector('[type="checkbox"]');let o;c.addEventListener("click",(e=>{e.target.closest(".edit_user")&&(s.dataset.edit="true",o=e.target.closest("tr"),userService.getData(`http://localhost:1001/users/${o.dataset.id}`).then((e=>{r.value=e.name,n.value=e.email,a.checked=e.children})))})),s.addEventListener("submit",(c=>{if(c.preventDefault(),"true"===s.dataset.edit){const c={name:r.value,email:n.value,children:a.checked,permissions:!1};userService.setData(`http://localhost:1001/users/${o.dataset.id}`,"PUT",c).then((()=>{userService.getData("http://localhost:1001/users").then((t=>{s.removeAttribute("data-edit"),s.reset(),e(t)})).catch((()=>{t()}))})).catch((()=>{t()}))}}))})(),document.querySelector("#table-body").addEventListener("click",(s=>{if(s.target.closest(".deleate_user")){let c=s.target.closest("tr");userService.getData(`http://localhost:1001/users/${c.dataset.id}`,"DELETE").then((()=>{userService.getData("http://localhost:1001/users").then((t=>{e(t)})).catch((()=>{t()}))})).catch((()=>{t()}))}})),document.querySelector("#table-body").addEventListener("click",(e=>{if(e.target.closest('input[type="checkbox"]')){let s=e.target.closest("tr"),c=e.target.checked;userService.setData(`http://localhost:1001/users/${s.dataset.id}`,"PATCH",{permissions:c}).catch((()=>{t()}))}})),document.querySelector(".btn-group").addEventListener("click",(s=>{s.target.classList.contains("btn-isChildren")&&userService.getData("http://localhost:1001/users?children=true").then((t=>{e(t)})),s.target.classList.contains("btn-isPermissions")&&userService.getData("http://localhost:1001/users?permissions=true").then((t=>{e(t)})),s.target.classList.contains("btn-isAll")&&userService.getData("http://localhost:1001/users").then((t=>{e(t)})).catch((()=>{t()}))})),(()=>{const s=document.querySelector("#sort-is-children");s.style.cursor="pointer";let c=!0;s.addEventListener("click",(()=>{c=!c,userService.getData("http://localhost:1001/users?_sort=children&_order="+(c?"asc":"desc")).then((t=>{e(t)})).catch((()=>{t()}))}))})(),(()=>{const s=document.querySelector("#search-input"),c=((e,t=300)=>{let s;return(...c)=>{clearTimeout(s),s=setTimeout((()=>{e.apply(void 0,c)}),t)}})((()=>{userService.getData(`http://localhost:1001/users?name_like=${s.value}`).then((t=>{e(t)})).catch((()=>{t()}))}),500);s.addEventListener("input",c)})()})();