
'use strict';

describe('test dependencies', () => {

  it('expect should be globally defined', () => {
    expect(expect).to.not.be.null;
  });

  it('assert should be globally defined', () => {
    expect(assert).to.not.be.null;
  });

  it('sinon should be globally defined', () => {
    expect(sinon).to.not.be.null;
  });

});
