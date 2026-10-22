import MainContent from "@/components/core-components/MainContent";
import Sidebar from "@/components/core-components/Sidebar";
import Widgets from "@/components/core-components/Widgets";
import SignUpPrompt from "@/components/core-components/SignUpPrompt";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen max-w-360 w-full self-center bg-transparent">
        <Sidebar />
        <MainContent />
        <Widgets />
      </div>
      <SignUpPrompt />
    </>
  );
}
