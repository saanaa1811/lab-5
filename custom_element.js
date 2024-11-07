alert("sana was here!");

class Centre extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define("x-center", Centre);

class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Purple extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:purple">${this.innerHTML}</div>`
    }
}

customElements.define("x-colour", Purple);