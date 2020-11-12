const ToDo = ({text, movefinal})=>{
	const move = () => movefinal(text);
	return (
	<li className="todo" onClick={move}>
		{text}
	</li>
	);
};//ToDo: li para mostrar

const ToDos = ({})=>{
	const [text, setText] = React.useState('');
	const [todos, updateTodos] = React.useState([]);
	
	const value = (e) => setText(e.target.value);//Valor para el input

	const addTodo = (e)=>{

		updateTodos((todos)=>{
			if(text === '') return todos;
			const copyTodos = [...todos];
			copyTodos.push(text);
			setText("");
			return copyTodos;
		});//Agregar valores al array
	};
	return (
		<div className="container">
			<input type="text" className="todoinpt" value={text} onChange={value}/>
			<button className="btnadd" onClick={addTodo}>Agregar</button>
			<ol className="todos">
				{todos.map((todo, index)=>{
					const moveFinalList = (text) => updateTodos(
						(oldTodos) => {
							const res = oldTodos.filter((todo) => todo !== text);
							res.push(text)
							return res;
						}
					);
					return <ToDo key={index} text={todo} movefinal={moveFinalList}/>;//Elemento ToDo
				})}
			</ol>
		</div>
	);//Regresa el contenido y la funcionalidad
};//Todos

const App = ()=>(
	<main>
		<ToDos />
	</main>
);

ReactDOM.render(<App />, document.getElementById('root'));