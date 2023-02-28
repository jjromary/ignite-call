import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Container, Header } from "../styles";
import { IntervalBox, IntervalContainer, IntervalDay, IntervalInputs, IntervalItem } from "./styles";

export default function TimeIntervals() {
  
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá!!</Heading>
        <Text>
          Defina os intervalos de horário que você está disponivel em cada dia da semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
            <Checkbox />
            <Text>Segunda-Feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size='sm' type='time' step={60}/>
              <TextInput size='sm' type='time' step={60}/>
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
            <Checkbox />
            <Text>Sábado-Feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size='sm' type='time' step={60}/>
              <TextInput size='sm' type='time' step={60}/>
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>
      
      <Button type='submit'>Próximo passo <ArrowRight/></Button>
      </IntervalBox>
      
    </Container>
  );
}
