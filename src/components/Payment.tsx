import { Box, SVG, Text } from "@coconut-xr/koestlich";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Card";

interface PaymentProps extends ComponentPropsWithoutRef<typeof Box> {
  icon: string;
  amount: string;
  label: string;
}

function Payment({ icon, amount, label, ...props }: PaymentProps) {
  return (
    <Card radius={10} ratio={1} {...props} height={48} flexGrow={1}>
      <SVG url={icon} width={10} height={10} color={colors.primary12} />
      <Text fontSize={6} marginTop="auto" color={colors.primary12}>
        {amount}
      </Text>
      <Text fontSize={4.5} marginTop={6} color={colors.primary12}>
        {label}
      </Text>
    </Card>
  );
}

export default Payment;
