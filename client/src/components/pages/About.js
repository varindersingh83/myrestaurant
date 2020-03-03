import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import './about.css';

const About = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      contact.email = 'myemail';
      contact.name = 'name';
      contact.phone = 'myemail';
      contact.type = 'personal';
      console.log('contact = ', contact);
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  const recommendedList = [
    {
      id: 1,
      name: 'Umbria',
      email: 'SF',
      phone: 'I love it',
      type: 'personal',
      imgURL:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: "suju's",
      email: 'NY',
      phone: 'I love it',
      type: 'personal',
      imgURL:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Rosa',
      email: 'toronto',
      phone: 'I love it',
      type: 'personal',
      imgURL:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'BurgerPlace',
      email: 'HK',
      phone: 'I love it',
      type: 'personal',
      imgURL:
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ];
  return (
    <div>
      <h1>Our recommended restaurant list</h1>
      <div className='myContainer'>
        {recommendedList.map(list => (
          <div key={list.id} className='imgContainer'>
            <img className='myImages' src={list.imgURL} alt='restaurant' />
            <p>
              Name: {list.name} --- City: {list.email}
            </p>
            <button className='btn btn-dark btn-sm' onClick={onSubmit}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
