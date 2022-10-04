import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./Base/BaseLayout";
import { getRoutes } from "./route";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        {getRoutes()}
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
