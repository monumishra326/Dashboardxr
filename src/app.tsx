import {
  clippingEvents,
  Container,
  FontFamilyProvider,
  RootObject,
  Text
} from "@coconut-xr/koestlich";
import Emails from "./components/Emails";
import Navigation from "./components/Navigation";
import Payment from "./components/Payment";
import Sidebar from "./components/Sidebar";
import Stat from "./components/Stat";
import RectMesh from "./objects/Rect";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import colors from "./theme/colors";
import { formatCurrency } from "./utils/format";
import { useMemo, useRef } from "react";
import { loadYoga } from "@coconut-xr/flex";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";

function App(): JSX.Element {
  const mesh = useMemo(() => new RectMesh(), []);
  return (
    <Canvas
      events={clippingEvents}
      shadows
      camera={{ position: [210, -130, 320] }}
      dpr={window.devicePixelRatio}
      gl={{ logarithmicDepthBuffer: true, localClippingEnabled: true }}
    >
      <EffectComposer>
        <N8AO intensity={3} />
      </EffectComposer>
      <OrbitControls target={[210, -130, 0]} />

      <color attach="background" args={[0x161618]} />
      <ambientLight intensity={0.8} />
      <pointLight
        position={[200, 200, 400]}
        intensity={0.5}
        castShadow
        shadow-camera-far={10000}
        shadow-camera-near={1}
        shadow-mapSize={2048}
      />

      <RootObject
        loadYoga={loadYoga}
        object={mesh}
        color={colors.neutral7}
        width={420}
        height={270}
        translateX={-240}
        translateY={135}
        depth={2}
        flexDirection="row"
        padding={8}
        precision={0.5}
      >
        <Navigation />
        <Container flexGrow={1}>
          <Text fontSize={8} color={colors.primary12}>
            Good morning, John!
          </Text>

          <Container flexDirection="row" marginTop={8}>
            <Payment
              icon="bank.svg"
              amount={formatCurrency(143624)}
              label="Your bank balance"
            />
            <Payment
              icon="graph.svg"
              amount={formatCurrency(2383)}
              label="This weeks revenue"
              marginLeft={4}
            />
            <Payment
              icon="users.svg"
              amount="7"
              label="Employees working today"
              marginLeft={4}
            />
            <Payment
              icon="wallet.svg"
              amount={formatCurrency(3287.49)}
              label="This weeks card spendings"
              marginLeft={4}
            />
          </Container>

          <Container marginTop={12} flexDirection="row">
            <Container flexDirection="column">
              <Stat
                radius={10}
                ratio={1}
                label="Sales"
                amount={152}
                delta={0.051}
                status="success"
              />
              <Stat
                radius={10}
                ratio={1}
                label="New Clients"
                amount={12}
                delta={-0.178}
                status="danger"
                marginTop={4}
              />
              <Stat
                radius={10}
                ratio={1}
                label="Invoices overdue"
                amount={6}
                delta={-0.027}
                status="success"
                marginTop={4}
              />
            </Container>

            <Emails />
          </Container>
        </Container>
        <Sidebar />
      </RootObject>
    </Canvas>
  );
}

export default App;
