import Test from "../js/newFile.js";

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        const home_page_html = document.querySelector("#home_page_html");

        

        document.addEventListener("DOMContentLoaded",()=>{

            home_page_html.style.overflow = "unset";
            setTimeout(()=>{

                home_page_html.style.overflow = "auto";    
            },500)
            
        })
    }
}

App.init();

export default App; 