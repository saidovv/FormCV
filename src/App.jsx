import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Switcher from "./components/swithcer/Switcher";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Personal from "./components/steps/Personal";
import Work from "./components/steps/Work";
import Education from "./components/steps/Education";
import Skills from "./components/steps/Skills";
import Final from "./components/steps/Final";
import { useForm } from "react-hook-form";

function App() {
  const { watch } = useForm();
  useEffect(() => {
    watch((value, { name, type }) => {
      console.log("value: " + value);
      console.log("name: " + name);
      console.log("type: " + type);
    });
  });
  // TRANSLATE
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const { register, handleSubmit, getValues } = useForm();

  const steps = [
    "Personal information",
    "Work experience",
    "Education",
    "Skills",
    "Final",
  ];

  const displayStep = (step, register, handleSubmit) => {
    switch (step) {
      case 1:
        return <Personal register={register} />;
      case 2:
        return <Work register={register} />;
      case 3:
        return <Education register={register} />;
      case 4:
        return <Skills register={register} />;
      case 5:
        return (
          <Final
            register={register}
            handleSubmit={handleSubmit}
            getValues={getValues}
          />
        );
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="App bg-[white] dark:bg-[#111827] duration-500">
      <div className="mx-auto pt-[10px] bg-[white] dark:bg-[#111827] duration-500">
        <div className="flex justify-center gap-2">
          <select
            className="h-[30px] mt-[20px] bg-[#e9e9ff] rounded-lg"
            value={lng}
            onChange={handleChange}
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <Switcher />
        </div>
      </div>

      <div>
        <div className="w-[80%] mx-auto">
          <Stepper steps={steps} currentStep={currentStep} />

          {/* DISPLAY COMPONENTS */}
          <div className="pt-10">
            <form
              onSubmit={handleSubmit((datas) => {
                console.log(datas);
              })}
            >
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displayStep(currentStep, register, handleSubmit)}
              </StepperContext.Provider>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
