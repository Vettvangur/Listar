// render items

import * as React     from 'react';
import * as ReactDOM  from 'react-dom';

import ListComponent  from 'ListComponent';

import data           from 'data';

const ListContainer = () => 
    <div>
        {data.map(obj => 
           <ListComponent key={obj.head} {...obj} />
        )}
    </div>

ReactDOM.render(<ListContainer/>, document.getElementById('root'));