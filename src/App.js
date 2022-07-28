import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Hartie Igienica",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Tv cu diagonala sa moara dujmani de ciuda", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Asigurare la Cazan",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Birou Fulger Mcqueen",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default App;
