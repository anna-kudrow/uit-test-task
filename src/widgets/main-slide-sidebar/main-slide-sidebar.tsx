import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header1 from "@/shared/headers/header1";

function MainSlideSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Header1>Слайды</Header1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}

export default MainSlideSidebar;
