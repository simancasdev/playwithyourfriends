import {Router} from "router";
import {Github} from "components";
import {Provider} from "context";

function App() {
  return (
    <Provider>
      <Github />
      <Router />
    </Provider>
  );
}

export default App;
