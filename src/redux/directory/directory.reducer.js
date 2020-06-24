const INITIAL_STATE = {
  sections: [
    {
      title: "masks",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/04/01/21/05/mask-4992753_960_720.png",
      id: 1,
      linkUrl: "shop/masks",
    },
    {
      title: "hand sanitizers",
      imageUrl: "https://image.flaticon.com/icons/png/512/1685/1685967.png",
      id: 2,
      linkUrl: "shop/sanitize",
    },
    {
      title: "cleaning products",
      imageUrl:
        "https://f0.pngfuel.com/png/828/444/cleaning-utensils-illustration-png-clip-art.png",
      id: 3,
      linkUrl: "shop/cproducts",
    },
    {
      title: "covid-19 stuff",
      imageUrl: "https://image.flaticon.com/icons/png/512/2785/2785819.png",
      size: "large",
      id: 4,
      linkUrl: "shop/covid19",
    },
    {
      title: "canned food",
      imageUrl:
        "https://w7.pngwing.com/pngs/854/875/png-transparent-vegetarian-cuisine-canning-food-tin-can-vegetable-goods-eating-sardine-canned-fish.png",
      size: "large",
      id: 5,
      linkUrl: "shop/food",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
