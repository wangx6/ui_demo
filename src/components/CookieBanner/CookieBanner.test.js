import Enzyme, { mount, shallow } from 'enzyme';
import CookieBanner from './CookieBanner';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import { CgClose } from 'react-icons/cg';

Enzyme.configure({adapter: new Adapter17()});

describe('feature', () => {

  it('should show cookie banner', () => {
    //const {} = mockCallBack;
    const wrapper = mount(<CookieBanner></CookieBanner>);
    wrapper.find('.util-cookie-banner__cookie-icon-show').simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--show')).toEqual(true);
  })

  it('should hide cookie banner', () => {
    //const {} = mockCallBack;
    const wrapper = mount(<CookieBanner><CgClose></CgClose></CookieBanner>);
    console.log(wrapper.html());
    console.log(wrapper.debug());
    console.log(wrapper.find('.util-cookie-banner-container-hdr').find('.util-cookie-banner__cookie-icon-hide').at(1).html());
    /*wrapper.find('.util-cookie-banner__cookie-icon-hide').children
      .dive()
      .find('.CLASS_NAME_OF_ELEMENT')
      .simulate('click');*/
    wrapper.find('.util-cookie-banner-container-hdr').find('.util-cookie-banner__cookie-icon-hide').at(1).simulate('click');
    expect(wrapper.exists('.util-cookie-banner-container--hide')).toEqual(true);
  })
});