import { Search } from '../components/Search'
import { mount } from '@cypress/react18'

describe('Search component', () => {
  it('shoud render search component', () => {
    mount(<Search />)
  })
})