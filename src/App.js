import React from 'react';
import './App.css';
import { getData } from './api/index.js';
import MUIDataTable from 'mui-datatables';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      length: 0,
    };
  }

  transform = data => {
    return data.map(dataRow => {
      let tmp = [];
      Object.keys(dataRow).map(key => {
        tmp.push(dataRow[key]);
        return false;
      });
      return tmp;
    });
  };

  componentDidMount() {
    getData().then(({ data, length }) => {
      data = this.transform(data);
      this.setState({
        data,
        length,
      });
    });
  }

  render() {
    return (
      <MUIDataTable
        title={'JOBS LIST'}
        data={this.state.data}
        options={{
          filterType: 'dropdown',
          responsive: 'scroll',
        }}
        columns={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
        ]}
      />
    );
  }
}

export default App;
