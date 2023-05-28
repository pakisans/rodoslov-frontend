import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./Base/AuthWrapper";
import BaseLayout from "./Base/BaseLayout";
import NotificationActionWrapper from "./Base/NotificationActionWrapper";
import { getRoutes } from "./route";

const App = () => {
  return (
    <BrowserRouter>
      <NotificationActionWrapper>
        <AuthWrapper>
          <BaseLayout>
            {getRoutes()}
          </BaseLayout>
        </AuthWrapper>
      </NotificationActionWrapper>
    </BrowserRouter>
  );
}

export default App;
