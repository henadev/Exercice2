document.getElementById('send').addEventListener('click',function(){
    var info=document.getElementById('info');
     var firstName=$_POST['firstName'];
     var lastName=$_POST['lastName'];
     info.innerHTML='Vous êtes Mme/Mrs '+lastName+''+firstName
})