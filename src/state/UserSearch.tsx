import { useState, useEffect, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

export const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (name.trim() === '') {
      return;
    }

    setName('');

    const foundUser = users.find((user) => user.name === name);

    if (foundUser) {
      setUser(foundUser);
    }
  };

  return (
    <div>
      <h5>User Search</h5>
      <input ref={inputRef} value={name} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>Search</button>
      <h5>Search result:</h5>
      <div>{user ? user?.name : 'No results.'}</div>
    </div>
  );
};
