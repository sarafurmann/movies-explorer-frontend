import { Promo } from 'src/components/Promo'
import { NavTab } from 'src/components/NavTab'
import { AboutProject } from 'src/components/AboutProject'
import { Techs } from 'src/components/Techs'
import { AboutMe } from 'src/components/AboutMe'
import { Portfolio } from 'src/components/Portfolio'

export const Main = () => {
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}
