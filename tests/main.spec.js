import { expect } from 'chai';
import { search } from '../src/main';

describe('Spotify Wrapper', () => {

  describe('Smoke tests', () => {

    it('Should exist the `search` method', () => {
      expect(search).to.exist
    })
  })
})

