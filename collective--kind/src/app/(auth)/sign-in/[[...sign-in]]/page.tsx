import { SignIn } from "@clerk/nextjs";
import { Card } from "@shadcn/ui";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </Card>
    </div>
  );
};

export default SignInPage;
