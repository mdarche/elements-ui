/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import {
  Layout,
  Header,
  NavMenu,
  Main,
  Footer,
  MenuToggle,
  MobileNav,
} from "gatsby-theme-elements"
import { menuItems } from "../../utils/settings"

// - Your layouts will look cleaner without override props
// - See comments below

export default props => (
  <Layout>
    <Header>
      <div className="logo">Logo</div>
      <NavMenu>
        {menuItems.map(({ label, path }) => (
          <li key={label}>
            <Link sx={{ p: 3 }} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </NavMenu>
      <MenuToggle icon="menu" />
    </Header>
    <MobileNav defaultClose />
    <Main>
      <div>{props.children}</div>
    </Main>
    <Footer sx={{ textAlign: "center" }}>© 2019 mkdarshay</Footer>
  </Layout>
)
