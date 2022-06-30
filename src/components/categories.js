import React, { Component } from "react";

export class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "table",
          name: "Столы",
        },
        {
          key: "sofa",
          name: "Диваны",
        },
        {
          key: "cupboard",
          name: "Шкафы",
        },
        {
          key: "bed",
          name: "Кровати",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default categories;
