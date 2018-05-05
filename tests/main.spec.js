import chai, {
  expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);


global.fetch = require('node-fetch');

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main';

describe('Spotify Wrapper', () => {

  describe('Smoke tests', () => {

    it('Should exist the `search` method', () => {
      expect(search).to.exist;
    });

    it('Should exist the `searchAlbums` method', () => {
      expect(searchAlbums).to.exist;
    });


    it('Should exist the `searchArtists` method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exist the `searchTracks` method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exist the `searchPlaylists` method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic search', () => {

    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');


      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

  });
});
