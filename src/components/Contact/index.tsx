import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import contactBanner from "../../assets/contact.png";

export const Contact = () => {
  const onSubmit = {};

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-20 items-center w-full max-w-screen-cut">
        <img src={contactBanner} alt="" className="hidden sm:block" />

        <Container
          title="Solicite um orçamento"
          section="Entre em contato"
          classes={{ container: "bg-light-900 dark:bg-dark-900 " }}
        >
          <form className="flex flex-col gap-6">
            <Input
              label="Nome Completo"
              placeholder="Digite o seu nome"
              required
              disabled
            />
            <div className="flex flex-col sm:flex-row gap-6">
              <Input
                type={"tel"}
                label="Telefone"
                placeholder="Digite o seu telefone"
                required
                disabled
              />
              <Input
                type={"email"}
                label="Email"
                placeholder="Digite o seu email"
                required
                disabled
              />
            </div>
            <Textarea label="Mensagem" required disabled />
            <Button
              type="submit"
              className="bg-light-800 shadow-xl  dark:bg-dark-300  text-light-200  dark:text-dark-200 cursor-not-allowed"
              disabled
            >
              Enviar
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};
