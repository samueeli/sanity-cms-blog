import { Post } from '../typings';

interface Props {
  post: Post;
}

export const PostSerializers = {
  h1: (props: Props) => (
    <h1
      style={{
        marginBottom: '20px',
        fontWeight: '700',
        fontSize: '30px',
      }}
      {...props}
    />
  ),
  h2: (props: Props) => (
    <h2
      style={{
        marginBottom: '20px',
        fontWeight: '700',
        fontSize: '24px',
      }}
      {...props}
    />
  ),
  h3: (props: Props) => (
    <h3
      style={{
        marginBottom: '20px',
        fontWeight: '700',
        fontSize: '20px',
      }}
      {...props}
    />
  ),
  h4: (props: Props) => (
    <h4
      style={{
        marginBottom: '20px',
        fontWeight: '700',
        fontSize: '18px',
      }}
      {...props}
    />
  ),
  normal: (props: Props) => <p style={{ marginBottom: '20px' }} {...props} />,
};
