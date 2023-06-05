class EmptyInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmptyInputError';
    }
}

function checkInput(inputNum) {
    if (inputNum == '') {
        throw new EmptyInputError("Input Empty: Please Enter A Number");
    }

    return;
}