import { Container, Image, Object, SVG, Text } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import CardMesh from "../objects/Card";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef, useMemo } from "react";
import Activity from "./Activity";

function Sidebar() {
  const mesh = useMemo(() => new CardMesh(3, 0.4), []);
  return (
    <Object
      object={mesh}
      width={100}
      color={colors.primary3}
      padding={6}
      marginLeft={8}
      depth={3}
      height="100%"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
    >
      <Image url="avatar.png" width={32} height={32} />
      <Text fontSize={8} color={colors.primary12} marginTop={4}>
        John Doe
      </Text>
      <Container flexDirection="row">
        <Icon url="calendar.svg" />
        <Icon url="notification.svg" />
        <Icon url="message.svg" />
      </Container>

      <Activity />
    </Object>
  );
}

interface IconProps extends ComponentPropsWithoutRef<typeof Container> {
  url: string;
  isActive?: boolean;
}
function Icon({ url, isActive, ...props }: IconProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <Container
      {...props}
      height={12}
      width={12}
      alignItems="center"
      justifyContent="center"
      borderRadius={6}
      backgroundOpacity={1}
      backgroundColor={colors.primary3}
      translateZ={isHovered ? 4 : 0}
      {...hoverProps}
    >
      <SVG url={url} height={6} width={6} color={colors.primary12} />
    </Container>
  );
}

export default Sidebar;
