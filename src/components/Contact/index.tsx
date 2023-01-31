import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import contactBanner from "../../assets/contact.png";

export const Contact = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-20 items-center w-full max-w-screen-cut">
        <img src={contactBanner} alt="" />

        <Container
          title="Solicite um orçamento"
          section="Entre em contato"
          classes={{ container: "bg-[#121212]" }}
        >
          <form className="flex flex-col gap-6">
            <Input
              label="Nome Completo"
              placeholder="Digite o seu nome"
              required
              disabled
            />
            <div className="flex gap-6">
              <Input
                type={"tel"}
                label="Telefone"
                placeholder="Digite o seu nome"
                required
                disabled
              />
              <Input
                type={"email"}
                label="email"
                placeholder="Digite o seu nome"
                required
                disabled
              />
            </div>
            <Textarea label="Mensagem" required disabled />
            <Button
              type="submit"
              className="bg-[#333333] text-[#D6D6DC] cursor-not-allowed"
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
