import logo from './logo.svg';
import './App.css';

function App() {
  const palindromeChecker = (word) => {
    let revStr = word.split('').reverse().join('');
    if (revStr === word && word.length > 0) alert(`${word} is a palindrome!`)
    else alert(`${word} is not a palindrome`)
  }
  let userInput = window.prompt('Enter Word')
  palindromeChecker(userInput)
}

export default App;
