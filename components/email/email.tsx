import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img, 
  Tailwind
} from '@react-email/components';
import * as React from 'react';


interface ContatoEmailProps {
  nome: string;
  email: string;
  mensagem: string;
}

export function ContatoEmail({ nome, email, mensagem }: ContatoEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem recebida de {nome} pelo site.</Preview>

      <Tailwind>
        <Body className="bg-[#f4f4f5] font-sans py-10">
          <Container className="bg-white border border-[#e5e7eb] rounded-2xl p-8 mx-auto max-w-xl shadow-sm">

            <Section className="text-center mb-8">

              <Img
                src="https://next-desafio-2026-2-l7ns.vercel.app/Logo1.svg"
                alt="Logo Castilhos"
                width={200}
                height={80}
                className="mx-auto"
              />
            </Section>

            <Heading className="text-2xl text-[#ba7d82] text-center font-normal mb-6">
              Novo Contato Recebido
            </Heading>

            <Hr className="border-[#e5e7eb] my-6" />

            <Section>
              <Text className="text-[#374151] text-base mb-2">
                <strong>Nome:</strong> {nome}
              </Text>
              <Text className="text-[#374151] text-base mb-4">
                <strong>E-mail:</strong> {email}
              </Text>

              <Text className="text-[#374151] text-base mb-2">
                <strong>Mensagem:</strong>
              </Text>

              <Text className="bg-[#faf9f9] p-5 rounded-xl text-[#4b5563] text-sm border border-[#e5e7eb] italic">
                "{mensagem}"
              </Text>
            </Section>

            <Hr className="border-[#e5e7eb] mt-8 mb-6" />

            <Text className="text-[#9ca3af] text-xs text-center">
              Este e-mail foi enviado automaticamente pelo formulário de contato do site Castilhos BeCare.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}