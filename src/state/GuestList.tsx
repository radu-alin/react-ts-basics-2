import React, { useState } from 'react';

export const GuestList = () => {
  const [name, setName] = useState('');

  const [guests, setGuests] = useState<string[]>([]);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (name.trim() === '') {
      return;
    }

    setName('');
    setGuests([...guests, name]);
  };

  const renderContent = guests.map((guest) => <li key={guest}>{guest}</li>);

  return (
    <div>
      <h5>Guest List</h5>
      <input value={name} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>Add Guest</button>
      <ul>{renderContent}</ul>
    </div>
  );
};
