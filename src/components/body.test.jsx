import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render, shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './body.jsx';


configure({adapter: new Adapter()});

describe("<App />", () => {

	it("Component should be defined", () => {
		expect(App).toBeDefined();
	});

	it("Should simply render the component", () => {
		const wrapper = render(<App />);
		expect(wrapper);
	});
	
	it("Should match the snapshot", () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Testing Shallow and Mount Rendering", () => {
		const shallowWrapper = shallow(<App />);
		const mountWrapper = mount(<App />);
		expect(shallowWrapper.containsMatchingElement(<h1>React Redux Testing App</h1>)).toEqual(true);
		expect(mountWrapper.containsMatchingElement(<h1>React Redux Testing App</h1>)).toEqual(true);
	});

	it("Should render a loader initially", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('table').length).toEqual(0);
		expect(wrapper.find('.loading').length).toEqual(1);
	});

});
