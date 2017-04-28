import * as React            from 'react';

interface Props {
    head: string;
    items: string[];
}

// class State {

// }

const ListComponent = ({head, items}: Props) => 
    <article className="fl w-100 w-100-m w-third-ns p0 pr4-ns">
        <ul className="list pl0 pt2 measure">
            <h1 className="f4 bold center">{head}</h1>
            {items.map(item => <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 overflow-hidden nowrap" key={item}>{item}</li>)}
        </ul>
    </article>
;

export default ListComponent;