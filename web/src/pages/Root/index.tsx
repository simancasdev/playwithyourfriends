import {Provider} from "context";
import {Outlet} from "react-router-dom";
import {Github, Modal} from "components";

interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  return (
    <Provider>
      <Github />
      <Modal />
      {/* 💡 Here will be rendered all the children routes */}
      <Outlet />
    </Provider>
  );
};
