# JS Dadi

1. creo la variabile _humanDiceRoll_ che dovrà generare un valore random per l'utente umano
2. creo la variabile _computerDiceRoll_ che dovrà generare un valore random per il computer
3. creo la variabile _playerRoll_ nella quale inserisco una stringa di ciò che avviene quando l'utente umano tira il dado, utilizzando _humanDiceRoll_
4. creo la variabile _computerRoll_ nella quale inserisco una stringa di ciò che avviene quando l'utente umano tira il dado, utilizzando _computerDiceRoll_
5. stampo in console la stringa _playerRoll_
6. stampo in console la stringa _computerRoll_
   - se il valore del tiro del dado del giocatore umano è maggiore di quello del computer, allora umano vince.
   - altrimenti, se il valore del tiro del dado del computer è maggiore di quello del giocatore umano, allora computer vince.
   - altrimenti, finisce in parità.

# JS Mail

1. creo un array contenente delle email fittizie
2. creo una variabile mail che chieda (_prompt_) all'utente di inserire la sua email
3. assegno una condizione booleana di default (_false_) che è la condizione standard quando l'utente non compila il campo email o l'email non è presente nell'array
4. creo un ciclo _for_, in modo che si confronti se la mail inserita col prompt dell'utente esista nel pool di email dell'array
   - _se_ c'é corrispondenza tra il valore inserito dall'utente e la mail dell'array, allora la condizione booleana diventa _true_
     - _se_ la condiziona booleana è diventata _true_, viene stampato il messaggio "benvenuto!"
     - _altrimenti_, viene stampato il messaggio "email non presente!"
