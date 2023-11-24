import {CSSProperties} from "react";
import {Container, Image, Name} from "./styled";

interface AvatarProps {
  name: string;
  size?: number;
  nameStyle?: CSSProperties;
}

export const Avatar: React.FC<AvatarProps> = ({name, nameStyle, size = 50}) => {
  return (
    <Container>
      <Image
        style={{width: size, height: size}}
        src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`}
      />
      <Name style={nameStyle}>{name}</Name>
    </Container>
  );
};
