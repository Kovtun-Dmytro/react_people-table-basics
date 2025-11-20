import { Person } from '../types';
import { PersonLink } from './PersonLink';

type Props = {
  people: Person[];
  selectedSlug?: string;
};

export const PeopleTable: React.FC<Props> = ({ people, selectedSlug }) => {
  const findByName = (name: string): Person | null => {
    return people.find(p => p.name === name) || null;
  };

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <tr
            data-cy="person"
            key={person.slug}
            className={
              person.slug === selectedSlug ? 'has-background-warning' : ''
            }
          >
            <td>
              <PersonLink person={person} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              {person.motherName ? (
                findByName(person.motherName) ? (
                  <PersonLink person={findByName(person.motherName)} />
                ) : (
                  <span>{person.motherName}</span>
                )
              ) : (
                <span>-</span>
              )}
            </td>
            <td>
              {person.fatherName ? (
                findByName(person.fatherName) ? (
                  <PersonLink person={findByName(person.fatherName)} />
                ) : (
                  <span>{person.fatherName}</span>
                )
              ) : (
                <span>-</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
