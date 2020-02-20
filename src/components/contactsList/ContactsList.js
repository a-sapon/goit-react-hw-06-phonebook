import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actionCreators';

const ContactsList = ({ contacts, searchResult, deleteContact }) =>
  searchResult.length !== 0 ? (
    <ul>
      {searchResult.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button type='button' onClick={() => deleteContact(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  ) : (
    contacts.length !== 0 && (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <button type='button' onClick={() => deleteContact(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    )
  );

const mapStateToProps = state => ({
  contacts: state.contacts,
  searchResult: state.searchResult
});

export default connect(mapStateToProps, { deleteContact })(ContactsList);
