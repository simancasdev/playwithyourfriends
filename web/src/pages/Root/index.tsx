import {Provider} from "context";
import {Outlet} from "react-router-dom";
import {Github, Modal} from "components";
import {Layout} from "./styled";

interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  return (
    <Provider>
      <Layout>
        <Github />
        <Modal />
        {/* 💡 Here will be rendered all the children routes */}
        <Outlet />
      </Layout>
    </Provider>
  );
};
