const x = document.getElementsByClassName('cross-close');
      /* donner a tous une fonction anonymes qui donne la class x(display none) a leur élément parent (div)*/     
      /*permet de recupéré un élément (commen en jquery par exemple)*/
const s = (selector)=> document.querySelector(selector);
const ss = (allselector) => document.querySelectorAll(allselector);
const close = ss('.cross-close').forEach((i) =>i.addEventListener('click',()=>i.parentNode.className="x"));