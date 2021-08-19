class StarRater extends HTMLElement{
  constructor(){
    super()
    this.build()
 
  }

  build(){ 
    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(this.styles())

    const rater = this.createRater();
    this.stars = this.createStars();
    this.resetStars()

    this.stars.forEach( star =>{
      rater.appendChild(star)
    })
    shadow.appendChild(rater)
  } //build

  createRater(){
    const rater = document.createElement('div');
    rater.classList.add('star-rater')
    return rater;
  } // createRater

  createStars(){
    const createStar = (_, id) =>{
      const star = document.createElement('span')
      star.classList.add('star');
      star.setAttribute('data-value', Number(id) +1)
      star.innerHTML = '&#9733;'

      // Adicionado evento de click , chamando a função setRaging passando o this do obj StarRater
      star.addEventListener('click', this.setRating.bind(this))
      star.addEventListener('mouseover', this.hatingHover.bind(this))
      star.addEventListener('mouseout', this.resetStars.bind(this))

      return star;
    }
    return Array.from({length: 5}, createStar);
  } // createStars

  resetStars(){
    this.currentRatingValue = this.getAttribute('data-rating') || 0
    this.hightlightRating()
  }
  setRating(event){
    // ReferenciaObj.setandoAtributo('data-rating',evento.quemDisparouEvento.pegueOAtributo('data-value'))
    // event.currentTarget.getAttribute('data-value') retorna oque esta dentro do Atributo 'data-value'
    this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'))
  } // setRating

  hatingHover(event){
    this.currentRatingValue = event.currentTarget.getAttribute('data-value')// recebe o data-value da estrela que o mouse estiver em cima
    this.hightlightRating()

  } // hatingHover

  hightlightRating(){
    this.stars.forEach(star =>{
      star.style.color = this.currentRatingValue >= star.getAttribute('data-value') ? 'yellow' : 'gray'
    })
    
  }

  styles(){
    const style = document.createElement('style');
    style.textContent =`
    .star{
      font-size: 5rem;
      color: gray;
      cursor: pointer;
    }
    `
    return style
  } // styles


}

customElements.define('star-rater', StarRater);