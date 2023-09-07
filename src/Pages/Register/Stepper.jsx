import { Step, StepLabel, Stepper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
export default function MaterialStepper() {
  const activeStepIndex = useSelector((state) => state.counter.value);
  return (
    <>
      <Stepper activeStep={activeStepIndex}>
        <Step>
          <StepLabel>Basic Info</StepLabel>
        </Step>

        <Step>
          <StepLabel>Working Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Submit</StepLabel>
        </Step>
      </Stepper>
    </>
  );
}
