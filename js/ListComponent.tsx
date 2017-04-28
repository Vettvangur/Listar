import * as React            from 'react';

interface Props {
    heading: string;
    items: string[];
}

// class State {

// }

const ListComponent = ({ heading, items}: Props) => 
    <article>
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </article>
;

export default ListComponent;