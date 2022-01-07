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
    //   console.log(`caution=${data.caution}, ps=${data.ps}`);
    for (var i = 0; i < data.addon.length; i++) {
        // console.log(`${data.addon[i].id}`)
        // console.log(`${data.addon[i].name}`)
        // console.log(`${data.addon[i].explan}`)
        // console.log(`${data.addon[i].function}`)
        // console.log(`${data.addon[i].dataname}`)
        const id = data.addon[i].id;
        const name = data.addon[i].name;
        const explan = data.addon[i].explan;
        const ps = data.addon[i].function;
        const dataname = data.addon[i].dataname;
        let sent = "";
        if (ps === true) {
            sent = `<input type="checkbox" id="explan-button-${id}" class="explan-button"><label class="addon" for="explan-button-${id}"><div class="addon-icon"><img class="lazyload" src="./files/addon/${name}${dataname[1]}"></div>${name}<div class="addon-button-explan">${explan}</div></label><div class="explan"><label class="addon-batubutton" for="explan-button-${id}">✕</label><div class="addon-explan"><div class="addon-title">${name}</div><br>${explan}<br><br>${data.ps}</div><div class="addon-text">${data.caution}</div><a class="dl" href="./files/addon/${name}${dataname[0]}" download>Download</a></div>`;
        } else if (ps === false) {
            sent = `<input type="checkbox" id="explan-button-${id}" class="explan-button"><label class="addon" for="explan-button-${id}"><div class="addon-icon"><img class="lazyload" src="./files/addon/${name}${dataname[1]}"></div>${name}<div class="addon-button-explan">${explan}</div></label><div class="explan"><label class="addon-batubutton" for="explan-button-${id}">✕</label><div class="addon-explan"><div class="addon-title">${name}</div><br>${explan}</div><div class="addon-text">${data.caution}</div><a class="dl" href="./files/addon/${name}${dataname[0]}" download>Download</a></div>`;
        }

        var addons = document.getElementById("addons");
        addons.innerHTML += sent;
    }
});