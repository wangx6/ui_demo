import React, { useState as useStateMock } from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import WebChat, {} from './WebChat';

Enzyme.configure({adapter: new Adapter17()});

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
  

describe('render', () => {

    const setState = jest.fn();
    let webChat;

    beforeEach(() => {
      useStateMock.mockImplementation(init => [init, setState]);
      webChat = Enzyme.mount(<WebChat></WebChat>);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should mount correctly', () => {
      expect(webChat.exists('.lqe-wct')).toEqual(true);
    });

    it('should toggle the state of webChat from not visbile to visible', async () => {
      expect(webChat.find('.lqe-wct__main').everyWhere((n) => n.hasClass('lqe-wct__main__toggle--hide'))).toEqual(true);
      expect(webChat.find('.lqe-wct__btn_s').exists()).toBeTruthy();
      webChat.find('.lqe-wct__btn_s').first().props().onClick();
      // Do we need to refresh the DOM here?
      expect(webChat.find('.lqe-wct__main').everyWhere((n) => n.hasClass('lqe-wct__main__toggle--show'))).toEqual(true);

    });

    it('should setState value from false to true', () => { 
      webChat.find('.lqe-wct__btn_s').props().onClick();
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith(true);
    });

    
    it('should setState value from true to false', () => {
      expect(webChat.find('.lqe-wct__main__hdr__x__icon').exists()).toBeTruthy();
      webChat.find('.lqe-wct__main__hdr__x__icon').first().props().onClick();
      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith(true); 
    });

    it('should check that messages are being rendered as expected when pages loads', () => {
      expect(webChat.find('.lqe-wct__main__message-list').children().length).toEqual(25);
    });

    it('should check that text of last message renders as expected when page loads', () => {
      const lastMessage = webChat.find('.message__chatbubble').last();
      expect(lastMessage.text()).toBe('this is user ** speaking this is user ** speaking this is user ** speaking this is user ** speaking ');
    });

    it('should add a message to the message list with the text "hi joe"', () => {
      expect(webChat.last().find('.message__chatbubble').exists()).toBeTruthy();
      const messageInput = webChat.find('.lqe-wct__message__input');
      messageInput.simulate('change', {target: {value: 'hi joe'}});
      //expect(messageInput.instance().value).toEqual('hi joe');
      
      /*
      const submit = webChat.find('.lqe-wct__message__submit-btn');
      submit.simulate('click');
      expect(setState).toHaveBeenCalledTimes(1);
      const lastMessage = webChat.find('.message__chatbubble').last();
      expect(lastMessage.text()).toBe('hi joe');
      */

    });

    it('clicks it', () => {
      /*
      const app = shallow(<WebChat />)
      const instance = app.instance();
      const spy = jest.spyOn(instance, 'onClickToggleChatBox')
      instance.forceUpdate();    
      const submit = app.find('.lqe-wct__message__submit-btn')
      submit.simulate('click')
      expect(spy).toHaveBeenCalled();
      */
    });

});
