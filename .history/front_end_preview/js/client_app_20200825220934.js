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
        const page_top = document.querySelector("#go_to_top");

        function go_to_top()
        {
            page_top.click();
        }

        const best_seller_height_adjust = new IntersectionObserver((entries)=>{

            if(entries[0].isIntersecting == true)
            {
                console.log("I see you!");
                //home_page_html.scrollBehavior = "smooth";
                //window.scrollTo(0, 0);
                //go_to_top();
                //home_page_body.style.height = "100vh";    
                
                //height_adjust.unobserve(entries[0].target);
                let test = new Promise((resolve)=>{

                    setTimeout(resolve,200)
                }) 
                .then(()=>)
                    setTimeout(()=>{

                    //home_page_body.style.scrollSnapType = "y mandatory";
                    //home_page_body.style.overflow = "auto";   
                    
                    go_to_top()
                    
                      
                },200)
                .then(()=>{
                    
                    home_page_body.style.height = "100vh";  
                })
            }
        },{threshold: [0.01]});

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

            home_page_body.style.height = "100%";

            //window.scrollTo({left: 0, top: 0, behavior: 'smooth'});

            best_seller_height_adjust.observe(home_page_hero);

            //home_page_html.style.overflow = "auto";
        })
    }
}

App.init();

export default App; 