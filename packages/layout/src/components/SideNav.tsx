/** @jsx jsx */
import { jsx, MakerProps } from '@maker-ui/css'
import { Button } from '@maker-ui/primitives'

import { MakerOptions } from '../types'
import { ErrorBoundary } from './Errors/ErrorBoundary'
import { MenuItemProps } from './Menu'

import { CollapsibleMenu } from './Menu'
import { Overlay } from './Overlay'
import { useOptions } from '../context/OptionContext'
import { useSideNav } from '../context/ActionContext'
import { setBreakpoint, mergeSelectors } from '../utils/helper'

interface ContainerProps {
  isHeader: boolean
  [key: string]: any
}

const Container = ({ isHeader, ...props }: ContainerProps) =>
  isHeader ? <header {...props} /> : <div {...props} />

export interface SideNavProps
  extends MakerProps,
    React.HTMLAttributes<HTMLDivElement> {
  background?: string | string[]
  _css?: MakerProps['css']
  toggleButton?: MakerOptions['sideNav']['toggleButton']
  menu?: MenuItemProps[]
  pathname?: string
  header?: React.ReactElement
  footer?: React.ReactElement
}

/**
 * The `SideNav` component creates a side navigation panel alongside the page's main
 * content. It can be toggled open or closed on mobile or it can serve as the page's
 * primary <header> tag.
 *
 * @link https://maker-ui.com/docs/layout/sidenav
 */

export const SideNav = ({
  id,
  background = 'var(--color-bg_sideNav)',
  toggleButton,
  menu,
  pathname,
  header,
  footer,
  className,
  _css,
  css,
  children,
  ...props
}: SideNavProps) => {
  const [active, setActive] = useSideNav()
  const { sideNav, breakpoints } = useOptions()

  const customButton = toggleButton || sideNav.toggleButton

  const toggleAttributes = {
    id: 'toggle-sidenav',
    title: 'Toggle side navigation',
    'aria-label': 'Toggle side navigation',
    onClick: setActive,
    breakpoints: setBreakpoint(sideNav.breakpoint, breakpoints),
  }

  return (
    <ErrorBoundary errorKey="sideNav">
      {sideNav.closeOnBlur ? (
        <Overlay show={active} toggle={setActive} />
      ) : null}
      <Container
        isHeader={sideNav.isHeader}
        id={mergeSelectors(['sidenav', id])}
        className={mergeSelectors([!active ? 'hide' : '', className])}
        css={{
          background,
          ...(_css as object),
        }}
        {...props}>
        <div className="container" css={css}>
          {header ? header : null}
          {children ? children : null}
          {menu ? (
            <CollapsibleMenu
              menu={menu}
              menuType="sideNav"
              pathname={pathname}
            />
          ) : null}
          {footer ? footer : null}
        </div>
      </Container>
      {typeof customButton === 'function' ? (
        customButton(active, toggleAttributes)
      ) : sideNav.showToggleOnMobile ? (
        <Button
          {...toggleAttributes}
          css={{
            position: 'fixed',
            display: ['inline-block', 'none'],
            bottom: 30,
            zIndex: 100,
          }}>
          {customButton === 'default'
            ? active
              ? 'close'
              : 'open'
            : customButton}
        </Button>
      ) : null}
    </ErrorBoundary>
  )
}

SideNav.displayName = 'SideNav'
