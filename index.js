document.addEventListener('DOMContentLoaded', () => {
    let casesQuentity = 9;
    let currentCaseNumber = 1;

    let arrowLeft = document.querySelector('.main__arrow-left');
    let arrowRight = document.querySelector('.main__arrow-right');
    let caseWrapper = document.querySelector('.main__case-wrapper');

    let increaseCurrentCaseNumber = () => {
        currentCaseNumber += 1;
        if (currentCaseNumber > casesQuentity) currentCaseNumber = 1;
        return currentCaseNumber;
    };

    let decreaseCurrentCaseNumber = () => {
        currentCaseNumber -= 1;
        if (currentCaseNumber < 1) currentCaseNumber = casesQuentity;
        return currentCaseNumber;
    };

    arrowLeft.addEventListener('click', () => {
        caseWrapper.style.backgroundImage = `url('./${decreaseCurrentCaseNumber()}.jpg')`;
    });

    arrowRight.addEventListener('click', () => {
        caseWrapper.style.backgroundImage = `url('./${increaseCurrentCaseNumber()}.jpg')`;
    });
});