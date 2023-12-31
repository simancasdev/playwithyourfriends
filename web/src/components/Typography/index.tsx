import {Text} from "./styled";
import {Children} from "interfaces";
import {CSSProperties} from "react";

type TypographyVariant = "title" | "subtitle" | "regular";

const stylesByVariant: {[V in TypographyVariant]: CSSProperties} = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  regular: {
    fontSize: 16,
  },
};

interface TypographyProps extends Children<any> {
  variant?: TypographyVariant;
  style?: CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "regular",
  style,
}) => {
  return (
    <Text
      style={{
        ...stylesByVariant[variant],
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
