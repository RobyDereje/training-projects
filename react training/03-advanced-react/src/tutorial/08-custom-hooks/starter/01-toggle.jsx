import useToggle from "./useToggle";

const ToggleExample = () => {
  const [view, toggleEffect] = useToggle(true)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggleEffect}>
        toggle
      </button>
      {view && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
