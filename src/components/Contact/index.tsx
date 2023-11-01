import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z as zod } from "zod";
import contactBanner from "../../assets/contact.webp";
import { ScrollIds } from "../../constant/ScrollIds";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import { ReactComponent as CrownIcon } from "../../assets/crownSimple.svg";

export const Contact = () => {
  const schema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string(),
    message: zod.string(),
  });

  type ContactForm = zod.infer<typeof schema>;

  const onSubmit = (e: ContactForm) => {
    console.log(e);

    let text = `Nome: ${e.name}\n`;
    text += `Telefone: ${e.phone}\n`;
    text += `Mensagem: ${e.message}`;

    const myPhone = "5571993501216";

    const url = `https://api.whatsapp.com/send?phone=${myPhone}&text=${encodeURI(
      text
    )}`;

    window.open(url);
  };

  const methods = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  return (
    <div className="w-full flex justify-center" id={ScrollIds.CONTACT}>
      <div className="flex gap-20 items-center w-full max-w-screen-cut">
        <img
          src={contactBanner}
          className="hidden sm:block"
          alt="Imagem com uma luminária acesa, um notebook aberto e um celular ao lado."
        />

        <Container
          title="Solicite um orçamento"
          section="Entre em contato"
          classes={{ container: "bg-dark-900 " }}
        >
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="Nome Completo"
                placeholder="Digite o seu nome"
                required
                Icon={CrownIcon}
                name="name"
              />
              <div className="flex flex-col sm:flex-row gap-6">
                <Input
                  type={"tel"}
                  label="Telefone"
                  placeholder="Digite o seu telefone"
                  required
                  name="phone"
                />
                <Input
                  type={"email"}
                  label="Email"
                  placeholder="Digite o seu email"
                  required
                  name="email"
                />
              </div>
              <Textarea label="Mensagem" required name="message" />
              <Button
                type="submit"
                className="shadow-xl bg-dark-300  text-dark-200"
                title="Send contact"
              >
                Enviar
              </Button>
            </form>
          </FormProvider>
        </Container>
      </div>
    </div>
  );
};
