import { render, screen } from '@testing-library/react';
import App from './App';
import Error from './components/Error/Error';
import Expense from './components/Expenses/Expense';
import ExpenseDisplay from './components/Expenses/ExpenseDisplay';
import Header from './components/Header/Header';
import Email from './components/User/Email';
import PasswordReset from './components/User/PasswordReset';
import Signup from './components/User/Signup';
import UpdateProfile from './components/User/UpdateProfile';
import Home from './profileHome/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/expense tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Error />);
  const linkElement = screen.getByText(/wrong address/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Expense />);
  const linkElement = screen.getByText(/food/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<ExpenseDisplay />);
  const linkElement = screen.getByText(/delete/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/log Out/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Email />);
  const linkElement = screen.getByText(/verify/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<PasswordReset />);
  const linkElement = screen.getByText(/Reset Password/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<UpdateProfile />);
  const linkElement = screen.getByText(/Full Name/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Edit Profile Details/i);
  expect(linkElement).toBeInTheDocument();
});



// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Greeting from './Greeting';

// describe('Greeting component', () => {
//   test('renders "Hello World" as a text', () => {
//     // Arrange
//     render(<Greeting />);

//     // Act
//     // ... nothing

//     // Assert
//     const helloWorldElement = screen.getByText('Hello World!');
//     expect(helloWorldElement).toBeInTheDocument();
//   });

//   test('renders "good to see" you if the button was NOT clicked', () => {
//     render(<Greeting />);

//     const outputElement = screen.getByText('good to see you', { exact: false });
//     expect(outputElement).toBeInTheDocument();
//   });

//   test('renders "Changed!" if the button was clicked', () => {
//     // Arrange
//     render(<Greeting />);

//     // Act
//     const buttonElement = screen.getByRole('button');
//     userEvent.click(buttonElement)

//     // Assert
//     const outputElement = screen.getByText('Changed!');
//     expect(outputElement).toBeInTheDocument();
//   });

//   test('does not render "good to see you" if the button was clicked', () => {
//      // Arrange
//      render(<Greeting />);

//      // Act
//      const buttonElement = screen.getByRole('button');
//      userEvent.click(buttonElement)
 
//      // Assert
//      const outputElement = screen.queryByText('good to see you', { exact: false });
//      expect(outputElement).toBeNull();
//   });
// });

