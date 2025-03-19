import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = () => {
  //check if the user is already onboarded

  return (
    <main>
      <OnboardingForm industries={industries}></OnboardingForm>
    </main>
  );
};

export default OnboardingPage;
