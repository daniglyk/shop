import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/showFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "table",
          price: "79.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofa",
          price: "100.99",
        },
        {
          id: 4,
          title: "Шкаф",
          img: "skaf.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "cupboard",
          price: "120.99",
        },
        {
          id: 5,
          title: "Кровать",
          img: "bed.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "bed",
          price: "110.99",
        },
        {
          id: 6,
          title: "Стул",
          img: "chair1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 7,
          title: "Стул",
          img: "chair3.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 8,
          title: "Кровать",
          img: "bed1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "bed",
          price: "110.99",
        },
        {
          id: 9,
          title: "Кровать",
          img: "bed2.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "bed",
          price: "110.99",
        },
        {
          id: 10,
          title: "Стол",
          img: "table1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "table",
          price: "79.99",
        },
        {
          id: 11,
          title: "Стол",
          img: "table2.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "table",
          price: "79.99",
        },
        {
          id: 12,
          title: "Диван",
          img: "sofa1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofa",
          price: "100.99",
        },
        {
          id: 13,
          title: "Диван",
          img: "sofa2.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofa",
          price: "100.99",
        },
        {
          id: 14,
          title: "Шкаф",
          img: "skaf1.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "cupboard",
          price: "120.99",
        },
        {
          id: 15,
          title: "Шкаф",
          img: "skaf2.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "cupboard",
          price: "120.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
        console.log(this.state.orders);
      });
  }
}

export default App;
