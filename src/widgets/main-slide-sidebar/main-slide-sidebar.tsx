import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import SlideButton from "@/features/slide-button/slide-button";
import { mockSidebarSlides } from "@/lib/mocks";
import Header1 from "@/shared/headers/header1";

function MainSlideSidebar() {
  const { state } = useSidebar();
  const [activeSlide, setActiveSlide] = React.useState<string>("nsaj665bsa");

  return (
    <div className="relative">
      <Sidebar collapsible="icon" className="h-fit rounded-lg">
        <SidebarHeader>
          <Header1>Слайды</Header1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {mockSidebarSlides.map((slide) => (
              <SidebarMenuItem key={slide.order}>
                <SidebarMenuButton asChild>
                  <SlideButton
                    state={state}
                    slide={slide}
                    onClick={() => setActiveSlide(slide.id)}
                    isActive={slide.id === activeSlide}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger className="absolute top-3 right-0 translate-x-1/2" />
    </div>
  );
}

export default MainSlideSidebar;
