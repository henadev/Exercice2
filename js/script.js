document.getElementById('send').addEventListener('click',function(){
    var info=document.getElementById('info');
     firstName=document.getElementById('firstName'),
     lastName=document.getElementById('lastName');
     info.innerHTML='Vous êtes Mme/Mrs '+lastName+''+firstName
})