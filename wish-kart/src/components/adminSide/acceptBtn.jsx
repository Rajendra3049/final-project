import { Td, Box } from "@chakra-ui/react";
import React from "react";
export default function AcceptOrderButton() {
  const [ready, setReady] = React.useState(false);
  return (
    <>
      <Box
        w={"25%"}
        textAlign={"center"}
        fontWeight={"600"}
        textColor={ready ? "green" : "red"}
        onClick={() => {
          setReady(true);
        }}
        cursor="pointer">
        {ready ? "Dispatched" : "Ready to Dispatch"}
      </Box>
    </>
  );
}
