import Test from "../js/newFile.js";

console.log("Client side js working!");
Test.trying();

const App =
{
    init()
    {
        home_page = document.querySelector("html");

        home_page.style.all = "unset"
    }
}

App.init();

export default App; 