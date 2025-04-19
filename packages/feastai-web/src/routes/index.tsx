import { Button } from "@cipher-bytes/design-system";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="p-4">
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </div>
  );
}
