import { SignUp } from "@clerk/nextjs";
import { Card } from "@shadcn/ui";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </Card>
    </div>
  );
};

export default SignUpPage;
