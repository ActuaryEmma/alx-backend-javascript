const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment')

describe('sendPaymentRequestToAPI', function () {
    let spy;
    beforeEach(() => {
      spy = sinon.spy(console, 'log');
    });
    afterEach(() => {
      spy.restore();
    });

    it('sendPaymentRequestToAPI(100, 20) logs "The total is: 120"', function () {
      sendPaymentRequestToAPI(100, 20);
      expect(spy.calledWith('The total is: 120')).to.be.true;
    });

    it('sendPaymentRequestToAPI(10, 10) logs "The total is: 20"', function () {
      sendPaymentRequestToAPI(10, 10);
      expect(spy.calledWith('The total is: 20')).to.be.true;
    });
});
