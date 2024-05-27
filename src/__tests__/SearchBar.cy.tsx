import { mount } from '@cypress/react18';
import { SearchBar } from '../components/Search/SearchBar';
import { UserProps } from '../types/userType';

describe('SearchBar component', () => {
     const mockUser: UserProps = {
        avatar_url: 'https://example.com/avatar.jpg',
        login: 'example_user',
        followers: 100,
        following: 50,
        name: 'Example User'
      };

  it('should render with placeholder text', () => {
    mount(<SearchBar fetchUser={() => mockUser} />);

    cy.get('input[name="username"]')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Digite o nome do usuário');
  });

  it('should update input value on typing', () => {
    mount(<SearchBar fetchUser={() => mockUser} />);

    cy.get('input[name="username"]').type('usernametest');
    cy.get('input[name="username"]').should('have.value', 'usernametest');
  });

  it('should show clear button only when input has a value', () => {
    mount(<SearchBar fetchUser={() => mockUser} />);

    cy.get('button[aria-label="clear"]').should('not.exist');
    cy.get('input[name="username"]').type('bob');
    cy.get('button[aria-label="clear"]').should('be.visible');
  });
});
