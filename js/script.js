document.getElementById('send').addEventListener('click',function(){
    var info=document.getElementById('info');
     var firstName=$('input[name=firstName]').val();
     var lastName=$('input[name=lastName]').val();
     info.innerHTML='Vous êtes Mme/Mrs '+lastName+''+firstName
})