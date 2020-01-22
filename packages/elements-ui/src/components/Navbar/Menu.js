import React from "react"
import { Box } from "@theme-ui/components"

const Dropdown = ({ submenu }) => (
  <Box as="ul" variant="submenu">
    {submenu.map(i => (
      <li key={i.label}>
        <a href={i.path} target={i.newTab ? "_blank" : false}>
          {i.label}
        </a>
      </li>
    ))}
  </Box>
)

const Menu = ({ menuItems = [] }) => {
  return (
    <Box as="ul" variant="menu">
      {menuItems.map(({ label, path, newTab, submenu }) => (
        <li key={label}>
          {submenu !== null ? (
            <a href={path} target={newTab ? "_blank" : false}>
              {label}
            </a>
          ) : (
            <React.Fragment>
              <button>{path}Caret</button>
              <Dropdown submenu={submenu} />
            </React.Fragment>
          )}
        </li>
      ))}
    </Box>
  )
}

export default Menu