import "./App.css";
import Header from "./component/Header";
import HeaderContent from "./component/HeaderContent";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Sidebar />
        <>
          <div className="content">
            <HeaderContent />
            <MainContent />
          </div>
        </>
      </main>
    </Provider>
  );
}

export default App;
