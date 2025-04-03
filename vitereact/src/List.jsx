function List(props) {
  // fruits.sort((a,b)=> b.name.localeCompare(a.name));
  // fruits.sort((a,b)=> a.name.localeCompare(b.name));
  // fruits.sort((a,b)=> a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  // const lowCalFruits = fruits.silter(fruit.calories < 100);
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
export default List;
