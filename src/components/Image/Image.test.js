import renderer from 'react-test-renderer';
import Image from './index';

const component = renderer.create(
  <Image src="image-source" className="text-xl" />,
);

it('should match snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('should apply provided props', () => {
  expect(component.toTree().rendered.props.className).toEqual('text-xl');
  expect(component.toTree().rendered.props.src).toEqual('image-source');
});

it('should have default alt prop', () => {
  expect(component.toTree().rendered.props.alt).toEqual('');
});
