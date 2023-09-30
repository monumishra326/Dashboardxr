import { Container, SVG, Text } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef } from "react";

const todos = [
  { icon: "money.svg", label: "Run payroll", date: "Mar 4, at 6:00 PM" },
  {
    icon: "clock.svg",
    label: "Review time off request",
    date: "Mar 7, at 6:00 PM"
  },
  {
    icon: "file.svg",
    label: "Sign board resolution",
    date: "Mar 12, at 6:00 PM"
  },
  {
    icon: "clipboard-check.svg",
    label: "Finish onboarding Tony",
    date: "Mar 12, at 6:00 PM"
  }
];

function Todos() {
  return (
    <Container flexDirection="column" width="100%" marginTop={12}>
      <Text fontSize={6} color={colors.primary12} marginBottom={4}>
        Your to-Do List
      </Text>
      {todos.map((todo, index) => (
        <Item {...todo} key={index} />
      ))}
    </Container>
  );
}

interface ItemProps extends ComponentPropsWithoutRef<typeof Container> {
  icon: string;
  label: string;
  date: string;
}

function Item({ icon, label, date, ...props }: ItemProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <Container
      {...props}
      flexDirection="row"
      alignItems="center"
      paddingY={3}
      translateZ={isHovered ? 8 : 0}
      {...hoverProps}
    >
      <Container
        height={14}
        width={14}
        alignItems="center"
        justifyContent="center"
        borderRadius={5}
        backgroundOpacity={1}
        backgroundColor={colors.primary5}
      >
        <SVG url={icon} height={6} width={6} color={colors.primary12} />
      </Container>
      <Container marginLeft={6}>
        <Text fontSize={4.5} color={colors.primary12}>
          {label}
        </Text>
        <Text fontSize={3.5} color={colors.neutral11}>
          {date}
        </Text>
      </Container>
    </Container>
  );
}

export default Todos;
