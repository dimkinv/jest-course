import express from 'express';
jest.mock('express');
jest.mock('./services/asteroid.service');

describe('controller', () => {

    it('should call res.send with parsed response', (done) => {
        // given
        // this is the response object that will be given to the callback when endpoint will be initiated
        const resMockObject = {
            send: jest.fn(),
            status: jest.fn()
        };

        // the callback that we are using in controller.ts need to be saved as we will initiate us manually
        let callbackPassed: Function;

        // this is the mock for express. we need to mock all the functions we use and in case of get we need to implement more sophisticated mock
        // because we need to get hold of the call back and save it to the variable in line 16.
        (express as any as jest.Mock).mockReturnValueOnce({
            listen: jest.fn(),
            get: jest.fn().mockImplementation((requestPath: string, callback: Function) => {
                callbackPassed = callback;
            })
        });

        // here and only here we can import the controller as now we have all the mocks in place for it.
        require('./controller');

        // when
        // we're initiating the callback the code gave us manually to "emulate" incoming request to our api
        // we do not case about the requst and only mock the query so we wont fail
        // we pass the resMockObject to the callback that the code will use to "respond" back.
        callbackPassed!({ query: {} }, resMockObject);

        // then
        // here we are mocking the send function. Only now when it will be called we can be sure that our test worked.
        // theoretically line number 40 is not needed because if send wont be called we will not call doen anyway and the test will fail. 
        resMockObject.send.mockImplementation(() => {
            expect(resMockObject.send).toHaveBeenCalled();
            
            // we're letting know that the test ended and is a success
            done()
        });
    });
});