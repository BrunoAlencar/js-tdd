var expect = require('chai').expect;

describe('Main', () => {
  var arr;

  before(() => {
    console.log('Before')
  })

  after(() => {
    console.log('After')
  })

  beforeEach(() => {
    arr = [1, 2, 3, 4];
  })

  afterEach(() => {
    console.log('after each')
  })

  it('should be an array', ()=>{
    expect(arr).to.be.an('array')
  })

  it('should remove a item of array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(3);
  })

  it('should remove the value of 3', () => {
    arr.splice(1,1)
    expect(arr).to.not.include(2)
  })

  it('should return true when pop 3 from the array', () => {
    arr.splice(2,1)
    console.log(arr)
    expect(arr.indexOf(3) === -1).to.be.true;
  })




});
