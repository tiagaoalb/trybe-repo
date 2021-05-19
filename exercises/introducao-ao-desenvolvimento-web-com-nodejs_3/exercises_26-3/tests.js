const fs = require('fs');
const { stub } = require('sinon');
const { expect } = require('chai');

const checkNumber = require('./index');
const writeContent = require('./writeContent');

describe('Run checkNumber function', () => {
  describe('When the number is > 0', () => {
    describe('the answer', () => {
      it('it is a string', () => {
        const answer = checkNumber(1);
        expect(answer).to.be.a('string');
      });

      it('is equal to "positivo"', () => {
        const answer = checkNumber(1);
        expect(answer).to.be.equals('positive');
      });
    });
  });

  describe('When the number is < 0', () => {
    describe('the answer', () => {
      it('it is a string', () => {
        const answer = checkNumber(-1);
        expect(answer).to.be.a('string');
      });

      it('is equal to "negative"', () => {
        const answer = checkNumber(-1);
        expect(answer).to.be.equals('negative');
      });
    });
  });

  describe('When the number is equal to 0', () => {
    describe('the answer', () => {
      it('it is a string', () => {
        const answer = checkNumber(0);
        expect(answer).to.be.a('string');
      });

      it('is equal to "neutral"', () => {
        const answer = checkNumber(0);
        expect(answer).to.be.equals('neutral');
      });
    });
  });

  describe('When the value is not a number', () => {
    describe('the answer', () => {
      it('it is a string', () => {
        const answer = checkNumber('AAA');
        expect(answer).to.be.a('string');
      });

      it('is equal to "it must be a number"', () => {
        const answer = checkNumber('AAA');
        expect(answer).to.be.equals('it must be a number');
      });
    });
  });
});

describe('Check writeFile function', () => {
  before(() => {
    stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('the answer', () => {
    it('it is a string', () => {
      const answer = writeContent('arquivo.txt', '#vqv');
      expect(answer).to.be.a('string');
    });

    it('it is equal to "ok"', () => {
      const answer = writeContent('arquivo.txt', '#vqv');
      expect(answer).to.be.equals('ok');
    })
  })
});
