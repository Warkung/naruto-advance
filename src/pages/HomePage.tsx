import { useEffect } from "react";
import { characterService } from "../service/characterService";
import Navbar from "../Components/Navbar";

function HomePage() {
  const callData = async () => {
    const response = await characterService.charracterById(1344);
    console.log(response.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div>
      
      <Navbar />
    </div>
  );
}

export default HomePage;
