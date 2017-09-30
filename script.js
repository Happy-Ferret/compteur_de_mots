var textarea = document.querySelector('#texte');
var resultat = document.querySelector('#resultat');
var txt = document.querySelector('#txt2');
textarea.addEventListener('input', () => {
    WoW = textarea.value
    .replace('-\n','')
    .split(' ')
    .filter(e => e!="e")
    .map(e => e.match(/[XVI]+s$/) ? e.slice(0, -1) + ' ' +e[e.length-1] : e)
    .map(str => 
        str .split('-')
            .filter(e => e != "t")
            .join(' ')
    )
    .join(' ').split(' ')
    .map(str => 
        (str.toLocaleLowerCase() != "aujourd'hui") ?
            str.split(/['’’‘]/).join(' ') :
            str
    )
    .join(' ').split(' ').filter(e => e.toLocaleLowerCase().split('').some(c => 'a' < c && c < 'z' || 'A' < c && c < 'Z' || '0' < c && c < '9'))
    txt.innerHTML=""
    WoW.forEach(e => {
        txt.innerHTML += `<span id="mot"> ${e} </span>&nbsp;&nbsp;`
    });
    resultat.innerText = WoW.length + " Mot(s)"
})
textarea.dispatchEvent(new Event('input'))