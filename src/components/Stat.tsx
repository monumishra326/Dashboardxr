import { Container, Text } from "@coconut-xr/koestlich";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Card";

const { format } = Intl.NumberFormat("en-EN", {
  style: "percent",
  signDisplay: "exceptZero",
  minimumFractionDigits: 1
});

interface StatProps extends ComponentPropsWithoutRef<typeof Card> {
  label: string;
  amount: number;
  delta: number;
  status: "success" | "danger";
}

function Stat({ label, amount, status, delta, ...props }: StatProps) {
  return (
    <Card radius={10} ratio={1.5} {...props} flexDirection="column">
      <Text fontSize={5} color={colors.primary12}>
        {label}
      </Text>
      <Container flexDirection="row" alignItems="center">
        <Text fontSize={12} color={colors.primary12}>
          {amount.toString()}
        </Text>
        <Text
          fontSize={4}
          marginLeft="auto"
          color={status === "success" ? colors.success9 : colors.danger9}
          backgroundColor={
            status === "success" ? colors.success4 : colors.danger4
          }
          backgroundOpacity={1}
          paddingX={2}
          paddingBottom={1}
          borderRadius={2}
        >
          {format(delta)}
        </Text>
      </Container>
    </Card>
  );
}

export default Stat;
