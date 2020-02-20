import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addContact,
  filterContacts,
  clearFilterVal
} from '../../redux/actionCreators';
import shortId from 'shortid';
import styles from './contactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: ''
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!this.props.contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      const createdContact = { name, number, id: shortId() };
      this.props.addContact(createdContact);
      this.setState({
        ...INITIAL_STATE
      });
    } else {
      alert(`${name} is already in contacts!`);
    }
  };

  handleFilterChange = e => {
    if (e.target.value !== '') {
      this.props.filterContacts(e.target.value);
    } else {
      this.props.clearFilterVal();
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.contactForm}>
          <label className={styles.inputLabel}>
            Name:
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.inputLabel}>
            Number:
            <input
              type='text'
              name='number'
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Add Contact</button>
        </form>
        <div className={styles.inputWrapper}>
        <input
            type='text'
            placeholder='Search contacts by name...'
            value={this.props.filterVal}
            onChange={this.handleFilterChange}
          />
          </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  filterVal: state.filter
});

export default connect(mapStateToProps, {
  addContact,
  filterContacts,
  clearFilterVal
})(ContactForm);