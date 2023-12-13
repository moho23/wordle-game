import allWords from "../statics/words.json"

export default {
    //states
    mainWord: "",
    guessesList: [],
    attemptCounter: 0,

    //getters /\/\ setters
    initialize() {
        this.mainWord = allWords[Math.round(Math.random() * allWords.length)]
        this.guessesList = (new Array(6).fill(''))
        this.attemptCounter = 0
    },

    get isWon() {
        return this.guessesList[this.attemptCounter - 1] === this.mainWord
    },

    get isLost() {
        return this.attemptCounter === 6
    },

    handleKeyUp(e) {
        if (this.isWon || this.isLost) return
        if (e.key === 'Enter') return this.submit()
        if (e.key === 'Backspace') {
            this.guessesList[this.attemptCounter] = this.guessesList[this.attemptCounter].slice(0, this.guessesList[this.attemptCounter].length - 1)
            return
        }
        if (this.guessesList[this.attemptCounter].length < 5 && e.key.match(/^[A-z]$/)) {
            this.guessesList[this.attemptCounter] = this.guessesList[this.attemptCounter] + e.key.toLowerCase()
        }
    },

    submit() {
        //as doc said its not important written word is not meaningful
        if (this.guessesList[this.attemptCounter].length === 5) {
            this.attemptCounter += 1
        }


        // this is happened when written word does not in the main list
        // if (allWords.includes(this.guessesList[this.attemptCounter])) {
        //     this.attemptCounter += 1
        // } else {
        //     toast.error("Sorry, The word is not defined in my dictionary")
        //     this.guessesList[this.attemptCounter] = ""
        // }
    }
}