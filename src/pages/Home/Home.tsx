import { useEffect, useRef, useState } from 'react';

import { Header } from '../../components';
import Product from '../../components/Producst/Product';
import { Data, Item } from '../../services/api/interfaces';
import {
  Container,
  PaginationButton,
  PaginationContainer,
  ProductsContainer,
} from './style';

export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const [totalPage, setTotalPage] = useState(100);
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`;
    if (page < totalPage + 1) {
      fetch(url)
        .then((response) => response.json())
        .then((response: Data) => {
          setData((old) => [...old, ...response.items]);
          setTotalPage(response.totalPages);
        });
    }
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setPage((old) => old + 1);
      }
    }, options);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  return (
    <Container>
      <Header />
      <ProductsContainer>
        {data && data.map((item) => <Product {...item} key={item.id} />)}
      </ProductsContainer>
      <div ref={loadMoreRef}></div>
    </Container>
  );
}
