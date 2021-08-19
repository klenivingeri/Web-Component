~~~Javascript
//Criando web Component
class StarRater extends HTMLElement{
  constructor(){
    super()
    const shadow = this.attachShadow({mode: 'open'})// aceita alterações
    shadow.innerHTML = `Hello from Shadow`
  }
}

// É obrigatorio a tag ter "-" no nome,
customElements.define('star-rater', StarRater); // define star-rater como elemento
~~~

~~~html
<!- Inserindo no html ->
<body>
  <star-rater></star-rater>
  <script src="StarRater.js"></script>
<body>
~~~

Basicamento podemos utilizar essa estrutura para criar Web Components com Shadow dom

~~~Javascript

build(){  // escopo de build
    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(this.styles())

    const rater = this.createRater();
    const stars = this.createStars();

    stars.forEach( star =>{
      rater.appendChild(star)
    })
    shadow.appendChild(rater)
  } //build
  createRater(){ // Elemento pai de span
    const rater = document.createElement('div');
    rater.classList.add('star-rater')
    return rater;
  } // createRater

  createStars(){ // Elemento span filho -  star
    const createStar = (_, id) =>{
      const star = document.createElement('span')
      star.classList.add('star');
      star.setAttribute('data-value', Number(id) +1)
      star.innerHTML = '&#9733;'
      return star;
    }
    return Array.from({length: 5}, createStar);
  } // createStars

  styles(){// Css do elemento
    const style = document.createElement('style');
    style.textContent =`
    .star-rater {
      font-size: 25px;
      background-color:#0f0;
    }
    `
    return style
  } // styles


}

~~~