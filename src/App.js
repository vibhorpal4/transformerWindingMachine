import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/HOC/NavBar/NavBar";
import MachineUserSelection from "./pages/MachineUserSelection/MachineUserSelection";
import MachineOperation from "./pages/MachineOperation/MachineOperation";
import MachineConfiguration from "./pages/MachineConfiguration/MachineConfiguration";
import MachineOperatorInstructions from "./pages/MachineOperatorInstructions/MachineOperatorInstructions";
import MachineStatus from "./pages/MachineStatus/MachineStatus";
import MachineWindingParametersPage1 from "./pages/MachineWindingParametersPage1/MachineWindingParametersPage1";
import MachineWindingParametersPage2 from "./pages/MachineWindingParametersPage2/MachineWindingParametersPage2";
import SplashScreen from "./pages/SplashScreen/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  return (
    <>
      {showSplash === true ? (
        <SplashScreen />
      ) : (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<MachineUserSelection />} />
            <Route path="/machine-operation" element={<MachineOperation />} />
            <Route
              path="/machine-configuration"
              element={<MachineConfiguration />}
            />
            <Route path="/machine-status" element={<MachineStatus />} />

            <Route
              path="/machine-operator-instructions"
              element={<MachineOperatorInstructions />}
            />
            <Route
              path="/machine-winding-parameters-1"
              element={<MachineWindingParametersPage1 />}
            />
            <Route
              path="/machine-winding-parameters-2"
              element={<MachineWindingParametersPage2 />}
            />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
