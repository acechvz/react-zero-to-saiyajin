import React, { useEffect, useState } from "react";
import { v4 as id } from "uuid";

// Think as if we were expecting this data from an API
const quotesMock = [
  {
    id: 1,
    title: "React inspires me",
    toggled: false,
  },
  {
    id: 2,
    title: "Coding is sweet",
    toggled: false,
  },
  {
    id: 3,
    title: "Keep learning boys",
    toggled: true,
  },
];

const Quote = ({ item, onClick }) => {
  const { id, title, toggled } = item;
  return (
    <div
      className={`quotes-item ${toggled ? "toggled" : ""}`}
      onClick={() => onClick(id)}
    >
      <h4>{title}</h4>
    </div>
  );
};

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState("");
  // Add a new state and make to name `loading` the value returned by the `useState` hook.
  // 📝 Initialize our `loading` state to be false.
  // 💰 const [myValue, setMyValue] = useState([INITIAL_VALUE]);

  useEffect(() => {
    // Cool, we are waiting 3 seconds before getting the quotes data from our fake request
    // 📝 Set our `loading` state to true outside the setTimeout function
    const timeout = setTimeout(() => {
      setQuotes(quotesMock);
      // Nice!, now we have our quotes data assigned to our `quotes` state
      // 📝 Set our `loading` state to false, now we have information to show to our users!
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleQuoteChange = (e) => {
    setNewQuote(e.target.value);
  };

  const handleQuoteAdd = () => {
    // 📝 Don't allow users to register empty quotes
    // You should check if `newQUote`

    const quote = {
      id: id(),
      title: newQuote,
      toggled: false,
    };

    setQuotes([quote, ...quotes]);
    // Looks good!, our ability to add a new quote seems to be working fine
    // but our input is keeping the text even when we added our new `quote`.

    // 📝 Set our `newQuote` state to an empty string ``
    // in this way we are cleaning our input to receive another sweet `quote`
  };

  const handleQuoteToggle = (id) => {
    const updatedQuotes = quotes.map((quote) => {
      if (quote.id === id) quote.toggled = !quote.toggled;
      return quote;
    });

    setQuotes(updatedQuotes);
  };

  // Having a variable to hold some logic is ok, but sometimes we can make use of a component to have more control over our code
  // 📝 Create a new component called `QuotesList` and return the logic of the `quotesList` variable.
  const quotesList =
    quotes.length > 0
      ? quotes.map((quote) => (
          <Quote item={quote} onClick={handleQuoteToggle} />
        ))
      : "No quotes to show";

  return (
    <div className="quotes-container">
      <div>
        <h3>My Quotes</h3>
        <div className="quotes-form">
          <input type="text" onChange={handleQuoteChange} value={newQuote} />
          <button onClick={handleQuoteAdd}>Add</button>
        </div>
        {/*
          Show time!, let's think about the scenario were we don't have quotes to show yet ...
          Looks weird right?, as we initialized `quotes` to an empty array the users are not going to see anything
          📝 Make use of your `loading` state to achieve the following:
            - If `loading` is set to true show a `Loading ...` text
            - If `loading` is set to false then we can show our quotes
          💰 Remember that we can't use explicit `if/else` conditions inside JSX, use ternary operators instead `condition ? true : false`
         */}
        <div className="quotes-content">{quotesList}</div>
      </div>
    </div>
  );
}

export default Quotes;
