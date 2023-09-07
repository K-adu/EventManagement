import SubmitForm from './Form/SubmitForm';
import ProfilePic from './Form/SubmitForm';
import UserInfo from './Form/UserInfo';
import UserWork from './Form/UserWork';
import { useSelector, useDispatch } from 'react-redux';
export default function Step() {
  let stepContent;
  const activeStepIndex = useSelector((state) => state.counter.value);
  console.log(activeStepIndex);
  switch (activeStepIndex) {
    case 0:
      stepContent = <UserInfo />;
      break;
    case 1:
      stepContent = <UserWork />;
      break;
    case 2:
      stepContent = <SubmitForm />;
      break;
  }
  return stepContent;
}
