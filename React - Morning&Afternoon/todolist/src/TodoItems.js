import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return <li>
                    <p>
                        {item.text}
                        <span>
                        <FontAwesomeIcon className="faicons" icon="trash" onClick={() => this.delete(item.key)} key={item.key} />
                        </span>
                    </p>
                </li> 
    }
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
      return (
        <ul className="theList">
            {listItems}
        </ul>
      );
    }
  };
   
  export default TodoItems;