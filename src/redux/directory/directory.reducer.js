const INITIAL_STATE = {
  sections: [
    {
      title: "masks",
      imageUrl: "/images/mask1.jpg",
      id: 1,
      linkUrl: "shop/masks",
    },
    {
      title: "hand sanitizers",
      imageUrl: "/images/sanitize3.jpg",
      id: 2,
      linkUrl: "shop/sanitize",
    },
    {
      title: "cleaning products",
      imageUrl: "/images/clean4.jpg",
      id: 3,
      linkUrl: "shop/cproducts",
    },
    {
      title: "covid-19 packages",
      imageUrl: "/images/promotion.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/covid19",
    },
    {
      title: "canned food",
      imageUrl: "/images/food.jpg",
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
