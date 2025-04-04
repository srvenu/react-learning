import style from "./Button.module.css";
let count = 0;

// const handleClick = (name) => {
//   if (count < 3) {
//     count++;
//     alert(`${name} Clicked The Button✌️ ${count} Times`);
//   } else {
//     alert(`${name} Stop Clicking The Button☹️`);
//   }
// };
// const handleClick2 = (name) => alert(`${name} stop clicking me`);

function Button() {
  const handleClick = (e) => alert((e.target.textContent = "Ouch! 🤕"));
  return (
    <button onDoubleClick={(e) => handleClick(e)} className={style.btn}>
      Click Me 😄
    </button>
  );
}

export default Button;
