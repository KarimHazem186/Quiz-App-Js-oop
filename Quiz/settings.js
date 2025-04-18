// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
import Quiz from "../Quiz/quiz.js";
class Settings {
    constructor(){
        this.settingDom = document.querySelector(".settings");
        this.quizDom = document.querySelector(".quiz");
        this.categoryDom = document.querySelector("#category");
        this.nQuestionDom = document.querySelector("#nQuestions");
        this.startBtn = document.querySelector("#startBtn");
        this.difficulty = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard"),
        ];
        this.quiz= {};
        this.startBtn.addEventListener("click", this.startQuizApp);
    }
    startQuizApp = async () => {
        try {
            // console.log("app started");
        const amount =this.getAmount();
        const categoryID = this.categoryDom.value;
        const difficulty = this.getDifficulty();
        
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`
        // let result = await this.fetchData(url);
        let { results } = await this.fetchData(url); // {} ===> discaration object
        console.log(results);

        this.quiz = new Quiz(this.quizDom,amount,results);

        this.toggleElements();
        // fetch(url)
        // .then((response) => response.json()) // console.log(response) to convert data to JSON
        // .then((data) => {  // console.log(data)
        //     // result = data.result;
        //     this.quizDom.style.display = "block";
        //     this.settingDom.style.display = "none";
        //     // this.toggleElements();
        // } ); 
        } catch (err){
           alert(err);
       }
    };

    toggleElements = () => {
        this.quizDom.style.display ="block";
        this.settingDom.style.display = "none";
    };

    getDifficulty = () => {
        const difficulty = this.difficulty.filter((el) => el.checked);
        // console.log(difficulty);
        if (difficulty.length === 1){
            return difficulty[0].id;
        } else {
            alert("Please select difficulty");
        }
    };


    // fetchData = (url) => {
    //     fetch(url).then((response) => response.json()) // console.log(response) to convert data to JSON
    //     .then((data) =>{  // console.log(data)
    //         return data.result;
    //     } );
    // };

    fetchData =async (url) => {
        const response = await fetch(url);
        const result = await response.json();
            return result;
    };





    getAmount = () => {
        const amount = this.nQuestionDom.value;
        if (amount > 0 && amount < 20){
            return amount;
        } else {
            alert("Please enter questions");
        }
    };
}

export default Settings;
