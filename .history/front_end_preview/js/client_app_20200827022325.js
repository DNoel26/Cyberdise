import Test from "../js/newFile.js";
import Rating_Widget from "../js/rating_widget.js"

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        const doc_html = document.querySelector("html");
        const doc_body = document.querySelector("body")
        const home_page_html = document.querySelector("#home_page_html");
        const home_page_body = document.querySelector("#home_page_body");
        const home_page_hero = document.querySelector("#home_page_hero");
        const home_page_main = document.querySelector("#home_page_main");
        const page_top = document.querySelector("#go_to_top");

        function go_to_top()
        {
            page_top.click();
        }

        function go_to_main()
        {
            home_page_main.scrollIntoView(true, {behavior: "smooth"});
        }

        const best_seller_height_adjust = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting === true)
            {
                console.log("I see you!");
                //home_page_html.scrollBehavior = "smooth";
                //window.scrollTo(0, 0);
                //go_to_top();
                //home_page_body.style.height = "100vh";    
                
                //height_adjust.unobserve(entries[0].target);

                /*let test = new Promise((resolve)=>{

                    go_to_top()

                    setTimeout(resolve,200)
                }) 
                .then(()=>{

                      home_page_body.style.height = "100vh";   
                })*/

                    //home_page_body.style.scrollSnapType = "y mandatory";
                    //home_page_body.style.overflow = "auto";   

                go_to_main()
            }
        },{threshold: [0.9]});

        //home_page_html.style.overflow = "unset";
        //home_page_body.style.overflow = "initial";
          
        document.addEventListener("DOMContentLoaded",()=>{

            
            /*document.addEventListener("scroll",()=>{

                home_page_html.style.overflow = "auto"; 
            })
            setTimeout(()=>{

                //home_page_body.style.scrollSnapType = "y mandatory";
                //home_page_body.style.overflow = "auto";   
                
                go_to_top();
            },5000)*/

            //home_page_body.style.height = "100%";

            //window.scrollTo({left: 0, top: 0, behavior: 'smooth'});

            //best_seller_height_adjust.observe(home_page_hero);

            //home_page_html.style.overflow = "auto";
            const rating_div = document.createElement("div");

            Rating_Widget.append_widget(doc);
        })
    }
}

App.init();

export default App; 