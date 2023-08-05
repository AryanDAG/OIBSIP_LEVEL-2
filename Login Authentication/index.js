document.addEventListener("DOMContentLoaded",()=>
{
    document.querySelector(".rbtn").addEventListener("click",()=>
    {
        var email=document.getElementById("remail").value;
        var name=document.getElementById("text").value;
        var pass=document.getElementById("rpassword").value;
        var cpass=document.getElementById("rcpassword").value;
        if(email!=""&&name!=""&&pass!=""&&cpass!="")
        {
            if((localStorage.getItem(email)))
            {
                alert("user already registered");
            }
            else
            {

                if(pass==cpass)
                {
                    console.log(pass+""+email);
                    alert("Registration successful go to home page")
                    document.getElementById("btn").style.display="revert";
                    document.getElementById("rbtn").style.display="none";
                    localStorage.setItem(email,JSON.stringify({name:name,password:pass,email:email})
                        );
                }
                else
                {
                    alert("Registration unsuccessful! try again")
        
                }
            }
        }
        else
        {
            alert("fill all the data");
        }
    })
})