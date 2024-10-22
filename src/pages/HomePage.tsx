import { useEffect } from "react";
import { characterService } from "../service/characterService";

function HomePage() {
  const callData = async () => {
    const response = await characterService.charracterById(1344);
    console.log(response.data);
  };

  useEffect(() => {
    callData();
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
