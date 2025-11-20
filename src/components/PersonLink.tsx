import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person | null;
  name: string;
};

export const PersonLink: React.FC<Props> = ({ person, name }) => {
  if (!person) {
    return <span>{name}</span>;
  }

  const className = person.sex === 'f' ? 'has-text-danger' : '';

  return (
    <Link to={`/people/${person.slug}`} className={className}>
      {name}
    </Link>
  );
};
