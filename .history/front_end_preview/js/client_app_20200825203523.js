import Test from "../js/newFile.js";

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        const home_page_html = document.querySelector("#home_page_html");
        const home_page_body = document.querySelector("#home_page_body");
        const home_page_hero = document.querySelector("#home_page_hero");

        const observer = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting === true)
            {
                alert("I see you!")
            }
        },{threshold: [0.05]})

        //home_page_html.style.overflow = "unset";
        //home_page_body.style.overflow = "initial";
          
        document.addEventListener("DOMContentLoaded",()=>{

            /*document.addEventListener("scroll",()=>{

                home_page_html.style.overflow = "auto"; 
            })
            setTimeout(()=>{

                home_page_body.style.scrollSnapType = "y mandatory";
                home_page_body.style.overflow = "auto";    
            },1000)*/
            if()
            observer.observe(home_page_hero);
        })
    }
}

App.init();

export default App; 