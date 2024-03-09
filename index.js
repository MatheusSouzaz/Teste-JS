function ativarTexto(){
   let texto = document.getElementsByClassName('texto')

   texto[0].classList.add('ativo')


}

function desativarTexto(){
   let texto = document.getElementsByClassName('texto')

   texto[0].classList.remove('ativo')
}