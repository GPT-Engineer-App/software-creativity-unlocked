import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">
            The last piece of software.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center">
            We’re building software that builds software. Our vision is to unlock human creativity— by enabling anyone to create software.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;