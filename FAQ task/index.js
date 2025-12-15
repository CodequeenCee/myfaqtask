
//Selecting the target container where the buttons and questions are located 
let questionAnswer = document.querySelectorAll(".question-answer");

//printing out the selected items in the above selected class on the browser's console. They are displayed in form of an array
// console.log(questionAnswer);

//Looping over each 'item' in the array to select one at a time
questionAnswer.forEach((item) => {
    //printing out each item in the array on the console
    // console.log(item);
    let question = item.querySelector('.question');
    let answer = item.querySelector('.answer');
    let button = item.querySelector('.question button');
    // console.log(button);

    //Adding an event listener for when either the question or button is clicked on
    question.addEventListener('click', () => {
        // alert('I have been clicked!!!')
        //getting the upicon to show when the question or button is clicked on
        button.classList.toggle('active');
        //adding the toggle feature to the answer class to both display and hide the answer
        answer.classList.toggle('active');
        //To show the up icon when the question or button is clicked on 
        
        //looping over the previous class 'questionAnswer' to hide any answer that is not been currently clicked on
        questionAnswer.forEach((i) => {
            if (i !== item) {
                let a = i.querySelector('.answer')
                a.classList.remove('active')
            }
        })
    })
});