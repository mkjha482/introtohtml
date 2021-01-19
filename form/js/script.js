document.getElementById("but").style.cursor = "pointer";

addEventListener("keyup", function(event) 
{
  if (event.keyCode === 13) 
  {
   event.preventDefault();
   document.getElementById("but").click();
  }
});

function check()
{
  var pass="Gotogoogle";
  var pass2=document.getElementById('pass').value;
  if(pass2!=0)
  {
  if(pass2===pass)
    {
      redirect();
    }
  else alert("oops..! wrong password");
  }
  else alert("please enter a valid password..!");
}
function redirect()
{
  document.location.href = "https://www.google.com/",true;
}