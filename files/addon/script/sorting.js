/*
document.getElementById("id名")
.setAttribute("属性名", 値)
.removeAttribute("属性名")
.getAttribute("属性名")

.insertAdjacentHTML("", '要素')
1、beforebegin
 Elementのタグの直前に挿入します。
2、afterbegin
 Elementタグの中の先頭に挿入します。
3、beforeend
 Elementタグの中の末尾に挿入します。
4、afterend
 Elementのタグの直後に挿入します。
*/

let url = `files/addon/script/data.json`;

$.getJSON(url, (data) => {
    for (var i = 0; i < data.addon.length; i++) {
        const name = data.addon[i].name;
        const explan = data.addon[i].explan;
        const ps = data.addon[i].function;
        const dataname = data.addon[i].dataname;
        let sent = "";
        if (ps === true) {
            sent = `<div><input type="checkbox" id="explan-button-${i}" class="explan-button"><label class="addon" for="explan-button-${i}"><div class="addon-icon"><img class="lazyload" src="./files/addon/${name}${dataname[1]}"></div>${name}<div class="addon-button-explan">${explan}</div></label><div class="explan"><label class="addon-batubutton" for="explan-button-${i}">✕</label><div class="addon-explan"><div class="addon-title">${name}</div><br>${explan}<br><br>${data.ps}</div><div class="addon-text">${data.caution}</div><a class="dl" href="./files/addon/${name}${dataname[0]}" download="">Download</a></div></div>`;
        } else if (ps === false) {
            sent = `<div><input type="checkbox" id="explan-button-${i}" class="explan-button"><label class="addon" for="explan-button-${i}"><div class="addon-icon"><img class="lazyload" src="./files/addon/${name}${dataname[1]}"></div>${name}<div class="addon-button-explan">${explan}</div></label><div class="explan"><label class="addon-batubutton" for="explan-button-${i}">✕</label><div class="addon-explan"><div class="addon-title">${name}</div><br>${explan}</div><div class="addon-text">${data.caution}</div><a class="dl" href="./files/addon/${name}${dataname[0]}" download="">Download</a></div></div>`;
        }

        var addons = document.getElementById("addons");
        addons.innerHTML += sent;
        console.log(sent)
    }
});