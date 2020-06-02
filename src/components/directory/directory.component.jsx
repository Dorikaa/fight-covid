import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "masks",
          imageUrl:
            "https://cdn.pixabay.com/photo/2020/04/01/21/05/mask-4992753_960_720.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "hand sanitizers",
          imageUrl: "https://image.flaticon.com/icons/png/512/1685/1685967.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "cleaning products",
          imageUrl:
            "https://f0.pngfuel.com/png/828/444/cleaning-utensils-illustration-png-clip-art.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "covid-19 stuff",
          imageUrl: "https://image.flaticon.com/icons/png/512/2785/2785819.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "canned food",
          imageUrl:
            "https://w7.pngwing.com/pngs/854/875/png-transparent-vegetarian-cuisine-canning-food-tin-can-vegetable-goods-eating-sardine-canned-fish.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
