import renderer, { act } from 'react-test-renderer';
import TextInput from './index';

const mockedOnChange = jest.fn();

const component = renderer.create(
  <TextInput
    type="text"
    id="mocked-id"
    placeholder="mocked-placeholder"
    onChange={mockedOnChange}
    className="text-xl"
  />,
);

it('should match snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('should apply provided props', () => {
  expect(component.toTree().rendered.props.className).toEqual('text-xl');
  expect(component.toTree().rendered.props.type).toEqual('text');
  expect(component.toTree().rendered.props.id).toEqual('mocked-id');
  expect(component.toTree().rendered.props.placeholder).toEqual(
    'mocked-placeholder',
  );
});

it('should call provided onChange prop', () => {
  expect(mockedOnChange).toHaveBeenCalledTimes(0);
  // Simulate a change event
  const mEvent = { target: { value: 'mocked value' } };
  act(() => {
    component.root.props.onChange(mEvent);
  });
  expect(mockedOnChange).toHaveBeenCalledTimes(1);
});
