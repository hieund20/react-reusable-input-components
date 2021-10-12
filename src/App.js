import './App.scss';
import Input from './components/Input';

function App() {
  return (
    <div className="app">
      <h1>Inputs</h1>
      {'<Input />'}
      <br />
      <br />
      <Input />
      <br />
      <br />
      {'<Input error />'}
      <br />
      <br />
      <Input
        error
      />
      <br />
      <br />
      {'<Input disabled />'}
      <br />
      <br />
      <Input
        disabled
      />
      <br />
      <br />
      {'<Input helperText=”Some interesting text” />'}
      <br />
      <br />
      <Input
        helperText="Some interesting text"
      />
      <br />
      <br />
      {'<Input helperText="Some interesting text" error />'}
      <br />
      <br />
      <Input
        helperText="Some interesting text"
        error
      />
      <br />
      <br />
      {'<Input startIcon />'}
      <br />
      <br />
      <Input
        startIcon
      />
      <br />
      {'<Input endIcon />'}
      <br />
      <br />
      <Input
        endIcon
      />
      <br />
      {'<Input value="text" />'}
      <br />
      <br />
      <Input
        value='Text'
      />
      <br />
      <br />
      {'<Input size="sm" />'}
      <br />
      <br />
      <Input
        size='sm'
      />
      <br />
      <br />
      {'<Input size="md" />'}
      <br />
      <br />
      <Input
        size='md'
      />
      <br />
      <br />
      {'<Input fullWidth />'}
      <br />
      <br />
      <Input
        value='Text'
        fullWidth
      />
      <br />
      <br />
      {'<Input multiline row=”4” />'}
      <br />
      <br />
      <Input
        multiline
        row='4'
      />
    </div>
  );
}

export default App;
