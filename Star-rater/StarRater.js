class StarRater extends HTMLElement{
  constructor(){
    super()
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = `Hello from Shadow`
  }
}

customElements.define('star-rater', StarRater);