document.addEventListener("DOMContentLoaded",()=>
{
    document.querySelector(".btn").addEventListener("click",()=>
    {
        var email=document.getElementById("email").value;
        var pass=document.getElementById("password").value;
        let obj=JSON.parse(localStorage.getItem(email));
        if(email!=""&&pass!="")
        {
            if(pass==(obj.password))
            {
                alert("sign in successful Mr" +obj.name+ "your email id is " +obj.email);
            }
            else
            {
                alert("Something Went Wrong!");
    
            }
        }
        else
        {
            alert("fill all the data");
        }
    })
})