import { FaUserAltSlash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import { List } from './Contactlist.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

const ContactList = () => {
  const { data = [], isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);
  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  let rendered = filter === '' ? data : filteredContacts();

  return (
    <List>
      {isFetching && <p>...Loading</p>}
      {data &&
        rendered.map(({ id, name, number }) => (
          <li key={id} id={id}>
            {name}: {number}
            <button type="button" onClick={() => deleteContact(id)}>
              <FaUserAltSlash size={20} color={'red'} />
            </button>
          </li>
        ))}
    </List>
  );
};

export default ContactList;
