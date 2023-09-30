import { Container, Object } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import CardMesh from "../objects/Card";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef, useMemo } from "react";

interface CardProps extends ComponentPropsWithoutRef<typeof Container> {
  hoverAnimation?: boolean;
  ratio: number;
  radius: number;
}

function Card({ hoverAnimation = true, radius, ratio, ...props }: CardProps) {
  const { isHovered, hoverProps } = useHover();

  const mesh = useMemo(() => new CardMesh(radius, ratio), [ratio, radius]);

  return (
    <Object
      {...props}
      {...hoverProps}
      object={mesh}
      padding={6}
      depth={2}
      translateZ={isHovered && hoverAnimation ? 4 : 0}
      color={colors.white}
    />
  );
}

export default Card;
