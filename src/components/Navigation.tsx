import { Container, Object, SVG, Text } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import CardMesh from "../objects/Card";
import RectMesh from "../objects/Rect";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef, useMemo } from "react";

function Navigation() {
  const mesh = useMemo(() => new CardMesh(3, 0.1), []);

  return (
    <Object
      color={colors.primary9}
      height="100%"
      object={mesh}
      depth={1}
      flexDirection="column"
      alignItems="center"
      padding={6}
      marginRight={8}
    >
      <Text opacity={1} translateZ={1} fontSize={8} color={colors.neutral12}>
        XR
      </Text>

      <Item url="home.svg" marginTop={20} isActive />
      <Item url="graph.svg" marginTop={5} />
      <Item url="bank.svg" marginTop={5} />
      <Item url="mail.svg" marginTop={5} />
      <Item url="entertainment.svg" marginTop={5} />
      <Item url="users.svg" marginTop={5} />
      <Item url="file.svg" marginTop={5} />
      <Item url="money.svg" marginTop={5} />

      <Item url="settings.svg" marginTop="auto" />
    </Object>
  );
}

interface ItemProps
  extends Omit<ComponentPropsWithoutRef<typeof Object>, "object"> {
  url: string;
  isActive?: boolean;
}
function Item({ url, isActive, ...props }: ItemProps) {
  const { isHovered, hoverProps } = useHover();

  const mesh = useMemo(() => new CardMesh(50, 1), []);

  return (
    <Object
      object={mesh}
      {...props}
      height={12}
      width={12}
      alignItems="center"
      justifyContent="center"
      color={isActive ? colors.neutral1 : colors.primary9}
      depth={isHovered ? 3 : isActive ? 2 : 1}
      {...hoverProps}
    >
      <SVG
        url={url}
        height={6}
        width={6}
        color={isActive ? colors.primary12 : colors.white}
      />
    </Object>
  );
}

export default Navigation;
