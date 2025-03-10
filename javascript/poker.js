//52 cards

//ace, 2 -10, J, Q, K

// S, H, C, D


function createDeck() {

    let suite = ['S', 'H', 'C', 'D'] 
    let card = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    let deck = []
  
    for(let i = 0; i < suite.length; i ++) {
  
      for(let j = 0; j < card.length; j ++) {
        deck.push(card[j] + suite[i])
      }
    }
  
    return deck
  }
  
  
  function shuffleDeck(deck) {
  
  let shuffledDeck = []
      
   // for(let i = 0; i < deck.length; i ++) {
  //      let randomCard = Math.floor(Math.random() * 52)
  
     // let cardToSwap = deck[randomCard]
      
    //  shuffledDeck[i] = cardToSwap
      
   // }
	
	while(shuffledDeck != deck.length){
		let randomCard = Math.floor(Math.random() * deck.length);
		shuffledDeck.push(deck.splice(randomCard,1));
		}  
      return shuffledDeck
  }
  
  function drawCard(deck) {
      
    let topCard = deck.pop()
    
    return topCard
  }
  
  
  let deck = createDeck()
  
  console.log(deck)
  
  let shuffled = shuffleDeck(deck)
  
  console.log(shuffled)
  
  let topCard = drawCard(shuffled)
  
  console.log(topCard)
