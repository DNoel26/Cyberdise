import Test from "../js/newFile.js";

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        const home_page_html = document.querySelector("#home_page_html");
        const home_page_body = document.querySelector("#home_page_body");

        //home_page_html.style.overflow = "unset";
        home_page_body.style.overflow = "initial";
          
        document.addEventListener("DOMContentLoaded",()=>{

            /*document.addEventListener("scroll",()=>{

                home_page_html.style.overflow = "auto"; 
            })*/
            setTimeout(()=>{

                home_page_body.style.scrollSnapType = "y mandatory";
                home_page_body.style.overflow = "auto";    
            },10000)
        })
    }
}

App.init();

export default App; 