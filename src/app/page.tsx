import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex mt-10 gap-4 text-">
      <Button variant="destructive" size="lg">
        Click me
      </Button>
      <Button variant="primary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="muted">Click me</Button>
      <Button variant="teritary">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
    </div>
  );
}
