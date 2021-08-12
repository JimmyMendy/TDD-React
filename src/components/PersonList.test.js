import React from 'react';
import { shallow } from 'enzyme/build';
import PersonList from './PersonList';

describe('PersonList', () => {
  let personListWrapper;

  beforeAll(() => {
    personListWrapper = shallow(<PersonList />)
  });

  it('render a ul element', () => {
    const peopleListUls = personListWrapper.find('ul')

    expect(peopleListUls).toHaveLength(1)
  });

  it('renders no li elements when no people exist', () => {
    const personListWrapper = shallow(<PersonList people={[]} />)
    const peopleListItems = personListWrapper.find('li')

    expect(peopleListItems).toHaveLength(0)
  });
  //Shortened version
  // it('renders no li elements when no people exist', () => {
  //   const peopleListItems = shallow(<PersonList people={[]} />).find('li')

  //   expect(peopleListItems).toHaveLength(0)
  // });

  // Extra shortened version
  // it('renders no li elements when no people exist', () => {
  //   expect(shallow(<PersonList people={[]} />).find('li')).toHaveLength(0)
  // });


  it('render a li element when one people exist', () => {
    const people = [{firstName: 'Jimmy', lastName: 'Mendy'}]
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find('li')

    expect(peopleListItems).toHaveLength(1)
  })

  it('renders one li element for each person that exists', () => {
    const people = [
      {firstName: 'Jimmy', lastName: 'Mendy'}, 
      {firstName: 'Lea', lastName: 'Mendy'}
    ];
    const personListWrapper = shallow(<PersonList people={people} />)
    const peopleListItems = personListWrapper.find('li')

    expect(peopleListItems).toHaveLength(2)
  })

  it('renders the first and last name of a person', () => {
    const people = [
      {firstName: 'Jimmy', lastName: 'Mendy'}
    ];

    const personListWrapper = shallow(<PersonList people={people} />)

    expect(personListWrapper.find('li').text()).toContain(people[0].firstName);
    expect(personListWrapper.find('li').text()).toContain(people[0].lastName);
  })
});