/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { forwardRef } from 'react'

import { ErrorBoundary } from './Errors'
import { MakerProps, ResponsiveScale } from '../types'

interface SectionProps
  extends MakerProps,
    React.HTMLAttributes<HTMLDivElement> {
  background?: string | string[]
  bg?: string | string[]
  rootSx?: SxStyleProp
  maxWidth?: ResponsiveScale
  container?: boolean
}

/**
 * The `Section` component creates new content sections that support full-width
 * backgrounds with custom max-width inner content.
 *
 * @see https://maker-ui.com/docs/layout/section
 */

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      maxWidth,
      bg,
      background,
      color,
      container = true,
      variant,
      id,
      className,
      rootSx,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={className}
        sx={{ bg, background, color, variant, width: '100%', ...rootSx }}>
        <ErrorBoundary errorKey="section">
          {container ? (
            <div
              className="container"
              sx={{
                maxWidth: 'var(--maxWidth_section)',
                mx: 'auto',
                ...sx,
              }}
              {...props}
            />
          ) : (
            props.children
          )}
        </ErrorBoundary>
      </section>
    )
  }
)

Section.displayName = 'Section'
