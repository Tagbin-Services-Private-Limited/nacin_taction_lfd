import React, { useState, useEffect } from "react"
import { Box } from "@mui/material";
import Bg1 from "./assets/images/first.png"
import Bg2 from "./assets/images/second.png"
import biomedical_and_healthcare_wastes from "./assets/images/biomedical_and_healthcare_wastes.jpg"
import used_oils from "./assets/images/used_oils.jpg"
import used_lead_acid_batteries from "./assets/images/used_lead_acid_batteries.jpg"
import persistent_organic_pollutant_wastes from "./assets/images/persistent_organic_pollutant_wastes.jpg"
import polychlorinated_biphenyls from "./assets/images/polychlorinated_biphenyls.jpg"
import electronic_and_electrical_waste from "./assets/images/electronic_and_electrical_waste.jpg"
import plastic_waste from "./assets/images/plastic_waste.jpg"
import ship_destined_for_dismantling from "./assets/images/ship_destined_for_dismantling.jpg"
import mercury_and_asbestos_waste from "./assets/images/mercury_and_asbestos_waste.jpg"
import chlorofluorocarbon from "./assets/images/chlorofluorocarbon.jpg"
import hydrochlorofluorocarbon from "./assets/images/hydrochlorofluorocarbon.jpg"
import hydrofluorocarbon from "./assets/images/hydrofluorocarbon.jpg"
import halons from "./assets/images/halons.jpg"
import carbon_tetrachloride from "./assets/images/carbon_tetrachloride.jpg"
import methyl_bromide from "./assets/images/methyl_bromide.jpg"
import gorilla from "./assets/images/gorilla.jpg"
import sea_turtle from "./assets/images/sea_turtles.jpg"
import giant_panda from "./assets/images/giant_panda.jpg"
import lion_indian from "./assets/images/lion_indian.jpg"
import pangolin from "./assets/images/pangolin.jpg"
import walrus from "./assets/images/walrus.jpg"
import smooth_coated_otter from "./assets/images/smooth_coated_otter.jpg"
import indian_star_tortoise from "./assets/images/indian_star_tortoise.jpg"
import small_clawed_otter from "./assets/images/small_clawed_otter.jpg"
import paddlefish from "./assets/images/paddlefish.jpg"
import lion_african from "./assets/images/lion_african.jpg"
import owl from "./assets/images/owl.jpg"
import american_alligator from "./assets/images/american_alligator.jpg"
import corals from "./assets/images/corals.jpg"
import map_turtles from "./assets/images/map_turtles.jpg"
import cape_stag_beetle from "./assets/images/cape_stag_battle.jpg"

const eventImageMap = {
  "start": Bg2,
  "reset": Bg1,
  "basel_convention": biomedical_and_healthcare_wastes,
  "biomedical_and_healthcare_wastes": biomedical_and_healthcare_wastes,
  "used_oils": used_oils,
  "used_lead_acid_batteries": used_lead_acid_batteries,
  "persistent_organic_pollutant_wastes": persistent_organic_pollutant_wastes,
  "polychlorinated_biphenyls": polychlorinated_biphenyls,
  "electronic_and_electrical_waste": electronic_and_electrical_waste,
  "plastic_waste": plastic_waste,
  "ship_destined_for_dismantling": ship_destined_for_dismantling,
  "mercury_and_asbestos_waste": mercury_and_asbestos_waste,
  "montreal_protocol": chlorofluorocarbon,
  "chlorofluorocarbon": chlorofluorocarbon,
  'hydrochlorofluorocarbon': hydrochlorofluorocarbon,
  'hydrofluorocarbon': hydrofluorocarbon,
  'halons': halons,
  'carbon_tetrachloride': carbon_tetrachloride,
  'methyl_bromide': methyl_bromide,
  'gorilla': gorilla,
  'sea_turtle': sea_turtle,
  'giant_panda': giant_panda,
  'lion-indian': lion_indian,
  'pangolin': pangolin,
  'walrus': walrus,
  'smooth_coated_otter': smooth_coated_otter,
  'indian_star_tortoise': indian_star_tortoise,
  'small_clawed_otter': small_clawed_otter,
  'paddlefish': paddlefish,
  'lion-african': lion_african,
  'owl': owl,
  'american_alligator': american_alligator,
  'corals': corals,
  'map_turtles': map_turtles,
  'cape_stag_beetle': cape_stag_beetle,
}

const App = () => {
  const [event, setEvent] = useState(undefined)

  useEffect(() => {
    if (window.require) {
      const { ipcRenderer } = window.require("electron");
      ipcRenderer.on("socket-data", (event, data) => {
        setEvent(data["event-clicked"])
      });
      return () => {
        ipcRenderer.removeAllListeners("socket-data");
      };
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img src={eventImageMap[event] || Bg1} alt="bg" />
    </Box >
  );
}

export default App;
