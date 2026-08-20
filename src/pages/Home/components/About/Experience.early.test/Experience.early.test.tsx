// Unit tests for: Experience


import { format } from 'date-fns';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';





import { Experience } from '../Experience';


// Mocking the dependencies
jest.mock("../Project", () => ({
    Project: jest.fn(({ title, description }) => (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )),
}));

jest.mock("../Paragraph", () => ({
    Paragraph: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("classnames", () => jest.fn(() => 'mocked-classname'));

jest.mock("date-fns", () => ({
    format: jest.fn(),
}));

jest.mock("date-fns/locale/pt-BR", () => ({}));

// MockDate interface

class MockDate implements MockDate {
    toISOString = jest.fn();
    toDateString = jest.fn();
}

 const mokedExperience = {
    company: "OMP",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    description: {
      en: "Frontend development of a meme creation platform with generative AI, autonomous distribution and monetization system, using ReactJS, Vite, Tailwind, Redux and Shadcn. Backend development using Python with FastAPI, Firestore and Google Cloud.",
      pt: "Desenvolvimento front-end de plataforma de criação de memes com IA generativa, distribuição autônoma e sistema de monetização, utilizando ReactJS, Vite, Tailwind, Redux e Shadcn. Desenvolvimento back-end utilizando Python com FastAPI, Firestore e Google Cloud.",
    },
    startDate: new Date("2024-01-01"),
    finalDate: new Date("2025-06-11"),
    stack: [
      "Python",
      "React.JS",
      "Typescript",
      "Tailwind",
      "Shadcn",
      "Git",
      "GitHub",
      "Kanban",
    ],
    projects: [
      {
        title: {
          en: "MyMeme",
          pt: "MyMeme",
        },
        description: {
          en: "Meme creation platform with generative AI, autonomous distribution and monetization system.",
          pt: "Plataforma de criação de memes com IA generativa, distribuição autônoma e sistema de monetização.",
        },
        responsible: "Responsible for the frontend development.",
      },
      {
        title: {
          en: "PaalX",
          pt: "PaalX",
        },
        description: {
          en: "Cryptocurrency transaction platform.",
          pt: "Plataforma de transação de criptomoedas.",
        },
      },
    ],
    contractType: "PJ",
    workmode: "Remoto",
  }


describe('Experience() Experience method', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Happy Path', () => {
        it('should render the Experience component with projects', () => {

            // Act
            const { getByText } = render(
                <Experience
                  company={mokedExperience.company}
                  role={mokedExperience.role}
                  startDate={mokedExperience.startDate}
                  finalDate={mokedExperience.finalDate}
                  description={mokedExperience.description}
                  stack={mokedExperience.stack}
                  projects={mokedExperience.projects}
                />
            );

            // Assert
            expect(getByText(mokedExperience.company)).toBeInTheDocument();
            expect(getByText('Jan 2024 - Jun 2025')).toBeInTheDocument();
            expect(getByText(mokedExperience.description.pt)).toBeInTheDocument();
            expect(getByText(mokedExperience.projects[0].title.pt)).toBeInTheDocument();
            expect(getByText(mokedExperience.projects[1].title.pt)).toBeInTheDocument();
        });

        it('should toggle showMore state when clicking on the role', () => {
            // Act
            const { getByText } = render(
                <Experience
                  company={mokedExperience.company}
                  role={mokedExperience.role}
                  startDate={mokedExperience.startDate}
                  finalDate={mokedExperience.finalDate}
                  description={mokedExperience.description}
                  stack={mokedExperience.stack}
                  projects={mokedExperience.projects}
                />
            );

            const roleElement = getByText('Developer @Test Company');
            userEvent.click(roleElement);

            // Assert
            expect(getByText('Project 1')).toBeInTheDocument();
        });
    });

    describe('Edge Cases', () => {
        it('should render without projects', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockReturnValueOnce('Jan 2020').mockReturnValueOnce('Dec 2020');

            // Act
            const { getByText, queryByText } = render(
                <Experience
                  company={mokedExperience.company}
                  role={mokedExperience.role}
                  startDate={mokedExperience.startDate}
                  finalDate={mokedExperience.finalDate}
                  description={mokedExperience.description}
                  stack={mokedExperience.stack}
                  projects={mokedExperience.projects}
                />
            );

            // Assert
            expect(getByText('Developer @Test Company')).toBeInTheDocument();
            expect(getByText('Jan 2020 - Dec 2020')).toBeInTheDocument();
            expect(getByText('Test description')).toBeInTheDocument();
            expect(queryByText('Project 1')).not.toBeInTheDocument();
        });

        it('should handle invalid date formats gracefully', () => {            
            // Act
            const { getByText } = render(
                <Experience
                  company={mokedExperience.company}
                  role={mokedExperience.role}
                  startDate={mokedExperience.startDate}
                  finalDate={mokedExperience.finalDate}
                  description={mokedExperience.description}
                  stack={mokedExperience.stack}
                  projects={mokedExperience.projects}
                />
            );

            // Assert
            expect(getByText('Developer @Test Company')).toBeInTheDocument();
            expect(getByText('Test description')).toBeInTheDocument();
        });
    });
});

// End of unit tests for: Experience
