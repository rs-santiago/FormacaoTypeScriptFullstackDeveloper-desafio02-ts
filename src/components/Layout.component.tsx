import { Footer } from "./Footer.component"
import { Header } from "./Header/Header.component"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
