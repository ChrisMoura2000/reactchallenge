import Header from "./page/Header";
import Main from "./page/Main";
import Footer from "./page/Footer";
import postAPI from "./services/newsletterAPI";

function App() {
  const teste = {
    name: "Chris",
    email: "email@valido.com",
  };
  postAPI(teste);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
