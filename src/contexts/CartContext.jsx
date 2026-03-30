import { createContext, useState } from "react";

export const CardContext = createContext(null);

export function CardProvider({ children }) {
  const getstate = () => {
    const Cards = localStorage.getItem("cards");
    return Cards ? JSON.parse(Cards) : [];
  };
  const getDetails = () => {
    const details = localStorage.getItem("details");
    return details ? JSON.parse(details) : [];
  };

  const [card, setcard] = useState(getstate);
  const [detail, setdetail] = useState(getDetails);

  const addCard = (data) => {
    if (card.some((item) => item.id === data.id)) {
      setcard(
        card.map((item) =>
          item.id === data.id ? { ...data, count: (data.count += 1) } : item,
        ),
      );
    } else {
      setcard([...card, data]);
    }
  };
  const addDetails = (data) => {
      setdetail([data])
  };
 
  const incrementdetails = (data) => {
    setdetail(
      detail.map((item) =>
        item.id === data.id ? { ...data, count: (data.count += 1) } : item,
      ),
    );
  };
  const incrementCard = (data) => {
    setcard(
      card.map((item) =>
        item.id === data.id ? { ...data, count: (data.count += 1) } : item,
      ),
    );
  };
  const decrementdetails = (data) => {
    setdetail(
      detail.map((item) =>
        item.id === data.id
          ? { ...data, count: data.count !== 1 ? (data.count -= 1) : 1 }
          : item,
      ),
    );
  };
  const decrementCard = (data) => {
    setcard(
      card.map((item) =>
        item.id === data.id
          ? { ...data, count: data.count !== 1 ? (data.count -= 1) : 1 }
          : item,
      ),
    );
  };

  const deleteCard = (data) => {
    setcard(card.filter((item) => item.id !== data.id));
  };
  
  
  return (
    <CardContext.Provider
      value={{ card, detail,addCard, incrementCard, decrementCard, deleteCard ,addDetails,incrementdetails,decrementdetails}}
    >
      {children}
    </CardContext.Provider>
  );
}
