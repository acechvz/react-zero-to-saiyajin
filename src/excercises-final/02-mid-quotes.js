import React, { useEffect, useReducer, useState } from "react";
import { v4 as id } from "uuid";

// Quotes mock data
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
    toggled: false,
  },
];

// Action types
const ACTION_TYPES = {
  ADD_QUOTE: "ADD_QUOTE",
  TOGGLE_QUOTE: "TOGGLE_QUOTE",
  IS_LOADING: "IS_LOADING",
  IS_LOADED: "IS_LOADED",
};

// Global state
const quotesInitialState = {
  quotes: [],
  loading: false,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_QUOTES:
      return {
        ...state,
        quotes: action.payload.quotes,
      };
    case ACTION_TYPES.ADD_QUOTE:
      return {
        ...state,
        quotes: [action.payload.quote, ...state.quotes],
      };
    case ACTION_TYPES.TOGGLE_QUOTE:
      const updatedQuotes = state.quotes.map((quote) => {
        if (quote.id === action.payload.id) {
          return { ...quote, toggled: !quote.toggled };
        }
        return quote;
      });

      return {
        ...state,
        quotes: updatedQuotes,
      };
    case ACTION_TYPES.IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.IS_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

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

const QuotesList = ({ quotes, onClick }) => {
  return (
    <div className="quotes-content">
      {quotes.length > 0
        ? quotes.map((quote) => <Quote item={quote} onClick={onClick} />)
        : "No quotes to show"}
    </div>
  );
};

const withLoading = (Component) => ({ loading, ...props }) => {
  if (loading) return "Loading ...";

  return <Component {...props} />;
};

const QuotesListWithLoading = withLoading(QuotesList);

function Quotes() {
  const [state, dispatch] = useReducer(reducer, quotesInitialState);
  const [newQuote, setNewQuote] = useState("");
  const { quotes, loading } = state;

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.IS_LOADING });

    const timeout = setTimeout(() => {
      // Simulate async request
      dispatch({
        type: ACTION_TYPES.SET_QUOTES,
        payload: { quotes: quotesMock },
      });
      dispatch({ type: ACTION_TYPES.IS_LOADED });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleQuoteChange = (e) => {
    setNewQuote(e.target.value);
  };

  const handleQuoteAdd = () => {
    if (!newQuote) return;

    const quote = {
      id: id(),
      title: newQuote,
      toggled: false,
    };

    dispatch({ type: ACTION_TYPES.ADD_QUOTE, payload: { quote } });
    setNewQuote("");
  };

  const handleQuoteToggle = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_QUOTE, payload: { id } });
  };

  return (
    <div className="quotes-container">
      <div>
        <h3>My Quotes</h3>
        <div className="quotes-form">
          <input type="text" onChange={handleQuoteChange} value={newQuote} />
          <button onClick={handleQuoteAdd}>Add</button>
        </div>
        <QuotesListWithLoading
          loading={loading}
          quotes={quotes}
          onClick={handleQuoteToggle}
        />
      </div>
    </div>
  );
}

export default Quotes;
