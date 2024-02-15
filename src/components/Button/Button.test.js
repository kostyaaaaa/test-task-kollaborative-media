import renderer from 'react-test-renderer';
import Button from './index';

const mockedOnClick = jest.fn();

const component = renderer.create(
  <Button onClick={mockedOnClick} className="text-xl">
    Click me
  </Button>,
);

it('should match snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('should apply provided props', () => {
  expect(component.toTree().rendered.props.className).toEqual('text-xl');
  expect(component.toTree().rendered.props.children).toEqual('Click me');
});

it('should call provided onClick props', () => {
  expect(mockedOnClick).toHaveBeenCalledTimes(0);
  // Simulate a click event
  component.root.props.onClick();
  expect(mockedOnClick).toHaveBeenCalledTimes(1);
});
