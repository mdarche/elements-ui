import * as React from 'react'
import { Carousel } from '@maker-ui/components'
import { Div } from 'maker-ui'
import { mount } from '@cypress/react'

interface BasicSlideProps {
  greeting?: string
  bg?: string
}

const basicData: BasicSlideProps[] = [
  { greeting: 'Hello!', bg: '#ff8787' },
  { greeting: 'Hola!', bg: '#aeaefe' },
  { greeting: 'Bonjour!', bg: '#aefec7' },
  { greeting: 'Ciao!', bg: '#e9a0e9' },
]

const BasicSlide = ({ greeting, bg }: BasicSlideProps) => (
  <Div
    css={{
      background: bg,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 36,
    }}>
    <p>{greeting}</p>
  </Div>
)

describe('Carousel component', () => {
  it.only('renders with default props', () => {
    mount(<Carousel data={basicData} template={<BasicSlide />} />)
  })

  it.only('can be controlled with an external React.useState hook', () => {
    mount(<ExternalDemo />)
  })
})

const ExternalDemo = () => {
  const [index, setIndex] = React.useState(0)
  return (
    <div>
      <Carousel
        data={basicData}
        template={<BasicSlide />}
        controls={[index, setIndex]}
      />
      <button onClick={() => setIndex(1)}>Slide 2</button>
      <button onClick={() => setIndex(3)}>Slide 4</button>
    </div>
  )
}
