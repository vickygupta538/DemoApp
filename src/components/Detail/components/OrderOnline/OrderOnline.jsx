import React, { useCallback, useRef, useState } from 'react';
import ItemCard from './components/ItemCard/ItemCard';
import styles from './OrderOnline.module.scss';
import useIntersection from '../../../../common/ImageRender/IntersectionObserver';
import { useEffect } from 'react';

const categories = [
  'Recommended',
  'Classic Pizzas',
  'Veg Pizzas',
  'Non-Veg Pizzas',
  'Classic Pizza Pack Of 4',
  'Garlic Bread',
  'Pasta',
  'Sides',
  'Desserts & Milkshakes',
];

const item = [
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/ad1/ed69a707692ce8edade985ed6c60aad1.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/962/eeb5e1b22fb4405620892e2f674b9962.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/fd5/35ecb219d05aad4f649d743d42032fd5.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/ad1/ed69a707692ce8edade985ed6c60aad1.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/962/eeb5e1b22fb4405620892e2f674b9962.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/fd5/35ecb219d05aad4f649d743d42032fd5.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/ad1/ed69a707692ce8edade985ed6c60aad1.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/962/eeb5e1b22fb4405620892e2f674b9962.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/752/c5e0d7b988590b6cc3c0009ec22c0752.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/fd5/35ecb219d05aad4f649d743d42032fd5.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
  {
    url: 'https://b.zmtcdn.com/data/dish_photos/755/4c24275229ee572c2d7db64a2bf1c755.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
    height: 100,
    width: 100,
  },
];

const OrderOnline = (props) => {
  const [items, setItems] = useState(item);
  const cardRef = useRef();

  const listRef = useRef([]);

  // console.log('log', cardRef);
  // useIntersection(
  //   cardRef,
  //   useCallback(() => {
  //     console.log('called');
  //     setItems((prevItems) => [...prevItems, ...item]);
  //   }, [JSON.stringify(items)]),
  // );

  const setView = (_index) => {
    // window.scrollTo(0, this.myRef.current.offsetTop);
    // const top = cardRef.current.offsetTop;
    window.scrollTo(0, listRef.current[_index].offsetTop);
    // listRef.current[_index].scrollIntoView();
  };

  const setRef = (el, index) => {
    // console.log(el, index);
    listRef.current[index] = el;
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftMenu}>
        {categories.map((category, _index) => {
          return <div onClick={() => setView(_index)}>{category}</div>;
        })}
      </div>
      <div className={styles.items} ref={cardRef}>
        {items.map((item, _index) => {
          return _index === items.length - 1 ? (
            <ItemCard {...item} fn={setRef} index={_index} ref={(el) => setRef(el, _index)} />
          ) : (
            <ItemCard {...item} index={_index} ref={(el) => setRef(el, _index)} />
          );
        })}
      </div>
    </section>
  );
};

export default OrderOnline;
