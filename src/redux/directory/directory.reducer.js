const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womans',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 4,
      size: 'large',
      linkUrl: 'shop/womans',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 5,
      size: 'large',
      linkUrl: 'shop/mens',
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
