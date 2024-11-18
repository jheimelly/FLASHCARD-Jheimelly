function criaCartao (categoria , perguntas ,resposta) {
  let container= Document.getElementById('container')
  //VARIAVEL CONTAINER BUSCADA PELO ID 'CONTAINER'
   let cartao= document.createElement('article')
   //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO HTML
   cartao.className='cartao'
   //CRIA CLASSE ''cartao para o elemnto criado
   cartao.innerHTML=`
   <div class="cartao__conteudo">
               <h3>$ ( categoria)</h3>
               <div class="cartao__conteudo__pergunta">
                   <p>$(pergunta)</p>
               </div>
               <div class="cartao__conteudo__resposta">
                   <p>$(resposta)</p>
               </div>
           </div>`
   //iner.HTML insere texto no HTML via JAVASCRIPT
   let respostaEstaVisivel= false
}

  function vira cartao() {
    respodtaEStavel=! respostaEstaVisivel
    cartao.classslist. toglle ('active',respostaEstaVisivel)
  }
  //criacao da função viaCartao
  //ao virar o cartao resposta invisivel ficará invisivel por causa do !
  //ao clicar no cartao ele adiciona o métado active p/ativar o clic na resposta
  cartao.addEventListenner ('click', viraCartao)
  container.appendChild(cartao)
  //adiciona um evento de escuta para o clic do cartao
  //ao clicar cirar um item "filho (appendChild)"no cartao