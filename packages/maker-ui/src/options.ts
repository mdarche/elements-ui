import { MakerOptions } from './components/types'

export const defaultOptions: MakerOptions = {
  navType: 'basic',
  layout: 'content',
  topbar: {
    maxWidth: 1260,
    hideOnMobile: false,
    breakIndex: 0,
  },
  header: {
    maxWidth: 1460,
    sticky: false,
    stickyOnMobile: false,
    stickyUpScroll: false,
    scroll: {
      toggleClass: false,
      scrollTop: 200,
      className: 'sticky',
    },
    hideColorButtonOnMobile: false,
    hideWidgetsOnMobile: true,
    dropdown: {
      caret: true,
      transition: 'fade',
    },
    breakIndex: 0,
  },
  mobileMenu: {
    width: '60vw',
    transition: 'slide-left',
    visibleOnDesktop: false,
    defaultCloseButton: false,
    closeOnBlur: true,
    closeOnRouteChange: false,
  },
  sideNav: {
    width: 300,
    isHeader: false,
    isPrimaryMobileNav: false,
    floatingToggle: true,
    closeOnBlur: true,
    closeOnRouteChange: true,
    breakIndex: 0,
  },
  content: {
    maxWidth: 1020,
    maxWidthSection: 1020,
    sidebarGap: 30,
    breakIndex: 0,
  },
  sidebar: {
    width: 300,
  },
  footer: {
    maxWidth: 1020,
  },
  a11y: {
    skiplinks: true,
  },
  errors: {
    showStackTrace: false,
  },
}
