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
customElements.define('star-rater', StarRater);
~~~

~~~html
<!- Inserindo no html ->
<body>
  <star-rater></star-rater>
  <script src="StarRater.js"></script>
<body>
~~~