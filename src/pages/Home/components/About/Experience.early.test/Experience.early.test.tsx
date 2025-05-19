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

describe('Experience() Experience method', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Happy Path', () => {
        it('should render the Experience component with projects', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockReturnValueOnce('Jan 2020').mockReturnValueOnce('Dec 2020');

            // Act
            const { getByText } = render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    stack={['React', 'TypeScript']}
                    projects={[
                        { title: 'Project 1', description: 'Description 1' },
                        { title: 'Project 2', description: 'Description 2' },
                    ]}
                />
            );

            // Assert
            expect(getByText('Developer @Test Company')).toBeInTheDocument();
            expect(getByText('Jan 2020 - Dec 2020')).toBeInTheDocument();
            expect(getByText('Test description')).toBeInTheDocument();
            expect(getByText('Project 1')).toBeInTheDocument();
            expect(getByText('Project 2')).toBeInTheDocument();
        });

        it('should toggle showMore state when clicking on the role', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockReturnValueOnce('Jan 2020').mockReturnValueOnce('Dec 2020');

            // Act
            const { getByText } = render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    stack={['React', 'TypeScript']}
                    projects={[
                        { title: 'Project 1', description: 'Description 1' },
                    ]}
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
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    stack={['React', 'TypeScript']}
                    projects={[]}
                />
            );

            // Assert
            expect(getByText('Developer @Test Company')).toBeInTheDocument();
            expect(getByText('Jan 2020 - Dec 2020')).toBeInTheDocument();
            expect(getByText('Test description')).toBeInTheDocument();
            expect(queryByText('Project 1')).not.toBeInTheDocument();
        });

        it('should handle invalid date formats gracefully', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockImplementation(() => {
                throw new Error('Invalid date');
            });

            // Act
            const { getByText } = render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    stack={['React', 'TypeScript']}
                    projects={[]}
                />
            );

            // Assert
            expect(getByText('Developer @Test Company')).toBeInTheDocument();
            expect(getByText('Test description')).toBeInTheDocument();
        });
    });
});

// End of unit tests for: Experience
