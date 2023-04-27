import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Heading, MultiStep, Text, TextArea } from "@ignite-ui/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../lib/axios";
import { buildNextAuthOption } from "../../api/auth/[...nextauth].api";
import { Container, Header } from "../styles";
import { FormAnnotation, ProfileBox } from "./styles";

const UpdateProfileSchema = z.object({
  bio: z.string()
});

type UpdateProfileDatta = z.infer<typeof UpdateProfileSchema>;

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileDatta>({
    resolver: zodResolver(UpdateProfileSchema),
  });
  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileDatta) {
    await api.put('/users/profile', {
      bio: data.bio
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }


  console.log(session)

  return (
    <>
      <NextSeo title="Atualize seu perfil | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading as="strong">Bem vindo ao Ignite Call</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você pode
            editar essas informações depois.
          </Text>
          <MultiStep size={4} currentStep={4} />
        </Header>

        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size="sm">Foto de perfil</Text>
            <Avatar src={session.data?.user.avatar_url} alt={session.data?.user.name} />
          </label>

          <label>
            <Text size="sm">Sobre você</Text>
            <TextArea {...register("bio")} />
            <FormAnnotation size='sm'>
              Fale um pouco sobre você. Isto será exibido em sua página pessoal.
            </FormAnnotation>


          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOption(req, res),
  )
  return {
    props: {
      session,
    }
  }
}
