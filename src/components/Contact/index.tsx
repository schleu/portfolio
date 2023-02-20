import { FormProvider, useForm } from "react-hook-form";
import contactBanner from "../../assets/contact.png";
import { ScrollIds } from "../../constant/ScrollIds";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import { Schema, TypeOf, z, z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const Contact = () => {
  const schema = zod.object({
    name: zod.string().nonempty(),
    email: zod.string().email(),
    phone: zod.string(),
    message: zod.string(),
  });

  type ContactForm = z.infer<typeof schema>;

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
        <img src={contactBanner} alt="" className="hidden sm:block" />

        <Container
          title="Solicite um orçamento"
          section="Entre em contato"
          classes={{ container: "bg-light-900 dark:bg-dark-900 " }}
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
                className="bg-light-800 shadow-xl  dark:bg-dark-300  text-light-200  dark:text-dark-200"
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
