import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import calendarImage from '../../assets/calendar.png'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size='4xl'>
          Agendamento descomplicado
        </Heading>
        <Text size='lg'>
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={calendarImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />

      </Preview>
    </Container>
  )
}
