import * as React from 'react'
import { Div } from 'maker-ui'
import { Carousel } from '@maker-ui/components'
import { Global, css } from '@emotion/core'

// Example 1 - Basic
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
    sx={{
      background: bg,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 36,
      p: {
        opacity: 0,
        animation: 'fadeInUp ease .6s forwards .8s',
      },
    }}>
    <p>{greeting}</p>
  </Div>
)

// Example 2 - Image
interface ImageSlideProps {
  url?: string
  alt?: string
}
const imageData: ImageSlideProps[] = [
  {
    url:
      'https://images.unsplash.com/photo-1583369756546-bf4b94fca936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    alt: 'Bubbles',
  },
  {
    url:
      'https://images.unsplash.com/flagged/photo-1583453514618-fe0b696df629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'Roses',
  },
  {
    url:
      'https://images.unsplash.com/photo-1583443644841-520e6e5709c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'Ice',
  },
]

const ImageSlide = ({ url, alt }: ImageSlideProps) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    }}
  />
)

const data = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]

const CarouselPage = () => (
  <>
    <Global
      styles={css`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}
    />
    <Carousel data={basicData} template={<BasicSlide />} />
    <Carousel
      data={imageData}
      template={<ImageSlide />}
      settings={{ autoPlay: false }}
    />
  </>
)

export default CarouselPage
