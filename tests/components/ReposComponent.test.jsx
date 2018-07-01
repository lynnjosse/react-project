//we need to be able to render the component we care about (only)
//we need to be able to convert it into a json format)
//enzyme takes care of the shallow rendering
//npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
//import shallow makes it only render the component we are testing, not the ones within it
//shallow returns a wrapper
//jest.fn is a mock function - we don't have to actually supply a function here

import ReposComponent from './../../src/components/ReposComponent'
import {shallow} from 'enzyme'
import React from 'react'
import ReposRecord from './../../src/reducers/Repos'

jest.unmock('./../../src/components/ReposComponent')
jest.unmock('./../../src/reducers/Repos')


describe('ReposComponent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <ReposComponent repos={new ReposRecord()} retryFetchingRepos={jest.fn()} />
    )
  })

  it('default view is empty', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('displays alert when repos are fetching',() => {
    const newReposRecord = new ReposRecord({
      status: 'FETCHING'
    })
    wrapper.setProps({repos: newReposRecord})
    expect(wrapper).toMatchSnapshot()
  })


})
