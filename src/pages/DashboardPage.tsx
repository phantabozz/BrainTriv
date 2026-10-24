import { AppSidebar } from '@/components/AppSidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'


export function DashboardPage() {

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />

           {/** temp chart: remove later */}
          <ChartAreaInteractive />


        </SidebarInset>
      </SidebarProvider>
      
    </>
  )
}