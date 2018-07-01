import ReposContainer from './../../src/containers/ReposContainer'

jest.unmock('./../../src/containers/ReposContainer')

//normally to test an individual function we would have to export it.  We use babel-plugin-rewire
//in babel config, we config so that it only runs in the test env
//.__get will get the unexported function from our module

describe('ReposContainer', () => {
  describe('mapStateToProps', () => {
    const mapStateToProps = ReposContainer.__get__('mapStateToProps')
    it('returns object with one property', () => {
      const state = {}
      const stateProps = mapStateToProps(state)
      const numberOfProperties = Object.keys(stateProps).length
      expect(numberOfProperties).toBe(1)
    })
  })
})
