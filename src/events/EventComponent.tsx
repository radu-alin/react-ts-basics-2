export const EventComponent = () => {
  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('%c-> developmentConsole: event= ', 'color:#77dcfd', event);
  };

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('%c-> developmentConsole: event= ', 'color:#77dcfd', event);
  };

  return (
    <div>
      <h5>Event learning, onChange</h5>
      <input onChange={onInputChangeHandler} />
      <h5>Event learning, onDragStart</h5>
      <div draggable onDragStart={onDragStartHandler}>
        <span style={{ border: '1px solid black', padding: '0.25rem' }}>
          Drag me!
        </span>
      </div>
    </div>
  );
};
