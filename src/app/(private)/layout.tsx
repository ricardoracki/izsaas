import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Header } from '@/components/header'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="h-screen w-screen flex">
        <aside className="h-full pt-14 w-0 lg:w-48 border-r border-grid transition-all ease-in-out overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden"></aside>
        <div className="w-full pt-20 px-14 overflow-auto py-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <main className="w-full max-w-4xl overflow-hidden pb-12">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
