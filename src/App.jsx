import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./Base/AuthWrapper";
import BaseLayout from "./Base/BaseLayout";
import { getRoutes } from "./route";

const App = () => {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <BaseLayout>
          {getRoutes()}
        </BaseLayout>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
