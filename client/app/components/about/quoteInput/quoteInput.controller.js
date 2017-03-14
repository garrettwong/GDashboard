class QuoteInputController {
  constructor(SweetAlert) {
    this.name = 'quoteInput';
    
    this.SweetAlert = SweetAlert;
  }

  getQuote() {
    let quotes = [
      'Yesterday is gone thats why they call it the past, tomorrow is not here that is why they call it the future.  Today is a gift, thus the present',
      '80% of problems can be solved with 20% of the effort.  the remaining 20% requires 80% of the effort - Pareto Efficiency Principle',
      'A knick in time saves nine',
      'You miss 100% of the shots that you dont take - Wayne Gretzy - Michael Scott',
      'Ive seen people grow up get bigger and age, its a new time, so make the most of who you are'
    ]; // move this to a service

    let randomIndex = Math.floor(Math.random() * quotes.length);  
    let quote = quotes[randomIndex];

    this.SweetAlert.swal('Quote of the day', `${quote}`, 'success');
  }
}

export default QuoteInputController;
