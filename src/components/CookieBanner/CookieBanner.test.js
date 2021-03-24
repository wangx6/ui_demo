import Enzyme, { mount } from 'enzyme';
import CookieBanner from './CookieBanner';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import { CgClose } from 'react-icons/cg';

Enzyme.configure({adapter: new Adapter17()});

describe('feature', () => {

  it('should show cookie banner', () => {
    const wrapper = mount(<CookieBanner></CookieBanner>);
    wrapper.find('.util-cookie-banner__cookie-icon-show').simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--show')).toEqual(true);
  })

  it('should hide cookie banner', () => {
    const wrapper = mount(<CookieBanner><CgClose></CgClose></CookieBanner>);
    expect(wrapper.exists('.util-cookie-banner-container--show')).toEqual(false);
    expect(wrapper.exists('.util-cookie-banner-container--hide')).toEqual(true);
    wrapper.find('.util-cookie-banner__cookie-icon-show').simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--show')).toEqual(true);
    expect(wrapper.exists('.util-cookie-banner-container--hide')).toEqual(false);
    wrapper.find('.util-cookie-banner-container-hdr').find('.util-cookie-banner__cookie-icon-hide').at(1).simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--hide')).toEqual(true);
  })
});