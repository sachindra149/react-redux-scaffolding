import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render, shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ListBlock from './listBlock.jsx';


configure({adapter: new Adapter()});

describe("<ListBlock />", () => {

	it("Component Should Render", () => {
		expect(<ListBlock />).toBeDefined();
	});

	// it("Should get no dataResults props initially", () => {
	// 	const wrapper = shallow(<ListBlock />);
	// 	expect(wrapper.find('img').prop('src').length).toEqual(0);
	// });

	// it("Should render using fake data", () => {
	// 	const fakeData = {"gender":"male","name":{"title":"Mr","first":"Mateo","last":"Dirkzwager"},"location":{"street":{"number":5321,"name":"De Windvang"},"city":"Tolkamer","state":"Drenthe","country":"Netherlands","postcode":75264,"coordinates":{"latitude":"38.8233","longitude":"-136.0278"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"Mateo.Dirkzwager@example.com","login":{"uuid":"92386d1b-6ca5-4aa9-9a4d-b51c73a13788","username":"brownswan770","password":"peugeot","salt":"yYMwPOJK","md5":"0db208f2248f5a82d9496e2d132f0343","sha1":"3186ba22294f73dd9365669ca6255afa4e141258","sha256":"17198324ec346be96e90e0c3ae2493bf2e1263e767d02740b177f28b290a405e"},"dob":{"date":"1963-02-19T21:07:42.800Z","age":56},"registered":{"date":"2004-03-31T02:37:38.823Z","age":15},"phone":"(426)-124-5590","cell":"(001)-463-8989","id":{"name":"BSN","value":"71033766"},"picture":{"large":"https://randomuser.me/api/portraits/men/78.jpg","medium":"https://randomuser.me/api/portraits/med/men/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/78.jpg"},"nat":"NL"};
	// 	const wrapper = shallow(<ListBlock dataResults={fakeData} key={fakeData.length} />);
	// 	expect(wrapper.find('img').prop('src').length).toBeGreaterThan(0);

	// });

});
