import Enzyme, { mount } from 'enzyme';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import WebChat, {} from './WebChat';

Enzyme.configure({adapter: new Adapter17()});

describe('render', () => {

  let webChat;

  beforeEach(() => {
    webChat = mount(<WebChat></WebChat>);
  });

  it('should mount correctly', () => {
    const webChat = mount(<WebChat></WebChat>);
    expect(webChat.exists('.lqe-wct')).toEqual(true);
  });

  it('should toggle the state of webChat from not visbile to visible', () => {
    expect(webChat.find('.lqe-wct__main').hasClass('lqe-wct__toggle--hide')).toEqual(true);
    expect(webChat.find('.lqe-wct__open-btn').hasClass('lqe-wct__toggle--show')).toEqual(true);
    // Show WebChat Hide Open Btn
    webChat.find('.lqe-wct__btn_s').simulate('click');
    expect(webChat.find('.lqe-wct__main').hasClass('lqe-wct__toggle--show')).toEqual(true);
    expect(webChat.find('.lqe-wct__open-btn').hasClass('lqe-wct__toggle--hide')).toEqual(true);
    // Hide WebChat Show Open Btn
    webChat.find('.lqe-wct__main__hdr__x__icon').last().simulate('click'); 
    expect(webChat.find('.lqe-wct__main').hasClass('lqe-wct__toggle--hide')).toEqual(true);
    expect(webChat.find('.lqe-wct__open-btn').hasClass('lqe-wct__toggle--show')).toEqual(true);
  });

  it('should check that messages are being rendered as expected when pages loads', () => {
    expect(webChat.find('.lqe-wct__main__message-list').children().length).toEqual(25);
  });

  it('should check that text of last message renders as expected when page loads', () => {
    const lastMessage = webChat.find('.message__chatbubble').last();
    expect(lastMessage.text()).toBe('this is user ** speaking this is user ** speaking this is user ** speaking this is user ** speaking ');
  });

  it('should add a message to the message list with the text "hi joe"', () => {
    const messageInput = webChat.find('.lqe-wct__message__input');
    messageInput.simulate('change', {target: {value: 'hi joe'}});
    expect(messageInput.instance().value).toEqual('hi joe');
    const submit = webChat.find('.lqe-wct__message__submit-btn');
    submit.simulate('click');
    const lastMessage = webChat.find('.message__chatbubble').last();
    expect(lastMessage.text()).toBe('hi joe');
  });

  it('should not add empty a message to the message list', () => {
    const messageInput = webChat.find('.lqe-wct__message__input');
    messageInput.simulate('change', {target: {value: ''}});
    const submit = webChat.find('.lqe-wct__message__submit-btn');
    submit.simulate('click');
    const lastMessage = webChat.find('.message__chatbubble').last();
    expect(lastMessage.text()).toBe('this is user ** speaking this is user ** speaking this is user ** speaking this is user ** speaking ');
  });

  it('should call setState on ctrl & enter', () => {
    const messageInput = webChat.find('.lqe-wct__message__input');
    messageInput.simulate('keyup', {keyCode: 13});
    expect(messageInput.instance().value).toEqual('');
    messageInput.simulate('keyup', {keyCode: 13, ctrlKey: true});
    expect(messageInput.instance().value).toEqual('');
  });

});
