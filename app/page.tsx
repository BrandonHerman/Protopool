import MainDashboard from "./MainDashboard";
import QueryTester from "./components/QueryTester/QueryTester";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainDashboard/>
      <QueryTester/>
    </main>
  );
}
