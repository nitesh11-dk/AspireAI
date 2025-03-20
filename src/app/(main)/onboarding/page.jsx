import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "../../../../actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  //check if the user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries}></OnboardingForm>
    </main>
  );
};

export default OnboardingPage;
