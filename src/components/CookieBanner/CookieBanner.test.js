import Enzyme, { mount } from 'enzyme';
import CookieBanner from './CookieBanner';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter17()});

let wrapper;

beforeEach(() => {
  wrapper = mount(<CookieBanner></CookieBanner>);
})

describe('feature', () => {
  it('should show cookie banner', () => {
    expect(wrapper.exists('.util-cookie-banner-container--visible')).toEqual(false);
    wrapper.find('.util-cookie-banner__cookie-icon-show').simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--visible')).toEqual(true);
  })

  it('should hide cookie banner', () => {
    expect(wrapper.exists('.util-cookie-banner-container--visible')).toEqual(false);
    expect(wrapper.exists('.util-cookie-banner-container--invisible')).toEqual(true);
    wrapper.find('.util-cookie-banner__cookie-icon-show').simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--visible')).toEqual(true);
    expect(wrapper.exists('.util-cookie-banner-container--invisible')).toEqual(false);
    wrapper.find('.util-cookie-banner-container-hdr').find('.util-cookie-banner__cookie-icon-hide').at(1).simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--invisible')).toEqual(true);
  })
});