
// Unit tests for: Experience


import { format } from 'date-fns';





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
            render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    projects={[
                        { title: 'Project 1', description: 'Description 1' },
                        { title: 'Project 2', description: 'Description 2' },
                    ]}
                />
            );

            // Assert
            expect(screen.getByText('Developer @Test Company')).toBeInTheDocument();
            expect(screen.getByText('Jan 2020 - Dec 2020')).toBeInTheDocument();
            expect(screen.getByText('Test description')).toBeInTheDocument();
            expect(screen.getByText('Project 1')).toBeInTheDocument();
            expect(screen.getByText('Project 2')).toBeInTheDocument();
        });

        it('should toggle showMore state when clicking on the role', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockReturnValueOnce('Jan 2020').mockReturnValueOnce('Dec 2020');

            // Act
            render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    projects={[
                        { title: 'Project 1', description: 'Description 1' },
                    ]}
                />
            );

            const roleElement = screen.getByText('Developer @Test Company');
            fireEvent.click(roleElement);

            // Assert
            expect(screen.getByText('Project 1')).toBeInTheDocument();
        });
    });

    describe('Edge Cases', () => {
        it('should render without projects', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockReturnValueOnce('Jan 2020').mockReturnValueOnce('Dec 2020');

            // Act
            render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    projects={[]}
                />
            );

            // Assert
            expect(screen.getByText('Developer @Test Company')).toBeInTheDocument();
            expect(screen.getByText('Jan 2020 - Dec 2020')).toBeInTheDocument();
            expect(screen.getByText('Test description')).toBeInTheDocument();
            expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
        });

        it('should handle invalid date formats gracefully', () => {
            // Arrange
            const mockStartDate = new MockDate() as any;
            const mockFinalDate = new MockDate() as any;
            (format as jest.Mock).mockImplementation(() => {
                throw new Error('Invalid date');
            });

            // Act
            render(
                <Experience
                    company="Test Company"
                    role="Developer"
                    startDate={mockStartDate}
                    finalDate={mockFinalDate}
                    description="Test description"
                    projects={[]}
                />
            );

            // Assert
            expect(screen.getByText('Developer @Test Company')).toBeInTheDocument();
            expect(screen.getByText('Test description')).toBeInTheDocument();
        });
    });
});

// End of unit tests for: Experience
