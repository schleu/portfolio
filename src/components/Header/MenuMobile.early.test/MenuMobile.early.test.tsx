
// Unit tests for: MenuMobile



import { scroller } from 'react-scroll';



import { MenuMobile } from '../MenuMobile';


class MockiMenuItem {
    public text: string = "Home";
    public link: string = "home";
    public onClick: jest.Mock = jest.fn();
    public mobile?: boolean = true;
}

class MockiMenuMobileProps {
    public isOpen: boolean = true;
    public onClose: jest.Mock = jest.fn();
    public items: MockiMenuItem[] = [new MockiMenuItem()];
}

jest.mock("react-scroll", () => ({
    scroller: {
        scrollTo: jest.fn(),
    },
}));

jest.mock("react-use", () => ({
    useLockBodyScroll: jest.fn(),
}));

describe('MenuMobile() MenuMobile method', () => {
    let mockProps: MockiMenuMobileProps;

    beforeEach(() => {
        mockProps = new MockiMenuMobileProps() as any;
    });

    describe('Happy Path', () => {
        it('should render the menu when isOpen is true', () => {
            // Arrange
            mockProps.isOpen = true;

            // Act
            const { container } = render(<MenuMobile {...mockProps as any} />);

            // Assert
            expect(container.firstChild).toHaveClass('w-full');
        });

        it('should call onClose when the close icon is clicked', () => {
            // Arrange
            const { getByRole } = render(<MenuMobile {...mockProps as any} />);

            // Act
            fireEvent.click(getByRole('button'));

            // Assert
            expect(mockProps.onClose).toHaveBeenCalled();
        });

        it('should call onClick and scrollTo when a menu item is clicked', () => {
            // Arrange
            const { getByText } = render(<MenuMobile {...mockProps as any} />);
            const menuItem = getByText(mockProps.items[0].text);

            // Act
            fireEvent.click(menuItem);

            // Assert
            expect(mockProps.items[0].onClick).toHaveBeenCalled();
            expect(scroller.scrollTo).toHaveBeenCalledWith(mockProps.items[0].link, { smooth: true });
        });
    });

    describe('Edge Cases', () => {
        it('should not render the menu when isOpen is false', () => {
            // Arrange
            mockProps.isOpen = false;

            // Act
            const { container } = render(<MenuMobile {...mockProps as any} />);

            // Assert
            expect(container.firstChild).toHaveClass('w-0');
        });

        it('should handle empty items array gracefully', () => {
            // Arrange
            mockProps.items = [];

            // Act
            const { container } = render(<MenuMobile {...mockProps as any} />);

            // Assert
            expect(container.querySelectorAll('nav').length).toBe(0);
        });
    });
});

// End of unit tests for: MenuMobile
