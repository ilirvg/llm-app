import { Button } from "@cipher-bytes/design-system";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Hello from Home!</h1>
      <Button variant="destructive">Click me</Button>
    </div>
  );
}
