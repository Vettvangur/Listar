// render items

import * as React     from 'react';
import * as ReactDOM  from 'react-dom';
debugger
import ListComponent  from 'ListComponent';

ReactDOM.render(<ListComponent heading="Head" items={['a', 'b','c']}/>, document.getElementById('root'));