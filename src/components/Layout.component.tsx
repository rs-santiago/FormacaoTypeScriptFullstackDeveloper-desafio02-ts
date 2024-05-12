import { Footer } from "./Footer.component"
import { Header } from "./Header/Header.component"

interface ILayout {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => {
  return(
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
