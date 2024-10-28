import { useEffect } from "react";
import { characterService } from "../service/characterService";
<<<<<<< Updated upstream
import Navbar from "../Components/Navbar";
=======
import SearchForm from "../Components/SearchForm";
>>>>>>> Stashed changes

function HomePage() {
  const callData = async () => {
    const response = await characterService.charracterById(1344);
    console.log(response.data);
  };

  useEffect(() => {
    callData();
  }, []);
<<<<<<< Updated upstream

  return (
    <div>
      
      <Navbar />
    </div>
  );
=======
  return <div>
    <div>logo</div>
    <div className="search">
      <SearchForm />
    </div>
  </div>;
>>>>>>> Stashed changes
}

export default HomePage;
