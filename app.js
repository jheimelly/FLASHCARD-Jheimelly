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
           </div>
   //iner.HTML insere texto no HTML via JAVASCRIPT
   let respostaEstaVisivel= false
}