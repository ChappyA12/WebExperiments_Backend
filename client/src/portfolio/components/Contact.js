import React from 'react'
import styled from 'styled-components'

const ContactDiv = styled.div`
  margin: 10px;
  width: 100px;
  height: 100px;
  background-image: ${p =>
    `url(${require('../img/contact/' + p.contact.image)})`};
  background-position: center;
  background-size: 105px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 15px 2px #ccc;

  &:hover {
    box-shadow: 0px 5px 20px 0px #ddd;
    transform: scale(1.05);
  }
`

export default function Contact({ contact }) {
  return (
    <ContactDiv
      contact={contact}
      title={contact.name}
      onClick={_ => (window.location.href = contact.link)}
    />
  )
}
