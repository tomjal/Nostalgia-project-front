import useSWR from 'swr';
import { fetcher } from '../../shared/fetcher';

export default function NewsPage() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}