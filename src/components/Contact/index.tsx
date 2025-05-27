import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { z as zod } from "zod";
import contactBanner from "../../assets/contact.webp";
import { ScrollIds } from "../../constant/ScrollIds";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const schema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string(),
    message: zod.string(),
  });

  type ContactForm = zod.infer<typeof schema>;

  const onSubmit = (e: ContactForm) => {
    let text = `${t("contact.name")}: ${e.name}\n`;
    text += `${t("contact.phone")}: ${e.phone}\n`;
    if (e.email) {
      text += `${t("contact.email")}: ${e.email}\n`;
    }
    text += `${t("contact.message")}: ${e.message}`;

    const myPhone = "5588992092318";

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

  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center" id={ScrollIds.CONTACT}>
      <div className="flex gap-20 items-center w-full max-w-screen-cut">
        <img
          src={contactBanner}
          className="hidden sm:block"
          alt={t("contact.imgAlt")}
        />

        <Container
          title={t("contact.title")}
          section={t("contact.section")}
          classes={{ container: "bg-dark-900 " }}
        >
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label={t("contact.name")}
                placeholder={t("contact.namePlaceholder")}
                required
                Icon={BsPerson}
                name="name"
              />
              <div className="flex flex-col sm:flex-row gap-6">
                <Input
                  type={"tel"}
                  label={t("contact.phone")}
                  placeholder={t("contact.phonePlaceholder")}
                  required
                  name="phone"
                  Icon={BsTelephone}
                />
                <Input
                  type={"email"}
                  label={t("contact.email")}
                  placeholder={t("contact.emailPlaceholder")}
                  name="email"
                  Icon={AiOutlineMail}
                />
              </div>
              <Textarea
                label={t("contact.message")}
                required
                name="message"
                placeholder={t("contact.messagePlaceholder")}
              />
              <Button
                type="submit"
                className="shadow-xl bg-dark-300  text-dark-200"
                title={t("contact.send")}
              >
                {t("contact.send")}
              </Button>
            </form>
          </FormProvider>
        </Container>
      </div>
    </div>
  );
};
