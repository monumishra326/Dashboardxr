import { Container, Image, Text } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Card";

const emails = [
  {
    avatar: "hannah-morgan.png",
    name: "Hannah Morgan",
    subject: "Meeting scheduled",
    time: "1:24 PM"
  },
  {
    avatar: "megan-clark.png",
    name: "Megan Clark",
    subject: "Update on marketing campaign",
    time: "12:32 PM"
  },
  {
    avatar: "brandon-williams.png",
    name: "Brandon Williams",
    subject: "co-ui 2.0 is about to launch",
    time: "Yesterday at 8:57 PM"
  },
  {
    avatar: "reid-smith.png",
    name: "Reid Smith",
    subject: "My friend Julie loves WebXR!",
    time: "Yesterday at 8:49 PM"
  },
  {
    avatar: "stella-cook.png",
    name: "Stella Cook",
    subject: "My product recommendation",
    time: "Yesterday at 5:23 PM"
  }
];

function Emails() {
  return (
    <Card
      ratio={2}
      radius={4}
      flexGrow={1}
      marginLeft={4}
      flexDirection="column"
      hoverAnimation={false}
    >
      <Text fontSize={5} color={colors.primary12}>
        Emails
      </Text>
      {emails.map((email, index) => (
        <Row key={index} {...email} />
      ))}
    </Card>
  );
}

interface RowProps extends ComponentPropsWithoutRef<typeof Container> {
  avatar: string;
  name: string;
  subject: string;
  time: string;
}

function Row({ avatar, name, subject, time, ...props }: RowProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <Container
      {...props}
      {...hoverProps}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingY={3}
      translateZ={isHovered ? 6 : 0}
    >
      <Image url={avatar} height={12} width={12} borderRadius={6} />
      <Text fontSize={4} color={colors.neutral11} marginLeft={4} width={45}>
        {name}
      </Text>
      <Text fontSize={4} color={colors.neutral11} marginLeft={4} width={65}>
        {subject}
      </Text>
      <Text
        fontSize={4}
        color={colors.neutral11}
        marginLeft={4}
        width={45}
        horizontalAlign="right"
      >
        {time}
      </Text>
    </Container>
  );
}

export default Emails;
