class Final {
    constructor(correctAnswers,totalAmount){
        this.scoreElement = document.querySelector(".score");
        this.againBtn = document.querySelector("#again");
        
        this.render(correctAnswers,totalAmount);
        this.againBtn.addEventListener("click",this.startAgain);

    }

    startAgain = () => {
        location.reload();
    };

    render(correctAnswer,totalAmount){
        this.scoreElement.innerHTML = `You answered ${correctAnswer} out of ${totalAmount} correct`;
    }
}

export default Final;