import Navbar from "../component/navbar/Navbar"


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
  <div className="py-4">

    <Navbar/>
  </div>
    {children}
    </>
  )
}
