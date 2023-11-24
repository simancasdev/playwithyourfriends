import {Players} from "./lib";
import {Layout, Header} from "./styled";
import {Challenge, Host} from "components";

interface RoomProps {}

export const Room: React.FC<RoomProps> = () => {
  return (
    <Layout>
      <Header>
        <Host />
      </Header>
      <Challenge />
      <Players
        players={[
          {name: "Hector"},
          {name: "Luis"},
          {name: "Elena"},
          {name: "Hector"},
          {name: "Hector"},
          {name: "Luis"},
          {name: "Elena"},
          {name: "Hector"},
        ]}
      />
    </Layout>
  );
};
