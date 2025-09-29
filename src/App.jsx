import { Presentation } from "./components/Presentation";

export default function App() {
  return (
    // 1. Use h-screen and w-screen to fill the viewport.
    // 2. Use flex to center the child component.
    // 3. Use p-[5px] to create the 5px margin.
    <div className="h-screen w-screen bg-gray-900 p-[5px] flex items-center justify-center">
      <Presentation />
    </div>
  );
}