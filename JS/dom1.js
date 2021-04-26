// getElementById
// querySelector - CSS selectors(actually make a copy of selected elements) , 



// creatElement()
// appendChild()
// textContent
// innerHTML


let div = document.createElement('div');
div.innerHTML = '<p>Create an element and use InnerHTML</P>'
document.body.appendChild(div);

let h2 = document.createElement('h2')
h2.textContent='Add h2 element to the div'
div.appendChild(h2)


// innerHTML vs createElement
// 1. createElement is more performant
// 2. createElement is more secure
// 3. Using DocumentFragment for composing DOM Nodes


// insertBefore: insert a node before another node as a child node of a parent node parentNode.insertBefore(newNode, existingNode)

let li1 = document.createElement('li')
li1.textContent = 'Ori 1st element of div'
div.appendChild(li1)
let li = document.createElement('li')
li.textContent = 'InsertBefore divs first child'
div.insertBefore(li, div.firstElementChild)

// append: parentNode.append() inserts a set of Node objects or DOMString ogjects after the last child of Parent Node
let ul = document.createElement('ul')
ul.id = 'app'
div.appendChild(ul)
let app = document.querySelector('#app')
let langs = ['TyoeScript', 'HTML', 'CSS']
let nodes = langs.map(lang => {
    let liNode = document.createElement('li')
    liNode.textContent = lang
    return liNode
})
app.append(...nodes)

// prepend
let preLangs = ['Java', 'Python', 'C++']
let preNodes = preLangs.map(lang => {
    let preLiNode = document.createElement('li')
    preLiNode.textContent = lang
    return preLiNode
})
app.prepend(...preNodes)

// replaceChild: parentNode.replaceChild(newChild, oldChild)
let newli = document.createElement('li')
newli.textContent = 'newChild'
app.replaceChild(newli, app.firstElementChild)

// removeChild
app.removeChild(app.lastChild)
// cloneNode: let clonedNode = originalNode.cloneNode(deep);
// --If the deep is true, then the original node and all of its descendants are cloned.
// --If the deep is false, only the original node will be cloned. All the node’s descendants will not be cloned.
let clonedApp = app.cloneNode(true)
clonedApp.id = 'app-mobile'
document.body.appendChild(clonedApp)

// getAttribute
// setAttribute: element.setAttribute(name, value);
// removeAttribute: element.removeAttribute(name);
// hasAttribute
let btnSend = document.querySelector('#btnSend')
if(btnSend) {
    btnSend.setAttribute('name', 'send')
    btnSend.setAttribute('disabled', '')
    let btnId = btnSend.getAttribute('id')
    console.log(btnId)
    btnSend.removeAttribute('disabled')
    console.log(btnSend.hasAttribute('disabled'))
}

// style property: element.style.color = 'red';
btnSend.style.color = 'red'
// classList property: The classList is a DOMTokenList object that represents the contents of the element’s class attribute.
// --Even though the classList is read-only, but you can manipulate the classes it contains using various methods.
let div1 = document.querySelector('#content');
for (let cssClass of div1.classList) {
    console.log(cssClass);
}
div1.classList.add('info','visible','block');
for (let cssClass of div1.classList) {
    console.log(cssClass);
}
div1.classList.remove('visible');
for (let cssClass of div1.classList) {
    console.log(cssClass);
}
div1.classList.replace('info','warning');
for (let cssClass of div1.classList) {
    console.log(cssClass);
}
div1.classList.contains('warning')
div1.classList.toggle('visible');
// elements witdth and height
let box = document.querySelector('div');
let width = box.clientWidth;
let height = box.clientHeight;
// events--- page events ,js events, mouse + keyboard events
// scroll events
function display() {
    alert('It was clicked!');
}

btnSend.addEventListener('click',display);
// document.addEventListener('DOMContentLoaded',() => {
//     // handle DOMContentLoaded event
// });

// document.addEventListener('load',() => {
//     // handle load event
// });

// document.addEventListener('beforeunload',() => {
//     // handle beforeunload event
// });

// document.addEventListener('unload',() => {
//     // handle unload event
// });

var msg = document.getElementById('message')

msg.addEventListener("keydown", (event) => {
    // handle keydown
    console.log(`key=${event.key},code=${event.code}`);
});

msg.addEventListener("keypress", (event) => {
    // handle keypress
});

msg.addEventListener("keyup", (event) => {
    // handle keyup
});
window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
});

// javascripttutorial.net/javascript-dom


// current screen size/ current viewportsize/ client height and width