import { useEffect, useState } from "react";
import Card from "src/components/crypto-currency-page/Card";
import { CryptoResponse } from "src/components/crypto-currency-page/types";

function CryptoCurrencyPage() {
  const [socket, setSocket] = useState<WebSocket>();
  const [cryptoData, setCryptoData] = useState<CryptoResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket("wss://stream.binance.com:9443/stream");

    newSocket.onopen = () => {
      console.log("WebSocket connection established.");
      setLoading(false);
      // Subscribe to the stream when the connection is opened
      const subscribeRequest = {
        method: "SUBSCRIBE",
        params: ["!ticker@arr"],
      };
      newSocket.send(JSON.stringify(subscribeRequest));
    };

    newSocket.onmessage = (event) => {
      // Handle incoming messages from the WebSocket server
      const message = JSON.parse(event.data);
      // Received message:
      // Process the message here, update state, etc.

      // setCryptoData(message);
      setCryptoData(...([message] as const));
    };

    newSocket.onclose = () => {
      setError("WebSocket connection closed.");
      setLoading(false);
    };

    newSocket.onerror = () => {
      setError("WebSocket error occurred.");
      setLoading(false);
    };

    setSocket(newSocket);
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket) {
        newSocket.close();
      }
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {cryptoData?.data &&
        cryptoData?.data
          // .slice(0, 20)
          .map(({ c, s, P }) => <Card key={s} s={s} c={c} P={P} />)}
    </>
  );
}

export default CryptoCurrencyPage;
