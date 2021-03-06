import React from 'react'
import { useRouter } from 'next/router'
import {
  Layout as MakerLayout,
  Header,
  Navbar,
  SideNav,
  MobileMenu,
  Content,
  Main,
  Grid,
  Div,
} from 'maker-ui'

import { options } from '../config/options'
import { menu } from '../config/menus'
import { styles } from '../config/styles'
import { Search } from './Search'
import { Logo } from './Logo'
import { NavWidgets } from './NavWidgets'
import { PostNavigation } from './PostNavigation'
import { PageContents } from './PageContents'

const Layout = ({ children }) => {
  const { asPath } = useRouter()
  const isDocs = asPath.includes('docs')

  return (
    <MakerLayout options={options} styles={styles}>
      <Header>
        <Navbar
          logo={<Logo />}
          menuArea={<Search />}
          navArea={<NavWidgets />}
        />
        <MobileMenu menu={menu} />
      </Header>
      <Content>
        <SideNav pathname={asPath} menu={menu} />
        <Main>
          {isDocs ? (
            <Grid breakpoints={[1200]} columns={['1fr', '1fr 300px']} gap={60}>
              <Div css={{ overflow: 'hidden' }}>
                {children}
                <PostNavigation />
              </Div>
              <Div breakpoints={[1200]} css={{ display: ['none', 'block'] }}>
                <PageContents pathname={asPath} />
              </Div>
            </Grid>
          ) : (
            children
          )}
        </Main>
      </Content>
    </MakerLayout>
  )
}

export default Layout
