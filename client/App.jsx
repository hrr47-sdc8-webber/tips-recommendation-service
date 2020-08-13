import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = '';
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return ();
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);