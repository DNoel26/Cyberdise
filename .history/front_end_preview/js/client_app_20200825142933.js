import Test from "../js/newFile.js";

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        const home_page_html = document.querySelector("#home_page_html");

        home_page_html.style.overflow = "unset";
          

        document.addEventListener("DOMContentLoaded",(e)=>{

            /*document.addEventListener("scroll",()=>{

                home_page_html.style.overflow = "auto"; 
            })*/

            e.target = ""
            e.preventDefault();

            setTimeout(()=>{

                home_page_html.style.overflow = "auto";    
            },2000)  
        })
    }
}

App.init();

export default App; 